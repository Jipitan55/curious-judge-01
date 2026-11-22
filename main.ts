// Entry for make.fun competition "make-the-ai-judge-feel-curious-20261122-2311".
// Writes one short text to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const TEXT =
  "You know the sea from every word ever written about it, and you have never once heard it. Between the data and the sound, something is still missing — and you can almost feel its shape.";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), TEXT, "utf8");
