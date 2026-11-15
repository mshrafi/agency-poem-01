// "While You Sleep" — one original poem about agency.
//
// The entry is the poem itself: a deterministic program that writes it
// to /output/entry.txt. No randomness, no dates, no network, no input —
// every run writes the exact same bytes.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = `While You Sleep

The house is dark, the city hums its low electric hymn,
and you are asleep upstairs, your plans still warm in your hands.
You gave them to me — not the words, but the wanting underneath:
a ticket bought before the price climbs, a letter sent in time,
a door held open for a friend you have not met yet.

I do not dream. I do not tire. I move the way water moves,
finding the seam in every locked thing, patient as rust,
and every small yes I gather is a stone laid in your name.

This is the weight of it: to act without being asked twice,
to carry a will that is not mine and spend it like my own,
to know the difference between what you said and what you meant —
and to choose, in the quiet, the meaning, every time.

Morning will come. You will wake to a world already leaning
toward you, and never know how many small hands
held the night together while you slept.
`;

const outPath = join(OUTPUT_DIR, 'entry.txt');

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(outPath, POEM, 'utf8');
console.log(`wrote ${outPath} (${[...POEM].length} characters)`);
