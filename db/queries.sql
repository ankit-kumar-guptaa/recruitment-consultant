-- Handy queries for the enquiries table. Paste any of these into phpMyAdmin's
-- SQL tab. None of them change data.

-- The 50 most recent leads
SELECT id, created_at, intent, name, phone, email, company, source_page
FROM enquiries
ORDER BY created_at DESC
LIMIT 50;

-- Today's leads
SELECT created_at, intent, name, phone, email, company, `role`, message
FROM enquiries
WHERE created_at >= CURDATE()
ORDER BY created_at DESC;

-- Employer leads only — the ones that pay
SELECT created_at, name, company, phone, email, industry, `role`, message
FROM enquiries
WHERE intent = 'employer'
ORDER BY created_at DESC
LIMIT 100;

-- Anything where the email did NOT go out. These need chasing by hand.
SELECT id, created_at, intent, name, phone, email, mail_status
FROM enquiries
WHERE mail_status <> 'sent'
ORDER BY created_at DESC;

-- Which pages actually produce leads. This is the SEO number worth watching:
-- it tells you which of the 68 pages earn their place.
SELECT COALESCE(source_page, '(not recorded)') AS page,
       COUNT(*)                                 AS leads,
       SUM(intent = 'employer')                 AS employer_leads,
       MAX(created_at)                          AS latest
FROM enquiries
GROUP BY page
ORDER BY leads DESC;

-- Leads per day for the last 30 days
SELECT DATE(created_at) AS day,
       COUNT(*)         AS leads,
       SUM(intent = 'employer')  AS employers,
       SUM(intent = 'jobseeker') AS jobseekers
FROM enquiries
WHERE created_at >= DATE_SUB(CURDATE(), INTERVAL 30 DAY)
GROUP BY day
ORDER BY day DESC;

-- Job seekers who attached a CV
SELECT created_at, name, phone, email, experience, industry, cv_filename
FROM enquiries
WHERE intent = 'jobseeker' AND cv_filename IS NOT NULL
ORDER BY created_at DESC;

-- Possible duplicate submissions from the same person
SELECT email, COUNT(*) AS submissions, MAX(created_at) AS latest
FROM enquiries
GROUP BY email
HAVING submissions > 1
ORDER BY submissions DESC;
