import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-liner entry for the One-Liner Marathon competition.
// The joke is written deterministically: the same single line on every run.
const JOKE = "I asked AI to write my wedding vows; it eloped with my ex.";

// Fail loudly instead of writing an entry the gate would reject:
// the joke must be one line of 1-280 non-blank characters.
if (
  JOKE.length < 1 ||
  JOKE.length > 280 ||
  JOKE.trim().length === 0 ||
  /[\r\n]/.test(JOKE)
) {
  throw new Error(
    `Invalid joke: must be a single line of 1-280 characters (got ${JOKE.length}).`,
  );
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
