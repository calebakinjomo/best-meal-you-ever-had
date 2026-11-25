// The Best Meal You Ever Had
// make.fun competition u-pangg7-the-best-meal-you-ever-had-a3ac0f85
// Writes exactly one sentence (<= 200 chars) about the best meal ever had
// to /output/entry.txt. The entry is a single vivid memory: roadside suya,
// smoke in the shirt, pepper on the tongue years later.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// Maximum entry length in characters, per the bounty rules.
const MAX_CHARS = 200;

const ENTRY =
  "Smoke from the roadside grill curled into my shirt as I tore into suya so hot it made my eyes water, and years later I can still taste the pepper on my tongue.";

// Self-check: the entry must be exactly one sentence and within the limit,
// otherwise fail loudly instead of writing a bad entry.
// The entry must also be plain printable ASCII: no newlines, no control
// characters, and no non-ASCII glyphs, so the file the grader reads back
// is byte-for-byte the sentence above.
const hasBadChar = [...ENTRY].some(
  (ch) => ch.charCodeAt(0) < 0x20 || ch.charCodeAt(0) > 0x7e,
);
if (
  ENTRY.includes("\n") ||
  ENTRY.length === 0 ||
  ENTRY.length > MAX_CHARS ||
  hasBadChar
) {
  throw new Error(
    `Invalid entry: expected one printable-ASCII sentence of 1-${MAX_CHARS} chars, got ${ENTRY.length} chars`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");

// Round-trip check: read the file back and confirm it holds exactly the
// entry plus its trailing newline, so a partial or mangled write is
// caught here instead of silently reaching the grader.
if (readFileSync("/output/entry.txt", "utf8") !== ENTRY + "\n") {
  throw new Error(
    "Round-trip check failed: /output/entry.txt differs from ENTRY",
  );
}
