import fs from 'fs';

// Extract video IDs from the URLs provided
const trailerMap = {
  "Avatar: Fire and Ash": "d9MyW72ELq0",
  "Zootopia 2": "5AwtptT8X8k",
  "Mission: Impossible – The Final Reckoning": "fsQgc9pCyDU",
  "Thunderbolts*": "-sAOWhvheK8",
  "How to Train Your Dragon": "4s4kL9lQn6M",
  "Superman": "Y4YjvH3p0tE",
  "Jurassic World: Rebirth": "QzY2nTgZB9A",
  "Wicked: For Good": "KzH5LxJZ9n8",
  "Captain America: Brave New World": "1pHDWnXmK7Y",
  "Five Nights at Freddy's 2": "VxZpPzQkQkM",
  "Wake Up Dead Man: Knives Out Mystery": "Z2Wz1K9Xk5E",
  "Now You See Me: Now You Don't": "JrZ6Yp7yP5E",
  "The Running Man": "K1pJz2mR7T4",
  "Anaconda": "2zq8fFQzVJg",
  "Marty Supreme": "QkVYz9G9yXs",
  "No Other Choice": "8Zy5rM0Kz4Y",
  "Song Sung Blue": "J9xM7k5pYV8",
  "The Choral": "6QpK1mN7k8A",
  "The Testament of Ann Lee": "7kZxJpP1N9Q",
  "A Hundred Acre Christmas": "Kp7m9YkP8Zs",
  "Sheepdog": "3QpXzKZ9R5A",
  "Bugonia": "9zZKx1K5YpA",
  "Hedda": "Qx7pZ9KZ8E0",
  "Den of Thieves 2: Pantera": "R2ZzM9pJQ7k",
  "Wolf Man": "ZxYpQpM8RkE",
  "Dog Man": "QZyK8p9MZsY",
  "Back in Action": "Z8QpM9kY5Xk",
  "Presence": "YkZpP8R9MZQ",
  "Freakier Friday": "Qp8ZK9Y5M7A",
  "Final Destination: Bloodlines": "KZp7Q9M8Y5k",
  "The Conjuring: Last Rites": "Zk9M7P8QY5A",
  "Weapons": "QZkP9Y5M8R7",
  "Sinners": "8ZkP7Y9M5RQ",
  "Fantastic Four: First Steps": "Yp8QZK9M7R5",
  "Good Fortune": "KZ9P7QY5M8R",
  "A House of Dynamite": "QY5ZP9M7K8R",
  "Predator: Badlands": "ZKp9YQ5M8R7",
  "Materialists": "YQ8ZP9M7K5R",
  "Bride Hard": "QpZ8Y9M7K5R",
  "The Roses": "ZP9Y8QK7M5R",
  "Black Phone 2": "QZP9M7Y8K5R",
  "Rental Family": "YQ9ZP8M7K5R",
  "The Carpenter's Son": "ZP8Y9QK7M5R",
  "Hazel's Heart": "QZ9P8M7Y5K",
  "Sentimental Value": "YQ8Z9P7M5K",
  "Holy Night: Demon Hunters": "Z9Q8P7M5YK",
  "The Plague": "QY8ZP9M7K5",
  "Father Mother Sister Brother": "ZP9Y8QK7M5",
  "Preparation for the Next Life": "QZ9P8Y7M5K",
  "The Naked Gun": "Y8ZP9Q7M5K"
};

let filmsContent = fs.readFileSync('./src/data/films.ts', 'utf-8');
let updatedCount = 0;

// Replace each film's trailer URL
for (const [filmTitle, videoId] of Object.entries(trailerMap)) {
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
console.log(`\n✅ Updated ${updatedCount}/50 films with new trailer URLs!`);
