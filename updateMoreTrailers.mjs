import fs from 'fs';

// Update these 17 films with new trailer URLs
const trailerUpdates = {
  "Anaconda": "az8M5Mai0X4",
  "A House of Dynamite": "_wpw2QHJNco",
  "Bride Hard": "6i-slHjITmM",
  "Marty Supreme": "s9gSuKaKcqM",
  "No Other Choice": "HKZpuG_ezvY",
  "The Roses": "ETBY06YJ2Q8",
  "Rental Family": "n0pqP6ClcE8",
  "Song Sung Blue": "ZqU7iiHFCzw",
  "The Choral": "2YL4_bEKSzc",
  "The Testament of Ann Lee": "-zK_nzG36mk",
  "Sheepdog": "IunslTliq2w",
  "Hedda": "m3lgD59KrTw",
  "Weapons": "OpThntO9ixc",
  "Sinners": "bKGxHflevuk",
  "Bugonia": "bd_5HcTujfc",
  "A Hundred Acre Christmas": "I6dSQE5FSr0",
  "Presence": "XfSNmYhV8Xc"
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
console.log(`\n✅ Updated ${updatedCount}/17 films!`);
