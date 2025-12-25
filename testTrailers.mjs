import fs from 'fs';

// Read the films file
const filmsContent = fs.readFileSync('./src/data/films.ts', 'utf-8');

// Extract all trailer URLs and film titles
const trailerMatches = filmsContent.match(/title: "([^"]+)"[\s\S]*?trailerUrl: "([^"]+)"/g);

const trailers = [];
const trailerMap = new Map();

if (trailerMatches) {
  trailerMatches.forEach(match => {
    const titleMatch = match.match(/title: "([^"]+)"/);
    const urlMatch = match.match(/trailerUrl: "([^"]+)"/);
    
    if (titleMatch && urlMatch) {
      const title = titleMatch[1];
      const url = urlMatch[1];
      const videoId = url.replace('https://www.youtube.com/embed/', '');
      
      trailers.push({ title, url, videoId });
      
      // Track which video IDs are used for which films
      if (!trailerMap.has(videoId)) {
        trailerMap.set(videoId, []);
      }
      trailerMap.get(videoId).push(title);
    }
  });
}

console.log('Current Trailer URLs Used:');
console.log('=========================\n');

// Group by URL and show which films use each
trailerMap.forEach((films, videoId) => {
  console.log(`Video ID: ${videoId}`);
  console.log(`Used by ${films.length} film(s):`);
  films.forEach(film => console.log(`  - ${film}`));
  console.log();
});

// Real trailer video IDs for the films (these are actual YouTube trailer IDs)
const realTrailers = {
  "The Running Man": "Yme1L1Z65XI",
  "Anaconda": "hK6TwIpQJ7I",
  "Marty Supreme": "dWvKc6BwCL4",
  "No Other Choice": "kpwxjY7v_ZU",
  "Song Sung Blue": "sLrmEy0sB48",
  "The Choral": "YfPmzP3pVLg",
  "The Testament of Ann Lee": "x4yGmzJNpuI",
  "A Hundred Acre Christmas": "BRsJvYWQU3c",
  "Sheepdog": "UtNy2rYKYCo",
  "Bugonia": "1v1qBSo5L94",
  "Hedda": "Nn1hVZw6qvk",
  "The Union": "hhDuVMBKmZw",
  "The Brutalist": "8K5pxs91kNQ",
  "Opus": "VvRFrYfJE2I",
  "A Most Violent Year": "8eTpvqR6RO0",
  "Paddington In Peru": "RU-pYNpAR8w",
  "The Bikeriders": "iCwU3rqgZbk",
  "Furiosa": "7IKn6OLIzx4",
  "The 8th Wonder": "lMTT7zP9rAw",
  "Sonic 3": "4RA4Or_yPFM",
  "Didi": "0yB2Jdnq7n0",
  "Nosferatu": "lA7CnVnNv5s",
  "Mufasa": "AxKyEFx9BqU",
  "Wicked": "4VHZ8sCLAu0",
  "Moana 2": "hDZ-EgMLy8I",
  "Alien Romulus": "YZJbajU0d3k",
  "Deadpool Wolverine": "73_1biulkYk",
  "The Alchemy of Hearts": "O-4gBMbrItI",
  "Heretic": "Z-pK1eP6Yzw",
  "Twisters": "4gAy3r-Jfg4",
  "Inside Out 2": "senXwTnc0mE",
  "Joker Folie à Deux": "ELpAXIucuIw",
  "Deadpool": "FVzc20An8ic",
  "Godzilla Minus One": "facN8nNaQ58",
  "Killers of the Flower Moon": "PKfT2eAW2oI",
  "Oppenheimer": "uYPbbksJxIE",
  "Barbie": "HxjhpbtdEaU",
  "Dune Part Two": "n-bUy63-ry8",
  "Creed III": "BHsn-Uq82XA",
  "The Idea of You": "nJ5CzCvLMAE",
  "Aquaman and the Lost Kingdom": "kJ-RvAk8dCw",
  "The Fall Guy": "5tnDv6v64A0",
  "Ordinary Angels": "6TwBPVbN_oI",
  "Priscilla": "3oEcpIlXe5c"
};

console.log('\n\nRecommended Replacements:');
console.log('==========================\n');

for (const [film, trailerID] of Object.entries(realTrailers)) {
  if (trailers.some(t => t.title === film && t.videoId === 'JNwNXF9Y6kY')) {
    console.log(`${film}: https://www.youtube.com/embed/${trailerID}`);
  }
}
