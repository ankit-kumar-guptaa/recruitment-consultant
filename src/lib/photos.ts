import "server-only";
import { existsSync } from "node:fs";
import path from "node:path";

/**
 * Photo slots.
 *
 * Every real photograph on the site is declared here. Drop a file at the
 * declared `src` path, rebuild, and it appears — no code change needed. Until
 * then the page renders its illustrated fallback, so the site is never broken
 * by a missing photo.
 *
 * `brief` is what to shoot or licence for that slot; `usedOn` says where it
 * shows up. Both are there so whoever sources the photography does not have to
 * read the components.
 */
export type PhotoConfig = {
  src: string;
  width: number;
  height: number;
  alt: string;
  brief: string;
  usedOn: string;
};

export const photoSlots = {
  heroConsultant: {
    src: "/images/hero-consultant.webp",
    width: 746,
    height: 1056,
    alt: "Recruitment consultant standing with arms crossed in a modern office",
    brief:
      "Portrait, cut out on a transparent background, full length from the knees up. Currently filled from the supplied design mock-up.",
    usedOn: "Homepage hero",
  },
  aboutTeam: {
    src: "/images/photos/about-team.jpg",
    width: 1200,
    height: 1350,
    alt: "The Recruitment Consultant team at work in the office",
    brief:
      "Portrait orientation, 1200×1350 or larger. Real team at work — a desk, a screen, a conversation. Not a posed line-up against a wall.",
    usedOn: "About page, story section",
  },
  employersMeeting: {
    src: "/images/photos/employers-meeting.jpg",
    width: 1400,
    height: 1000,
    alt: "A consultant reviewing a shortlist with a client hiring manager",
    brief:
      "Landscape, 1400×1000 or larger. Two or three people around a laptop or a printed shortlist. Should read as a client meeting, not a stock handshake.",
    usedOn: "Employers page, commitments section",
  },
  jobSeekerInterview: {
    src: "/images/photos/job-seeker-interview.jpg",
    width: 1400,
    height: 1000,
    alt: "A candidate being briefed before an interview",
    brief:
      "Landscape, 1400×1000 or larger. One-to-one conversation, warm and informal. A candidate being helped, not interrogated.",
    usedOn: "Job seekers page, process section",
  },
  officeReception: {
    src: "/images/photos/office-reception.jpg",
    width: 1400,
    height: 1000,
    alt: "The Recruitment Consultant office reception",
    brief:
      "Landscape, 1400×1000 or larger. The actual office — entrance, reception or the main floor. This is the trust photo on the contact page.",
    usedOn: "Contact page",
  },
} as const satisfies Record<string, PhotoConfig>;

export type PhotoSlot = keyof typeof photoSlots;

/**
 * True when the file for a slot has actually been added to /public.
 *
 * Runs at build time for every page that uses it, because all those pages are
 * statically generated.
 */
export function hasPhoto(slot: PhotoSlot): boolean {
  try {
    return existsSync(path.join(process.cwd(), "public", photoSlots[slot].src));
  } catch {
    return false;
  }
}
