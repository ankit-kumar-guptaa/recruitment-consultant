<?php
/**
 * enquiry.php — Contact form handler for BigRock shared hosting
 * Place this file at: public_html/api/enquiry.php
 *
 * Configure the four constants below and you're done.
 */

// ── Configuration ──────────────────────────────────────────────────────────
define('SMTP_HOST', 'smtp.hostinger.com');
define('SMTP_PORT', 465);          // 465 = SSL, 587 = TLS/STARTTLS
define('SMTP_USER', 'noreply@zneus.com');
define('SMTP_PASS', 'Ankit@000@');
define('MAIL_FROM', 'noreply@zneus.com');
define('MAIL_TO',   'theankitkumarg@gmail.com');
define('ALLOWED_ORIGIN', 'https://recruitmentconsultant.co.in');
// ───────────────────────────────────────────────────────────────────────────

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: ' . ALLOWED_ORIGIN);
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed.']);
    exit;
}

// ── Helpers ─────────────────────────────────────────────────────────────────
function clean(string $val, int $max = 2000): string {
    return mb_substr(trim($val), 0, $max);
}

function valid_email(string $email): bool {
    return (bool) filter_var($email, FILTER_VALIDATE_EMAIL);
}

// ── Honeypot ─────────────────────────────────────────────────────────────────
if (!empty($_POST['website'])) {
    echo json_encode(['ok' => true]);
    exit;
}

// ── Read fields ──────────────────────────────────────────────────────────────
$intent   = ($_POST['intent'] ?? '') === 'jobseeker' ? 'jobseeker' : 'employer';
$name     = clean($_POST['name']     ?? '', 120);
$email    = clean($_POST['email']    ?? '', 160);
$phone    = clean($_POST['phone']    ?? '', 30);
$company  = clean($_POST['company']  ?? '', 160);
$industry = clean($_POST['industry'] ?? '', 120);
$role     = clean($_POST['role']     ?? '', 200);
$exp      = clean($_POST['experience'] ?? '', 60);
$message  = clean($_POST['message']  ?? '', 2000);
$page     = clean($_SERVER['HTTP_REFERER'] ?? ALLOWED_ORIGIN, 300);

date_default_timezone_set('Asia/Kolkata');
$received = date('d M Y, h:i A') . ' IST';

// ── Validation ───────────────────────────────────────────────────────────────
if (!$name || !$phone || !valid_email($email)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Please enter a valid name, phone number and email.']);
    exit;
}

// ── CV attachment (job seekers only) ─────────────────────────────────────────
$cv_attachment = null;
$allowed_ext   = ['pdf', 'doc', 'docx', 'rtf', 'odt'];
$cv_mime_map   = [
    'pdf'  => 'application/pdf',
    'doc'  => 'application/msword',
    'docx' => 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'rtf'  => 'application/rtf',
    'odt'  => 'application/vnd.oasis.opendocument.text',
];

if ($intent === 'jobseeker' && isset($_FILES['cv']) && $_FILES['cv']['error'] === UPLOAD_ERR_OK) {
    $file     = $_FILES['cv'];
    $ext      = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));

    if (!in_array($ext, $allowed_ext, true)) {
        http_response_code(415);
        echo json_encode(['ok' => false, 'error' => 'Please attach a PDF, DOC, DOCX, RTF or ODT file.']);
        exit;
    }
    if ($file['size'] > 5 * 1024 * 1024) {
        http_response_code(413);
        echo json_encode(['ok' => false, 'error' => 'Your CV is larger than 5 MB. Please upload a smaller file.']);
        exit;
    }

    $cv_attachment = [
        'path'     => $file['tmp_name'],
        'filename' => preg_replace('/[^A-Za-z0-9]+/', '-', $name) . '-CV.' . $ext,
        'mime'     => $cv_mime_map[$ext] ?? 'application/octet-stream',
    ];
}

// ── Build email body ──────────────────────────────────────────────────────────
$type_label = $intent === 'employer' ? '🏢 Employer Enquiry' : '👤 Job Seeker Profile';

$body  = "=== {$type_label} ===\n\n";
$body .= "Name     : {$name}\n";
$body .= "Email    : {$email}\n";
$body .= "Phone    : {$phone}\n";
if ($company)  $body .= "Company  : {$company}\n";
if ($industry) $body .= "Industry : {$industry}\n";
if ($role)     $body .= "Role     : {$role}\n";
if ($exp)      $body .= "Exp.     : {$exp}\n";
if ($message)  $body .= "\nMessage  :\n{$message}\n";
$body .= "\nReceived : {$received}\n";
$body .= "Source   : {$page}\n";

$subject = $intent === 'employer'
    ? "New Employer Enquiry from {$name}"
    : "New Job Seeker Profile from {$name}";

// ── Send via PHPMailer (if available) or PHP mail() ──────────────────────────
$sent = false;

// Try PHPMailer first (most BigRock plans have it via Composer or bundled)
$phpmailer_paths = [
    __DIR__ . '/../vendor/autoload.php',
    __DIR__ . '/../../vendor/autoload.php',
    '/home/' . get_current_user() . '/vendor/autoload.php',
];
$autoload_found = false;
foreach ($phpmailer_paths as $p) {
    if (file_exists($p)) { require_once $p; $autoload_found = true; break; }
}

if ($autoload_found && class_exists('PHPMailer\PHPMailer\PHPMailer')) {
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception as PHPMailerException;

    try {
        $mail = new PHPMailer(true);
        $mail->isSMTP();
        $mail->Host       = SMTP_HOST;
        $mail->SMTPAuth   = true;
        $mail->Username   = SMTP_USER;
        $mail->Password   = SMTP_PASS;
        $mail->SMTPSecure = (SMTP_PORT === 465) ? PHPMailer::ENCRYPTION_SMTPS : PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = SMTP_PORT;
        $mail->CharSet    = 'UTF-8';

        $mail->setFrom(MAIL_FROM, 'RecruitmentConsultant.co.in');
        $mail->addReplyTo($email, $name);
        $mail->addAddress(MAIL_TO);
        $mail->Subject = $subject;
        $mail->Body    = $body;

        if ($cv_attachment) {
            $mail->addAttachment($cv_attachment['path'], $cv_attachment['filename'], 'base64', $cv_attachment['mime']);
        }

        $mail->send();
        $sent = true;
    } catch (PHPMailerException $e) {
        error_log('[enquiry] PHPMailer error: ' . $e->getMessage());
    }
}

// Fallback: native PHP mail() — works on almost all shared hosts
if (!$sent) {
    $boundary = md5(uniqid('', true));
    $headers  = "From: " . MAIL_FROM . "\r\n";
    $headers .= "Reply-To: {$email}\r\n";
    $headers .= "MIME-Version: 1.0\r\n";

    if ($cv_attachment) {
        $headers .= "Content-Type: multipart/mixed; boundary=\"{$boundary}\"\r\n";
        $full_body  = "--{$boundary}\r\n";
        $full_body .= "Content-Type: text/plain; charset=UTF-8\r\n\r\n";
        $full_body .= $body . "\r\n";
        $full_body .= "--{$boundary}\r\n";
        $full_body .= "Content-Type: {$cv_attachment['mime']}; name=\"{$cv_attachment['filename']}\"\r\n";
        $full_body .= "Content-Transfer-Encoding: base64\r\n";
        $full_body .= "Content-Disposition: attachment; filename=\"{$cv_attachment['filename']}\"\r\n\r\n";
        $full_body .= chunk_split(base64_encode(file_get_contents($cv_attachment['path']))) . "\r\n";
        $full_body .= "--{$boundary}--";
    } else {
        $headers   .= "Content-Type: text/plain; charset=UTF-8\r\n";
        $full_body  = $body;
    }

    $sent = mail(MAIL_TO, $subject, $full_body, $headers);
}

// ── Log & respond ─────────────────────────────────────────────────────────────
error_log("[enquiry] intent={$intent} name={$name} email={$email} sent=" . ($sent ? 'yes' : 'no'));

if (!$sent) {
    http_response_code(502);
    echo json_encode([
        'ok'    => false,
        'error' => 'We could not send your request just now. Please email us directly at ' . MAIL_TO . '.',
    ]);
    exit;
}

echo json_encode(['ok' => true]);
