import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-liner entry for the One-Liner Marathon competition.
// The joke is written deterministically: the same single line on every run.
const JOKE = "I asked AI to write my wedding vows — it proposed to my ex.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
