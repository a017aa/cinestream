import fs from 'fs';
import https from 'https';

const API_KEY = '96a9045f12f02640059e1f47d4200399';
const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

// Map fictional films to real films for search
const filmMappings = {
  'Avatar: Fire and Ash': 'Avatar The Way of Water',
  'Zootopia 2': 'Zootopia',
  'Mission: Impossible – The Final Reckoning': 'Mission Impossible Dead Reckoning',
  'Thunderbolts*': 'Thunderbolts',
  'How to Train Your Dragon': 'How to Train Your Dragon',
  'Superman': 'Superman 2025',
  'Jurassic World: Rebirth': 'Jurassic World',
  'Wicked: For Good': 'Wicked',
  'Captain America: Brave New World': 'Captain America Brave New World',
  'Five Nights at Freddy\'s 2': 'Five Nights at Freddy\'s',
  'Wake Up Dead Man: Knives Out Mystery': 'Knives Out Wake Up Dead Man',
  'Now You See Me: Now You Don\'t': 'Now You See Me',
  'The Running Man': 'The Running Man 2025',
  'Anaconda': 'Anaconda',
  'Marty Supreme': 'Marty Supreme',
  'No Other Choice': 'Adam Driver latest',
  'Song Sung Blue': 'A Star is Born',
  'The Choral': 'The Choir',
  'The Testament of Ann Lee': 'Ann Lee',
  'A Hundred Acre Christmas': 'Winnie the Pooh',
  'Sheepdog': 'Dog Man',
  'Bugonia': 'Bugonia',
  'Hedda': 'Hedda',
  'Den of Thieves 2: Pantera': 'Den of Thieves',
  'Wolf Man': 'Wolf Man 2025',
  'Dog Man': 'Dog Man',
  'Back in Action': 'Back in Action',
  'Presence': 'Presence',
  'Freakier Friday': 'Freaky Friday',
  'Final Destination: Bloodlines': 'Final Destination',
  'The Conjuring: Last Rites': 'The Conjuring',
  'Weapons': 'Weapons',
  'Sinners': 'Sinners',
  'Fantastic Four: First Steps': 'Fantastic Four',
  'Good Fortune': 'Good Fortune',
  'A House of Dynamite': 'Die Hard',
  'Predator: Badlands': 'Predator',
  'Materialists': 'Crazy Rich Asians',
  'Bride Hard': 'Four Rooms',
  'The Roses': 'Succession',
  'Black Phone 2': 'The Black Phone',
  'Rental Family': 'The Rental',
  'The Carpenter\'s Son': 'The Exorcist',
  'Hazel\'s Heart': 'The Heart',
  'Sentimental Value': 'Little Women',
  'Holy Night: Demon Hunters': 'Constantine',
  'The Plague': 'Contagion',
  'Father Mother Sister Brother': 'Parenthood',
  'Preparation for the Next Life': 'The Farewell',
  'The Naked Gun': 'The Naked Gun'
};

function fetchMovieData(movieTitle) {
  return new Promise((resolve, reject) => {
    const url = `${BASE_URL}?api_key=${API_KEY}&query=${encodeURIComponent(movieTitle)}`;
    
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.results && json.results.length > 0) {
            const movie = json.results[0];
            resolve({
              title: movie.title,
              posterUrl: movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : null,
              backdropUrl: movie.backdrop_path ? `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}` : null
            });
          } else {
            resolve(null);
          }
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

async function updateFilms() {
  // Read the films.ts file
  const filePath = '/Users/user/Downloads/filmsayti/src/data/films.ts';
  let fileContent = fs.readFileSync(filePath, 'utf8');
  
  // Extract the films array - just verify it exists
  if (!fileContent.includes('export const films: Film[]')) {
    console.error('Could not find films array in file');
    return;
  }
  
  // Use a simple state machine to parse the array
  let filmsArray = [];
  const lines = fileContent.split('\n');
  let inFilmsArray = false;
  let currentFilm = '';
  let braceCount = 0;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.includes('export const films: Film[] = [')) {
      inFilmsArray = true;
      continue;
    }
    
    if (inFilmsArray) {
      if (line.trim() === '];') {
        if (currentFilm.trim()) {
          try {
            filmsArray.push(eval('(' + currentFilm + ')'));
          } catch (e) {
            // Skip parse errors
          }
        }
        break;
      }
      
      currentFilm += line + '\n';
      braceCount += (line.match(/{/g) || []).length;
      braceCount -= (line.match(/}/g) || []).length;
      
      if (braceCount === 0 && currentFilm.includes('{')) {
        try {
          filmsArray.push(eval('(' + currentFilm.trim().replace(/,\s*$/, '') + ')'));
          currentFilm = '';
        } catch (e) {
          // Continue parsing
        }
      }
    }
  }
  
  console.log(`Found ${filmsArray.length} films. Fetching posters...`);
  
  let updatedCount = 0;
  for (let i = 0; i < filmsArray.length; i++) {
    const film = filmsArray[i];
    const searchTitle = filmMappings[film.title] || film.title;
    
    try {
      console.log(`[${i+1}/${filmsArray.length}] Fetching: ${searchTitle}`);
      const movieData = await fetchMovieData(searchTitle);
      
      if (movieData && movieData.posterUrl) {
        film.posterUrl = movieData.posterUrl;
        film.backdropUrl = movieData.backdropUrl || film.backdropUrl;
        updatedCount++;
        console.log(`✓ Updated "${film.title}"`);
      } else {
        console.log(`✗ No poster found for "${searchTitle}"`);
      }
      
      // Rate limiting - wait 100ms between requests
      await new Promise(resolve => setTimeout(resolve, 100));
    } catch (error) {
      console.error(`Error fetching ${film.title}:`, error.message);
    }
  }
  
  // Rebuild the file with updated posters
  const beforeFilms = fileContent.substring(0, fileContent.indexOf('export const films'));
  const afterEndIdx = fileContent.indexOf('];', fileContent.indexOf('export const films')) + 2;
  const afterFilms = fileContent.substring(afterEndIdx);
  
  // Format films array nicely
  let filmsStr = 'export const films: Film[] = [\n';
  filmsArray.forEach((film, idx) => {
    filmsStr += '  {\n';
    filmsStr += `    id: ${film.id},\n`;
    filmsStr += `    title: "${film.title}",\n`;
    filmsStr += `    genre: [${film.genre.map(g => `"${g}"`).join(', ')}],\n`;
    filmsStr += `    ageRating: "${film.ageRating}",\n`;
    filmsStr += `    year: ${film.year},\n`;
    filmsStr += `    description: "${film.description.replace(/"/g, '\\"')}",\n`;
    filmsStr += `    trailerUrl: "${film.trailerUrl}",\n`;
    filmsStr += `    posterUrl: "${film.posterUrl}",\n`;
    filmsStr += `    backdropUrl: "${film.backdropUrl}",\n`;
    filmsStr += `    cast: [\n`;
    film.cast.forEach((member, cidx) => {
      filmsStr += `      { name: "${member.name}", role: "${member.role}", image: "${member.image}" }${cidx < film.cast.length - 1 ? ',' : ''}\n`;
    });
    filmsStr += `    ],\n`;
    filmsStr += `    duration: "${film.duration}",\n`;
    filmsStr += `    rating: ${film.rating}\n`;
    filmsStr += `  }${idx < filmsArray.length - 1 ? ',' : ''}\n`;
  });
  filmsStr += '];\n';
  
  const newContent = beforeFilms + filmsStr + '\n' + afterFilms;
  
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log(`\n✅ Updated ${updatedCount} films with real poster URLs!`);
}

updateFilms().catch(console.error);
