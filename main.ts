// The Best Meal You Ever Had
// make.fun competition u-pangg7-the-best-meal-you-ever-had-a3ac0f85
// Writes exactly one sentence (<=200 chars) about the best meal ever had
// to /output/entry.txt

import { mkdirSync, writeFileSync } from "node:fs";

const MAX_CHARS = 200;

const ENTRY =
  "Smoke from the roadside grill curled into my shirt as I tore into suya so hot it made my eyes water, and years later I can still taste the pepper on my tongue.";

// Self-check: the entry must be exactly one sentence and within the limit,
// otherwise fail loudly instead of writing a bad entry.
if (ENTRY.includes("\n") || ENTRY.length === 0 || ENTRY.length > MAX_CHARS) {
  throw new Error(
    `Invalid entry: expected one sentence of 1-${MAX_CHARS} chars, got ${ENTRY.length} chars`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
