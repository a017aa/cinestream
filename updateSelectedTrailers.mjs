import fs from 'fs';

// Update these 16 films with new trailer URLs
const trailerUpdates = {
  "Now You See Me: Now You Don't": "-E3lMRx7HRQ",
  "The Running Man": "KD18ddeFuyM",
  "Den of Thieves 2: Pantera": "1kmjAnvFw3I",
  "Back in Action": "MV2nYw6gL_w",
  "Five Nights at Freddy's 2": "dSDpoobO6yM",
  "Wolf Man": "kAw4PH2IQgo",
  "Final Destination: Bloodlines": "UWMzKXsY9A4",
  "The Conjuring: Last Rites": "bMgfsdYoEEo",
  "Black Phone 2": "v0kqkRZHqk4",
  "Dog Man": "QaJbAennB_Q",
  "Freakier Friday": "IyJzhtJEtoU",
  "Fantastic Four: First Steps": "pAsmrKyMqaA",
  "Superman": "Ox8ZLF6cGM0",
  "Wicked: For Good": "vt98AlBDI9Y",
  "Jurassic World: Rebirth": "jan5CFWs9ic",
  "Predator: Badlands": "oFkbsEKaoSE"
};

let filmsContent = fs.readFileSync('./src/data/films.ts', 'utf-8');
let updatedCount = 0;

// Replace each film's trailer URL
for (const [filmTitle, videoId] of Object.entries(trailerUpdates)) {
  const filmRegex = new RegExp(
    `(title: "${filmTitle.replace(/[.*+?^${}()|[\]\\*]/g, '\\$&')}"[\\s\\S]*?trailerUrl: ")https:\\/\\/www\\.youtube\\.com\\/embed\\/[^"]*(")`
  );
  
  if (filmRegex.test(filmsContent)) {
    filmsContent = filmsContent.replace(
      filmRegex,
      `$1https://www.youtube.com/embed/${videoId}$2`
    );
    console.log(`✓ ${filmTitle}`);
    updatedCount++;
  }
}

fs.writeFileSync('./src/data/films.ts', filmsContent);
console.log(`\n✅ Updated ${updatedCount}/16 films!`);
