import fs from 'fs';

// These are the ORIGINAL video IDs that need to be verified
// We'll compare which ones work vs which don't
const originalToReplacement = {
  "d9MyW72ELq0": { film: "Avatar: Fire and Ash", replacement: "kxjpnm8BQTE" },
  "jWM0ct-OLsM": { film: "Zootopia 2", replacement: "UqXIjxE6M20" },
  "NOhDyUmT9z0": { film: "Mission: Impossible – The Final Reckoning", replacement: "NOhDyUmT9z0" }, // This works!
  "z31cH_Y4J9Q": { film: "Thunderbolts*", replacement: "3m4b10g_PmU" },
  "Z9a4PvzlqoQ": { film: "How to Train Your Dragon", replacement: "Z9a4PvzlqoQ" }, // Keep if works
  "wXWEHn2bJw8": { film: "Superman", replacement: "wXWEHn2bJw8" }, // Keep if works
  "RfinBMTNiR4": { film: "Jurassic World: Rebirth", replacement: "RfinBMTNiR4" }, // Keep if works
  "6COmYeLsz4c": { film: "Wicked: For Good", replacement: "UUkfAKVVMSE" },
  "cuQ5ja-sYbQ": { film: "Captain America: Brave New World", replacement: "cuQ5ja-sYbQ" }, // Keep if works
  "0jnNwSQBBWw": { film: "Five Nights at Freddy's 2", replacement: "0jnNwSQBBWw" }, // Keep if works
  "A_TnSB3H5xw": { film: "Wake Up Dead Man: Knives Out Mystery", replacement: "A_TnSB3H5xw" }, // Keep if works
  "4OtM5LSNsFE": { film: "Now You See Me: Now You Don't", replacement: "4OtM5LSNsFE" } // Keep if works
};

let filmsContent = fs.readFileSync('./src/data/films.ts', 'utf-8');

// Replace only the ones that don't work
const replacements = [
  { old: "z31cH_Y4J9Q", film: "Thunderbolts*", new: "3m4b10g_PmU" },
  { old: "jWM0ct-OLsM", film: "Zootopia 2", new: "UqXIjxE6M20" },
  { old: "d9MyW72ELq0", film: "Avatar: Fire and Ash", new: "kxjpnm8BQTE" },
  { old: "6COmYeLsz4c", film: "Wicked: For Good", new: "UUkfAKVVMSE" }
];

let updatedCount = 0;

for (const { old, film, new: newId } of replacements) {
  const regex = new RegExp(`https:\\/\\/www\\.youtube\\.com\\/embed\\/${old}`, 'g');
  if (regex.test(filmsContent)) {
    filmsContent = filmsContent.replace(regex, `https://www.youtube.com/embed/${newId}`);
    console.log(`✓ Replaced ${film}: ${old} -> ${newId}`);
    updatedCount++;
  }
}

fs.writeFileSync('./src/data/films.ts', filmsContent);
console.log(`\n✅ Updated ${updatedCount} problematic trailers!`);
