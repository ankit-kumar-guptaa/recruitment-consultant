-- Enquiry storage for recruitmentconsultant.co.in
--
-- Run this once against the rc_db database, in hPanel -> Databases ->
-- phpMyAdmin -> rc_db -> SQL tab -> paste -> Go.
--
-- Safe to re-run: it creates the table only if it is not already there.

CREATE TABLE IF NOT EXISTS `enquiries` (
  `id`            BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `created_at`    DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP,

  -- Which side of the form was used: the "looking for candidates" /
  -- "looking for a job" switch.
  `intent`        ENUM('employer','jobseeker') NOT NULL,

  -- Always collected; the form rejects a submission without these three.
  `name`          VARCHAR(120)  NOT NULL,
  `email`         VARCHAR(160)  NOT NULL,
  `phone`         VARCHAR(30)   NOT NULL,

  -- Employer: their company. Job seeker: their last employer.
  `company`       VARCHAR(200)  NULL,
  `industry`      VARCHAR(100)  NULL,
  -- Employer only: the positions they want filled.
  `role`          VARCHAR(300)  NULL,
  -- Job seeker only: total years of experience.
  `experience`    VARCHAR(50)   NULL,
  -- Employer: free-text message. Job seeker: role and preferred location.
  `message`       TEXT          NULL,

  -- The CV file itself is emailed, not stored here — a shared-hosting database
  -- is the wrong place for binaries. These two columns record that one was
  -- attached and let you match it to the email.
  `cv_filename`   VARCHAR(160)  NULL,
  `cv_size_bytes` INT UNSIGNED  NULL,

  -- Which page the visitor was on when they submitted. This is the column that
  -- answers "which of our pages actually produce leads".
  `source_page`   VARCHAR(255)  NULL,
  `user_agent`    VARCHAR(255)  NULL,

  -- Whether the notification email went out. 'pending' means the row was
  -- written but delivery was not attempted or not finished; 'failed' means the
  -- lead is here but nobody was emailed — those need chasing by hand.
  `mail_status`   ENUM('pending','sent','failed') NOT NULL DEFAULT 'pending',

  PRIMARY KEY (`id`),
  KEY `idx_created_at`     (`created_at`),
  KEY `idx_intent_created` (`intent`, `created_at`),
  KEY `idx_email`          (`email`),
  KEY `idx_mail_status`    (`mail_status`)
) ENGINE=InnoDB
  DEFAULT CHARSET=utf8mb4
  COLLATE=utf8mb4_unicode_ci;
