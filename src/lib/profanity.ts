// Profanity/banned-word checker for usernames.
// Prefer using the 'bad-words' package if available, otherwise fall back to
// a small local list of reserved terms. For comprehensive coverage, integrate
// a moderation API or maintain a curated list outside the repo.

const BANNED_WORDS = [
  'admin',
  'root',
  'support',
  'staff',
  'moderator'
];

const leet = (s: string) =>
  s
    .toLowerCase()
    .replace(/[@4]/g, 'a')
    .replace(/[3]/g, 'e')
    .replace(/[1!|]/g, 'i')
    .replace(/[0]/g, 'o')
    .replace(/[5\$]/g, 's')
    .replace(/[7]/g, 't')
    .replace(/\W+/g, '');

let badWordsFilter: any = null;
try {
  // try to use the 'bad-words' package if the project has it installed
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const BadWords = require('bad-words');
  badWordsFilter = new BadWords();
} catch (e) {
  badWordsFilter = null;
}

export function containsBannedWord(username: string): boolean {
  if (!username) return false;
  const normalized = leet(username);

  // If bad-words is available, use it first (it handles many edge cases).
  if (badWordsFilter && typeof badWordsFilter.isProfane === 'function') {
    try {
      if (badWordsFilter.isProfane(normalized)) return true;
    } catch (e) {
      // fall through to local checks
    }
  }

  for (const word of BANNED_WORDS) {
    const w = word.toLowerCase();
    if (!w) continue;
    if (normalized === w) return true;
    if (normalized.includes(w)) return true;
  }

  return false;
}

export default containsBannedWord;
