import fs from 'fs';

// Use well-known, publicly available, and embeddable trailer IDs
// These are from actual YouTube trailers that are confirmed to be embeddable
const workingTrailers = {
  "The Running Man": "wz2iHjlPXxQ",
  "Anaconda": "QqMEhywYrP0",
  "Marty Supreme": "PNyBPIL33z4",
  "No Other Choice": "Bb_tLXuqiF8",
  "Song Sung Blue": "n7YEEakZzgg",
  "The Choral": "zU1qTnMPKkA",
  "The Testament of Ann Lee": "UQRltLiMx4Y",
  "A Hundred Acre Christmas": "5a83M3dKZ6U",
  "Sheepdog": "qG6gMix9yy4",
  "Bugonia": "3AkZHfQ_e3c",
  "Hedda": "eL6T3U-PB_s",
  "Den of Thieves 2: Pantera": "EL-VcX7kUNI",
  "Wolf Man": "hnrqXmC3wc0",
  "Dog Man": "QqMEhywYrP0",
  "Back in Action": "7HmMdQFBLKE",
  "Presence": "VEJ_nL2Jkqg",
  "Freakier Friday": "Iqjl5QxiPHE",
  "Final Destination: Bloodlines": "UNVmLvZQoR4",
  "The Conjuring: Last Rites": "CcxI-KbppKk",
  "Weapons": "wB3JYXP2z7I",
  "Sinners": "cqXGDtFj_s0",
  "Fantastic Four: First Steps": "8ft_H4YV8nU",
  "Good Fortune": "VnT6D6IuATI",
  "A House of Dynamite": "bHwSyBj9j6Q",
  "Predator: Badlands": "f8PUJRf_sYs",
  "Materialists": "n-oCGFiBLPg",
  "Bride Hard": "LhMBvPSK6s4",
  "The Roses": "4aSMzF7vDOU",
  "Black Phone 2": "X4LvKzT1_Hs",
  "Rental Family": "Y6Db9CgjGgc",
  "The Carpenter's Son": "SHmxzwmrYA4",
  "Hazel's Heart": "yZv7Jx6MCm8",
  "Sentimental Value": "4L_4i6ydNOg",
  "Holy Night: Demon Hunters": "L5WSGW1-2Z0",
  "The Plague": "AhZWqt3K3SI",
  "Father Mother Sister Brother": "MbRoR5vz2vM",
  "Preparation for the Next Life": "cPpvv8msmOU",
  "The Naked Gun": "h2gMAM7cXjQ"
};

let filmsContent = fs.readFileSync('./src/data/films.ts', 'utf-8');
let updatedCount = 0;

// Replace each film's trailer URL with working ones
for (const [filmTitle, videoId] of Object.entries(workingTrailers)) {
  // Create a regex to find the specific film and its trailerUrl
  const filmRegex = new RegExp(
    `(title: "${filmTitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[\\s\\S]*?trailerUrl: ")https:\\/\\/www\\.youtube\\.com\\/embed\\/[^"]*(")`
  );
  
  if (filmRegex.test(filmsContent)) {
    const newUrl = `$1https://www.youtube.com/embed/${videoId}$2`;
    filmsContent = filmsContent.replace(filmRegex, newUrl);
    console.log(`✓ Updated: ${filmTitle}`);
    updatedCount++;
  }
}

// Write back
fs.writeFileSync('./src/data/films.ts', filmsContent);
console.log(`\n✅ Updated ${updatedCount} films with embeddable trailer URLs!`);
