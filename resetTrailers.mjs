import fs from 'fs';

// Use ONLY trailers from official verified embeddable sources
// These use official studio channels and confirmed working IDs
const fixedTrailers = {
  "Avatar: Fire and Ash": "d9MyW72ELq0",
  "Zootopia 2": "jWM0ct-OLsM", 
  "Mission: Impossible – The Final Reckoning": "NOhDyUmT9z0",
  "Thunderbolts*": "z31cH_Y4J9Q",
  "How to Train Your Dragon": "Z9a4PvzlqoQ",
  "Superman": "wXWEHn2bJw8",
  "Jurassic World: Rebirth": "RfinBMTNiR4",
  "Wicked: For Good": "6COmYeLsz4c",
  "Captain America: Brave New World": "cuQ5ja-sYbQ",
  "Five Nights at Freddy's 2": "0jnNwSQBBWw",
  "Wake Up Dead Man: Knives Out Mystery": "A_TnSB3H5xw",
  "Now You See Me: Now You Don't": "4OtM5LSNsFE"
};

let filmsContent = fs.readFileSync('./src/data/films.ts', 'utf-8');
let updatedCount = 0;

// Reset these to the original IDs that you confirmed work
for (const [filmTitle, videoId] of Object.entries(fixedTrailers)) {
  const filmRegex = new RegExp(
    `(title: "${filmTitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[\\s\\S]*?trailerUrl: ")https:\\/\\/www\\.youtube\\.com\\/embed\\/[^"]*(")`
  );
  
  if (filmRegex.test(filmsContent)) {
    filmsContent = filmsContent.replace(filmRegex, `$1https://www.youtube.com/embed/${videoId}$2`);
    console.log(`✓ ${filmTitle}`);
    updatedCount++;
  }
}

fs.writeFileSync('./src/data/films.ts', filmsContent);
console.log(`\n✅ Reset ${updatedCount} films to verified working trailers!`);
