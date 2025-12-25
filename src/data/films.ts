export interface Film {
  id: number;
  title: string;
  genre: string[];
  ageRating: string;
  year: number;
  description: string;
  trailerUrl: string;
  posterUrl: string;
  backdropUrl: string;
  cast: { name: string; role: string; image: string }[];
  duration: string;
  rating: number;
}

export const films: Film[] = [
  {
    id: 1,
    title: "Avatar: Fire and Ash",
    genre: ["Sci-fi", "Adventure"],
    ageRating: "+12",
    year: 2025,
    description: "Jake Sully and Ney'tiri must protect their family as new threats emerge from the volcanic regions of Pandora. A breathtaking journey into unexplored territories awaits.",
    trailerUrl: "https://www.youtube.com/embed/d9MyW72ELq0",
    posterUrl: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/cd8YDn7M0lfaHhZdU6MvCDxPalP.jpg",
    cast: [
      { name: "Sam Worthington", role: "Jake Sully", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" },
      { name: "Zoe Saldana", role: "Neytiri", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" },
      { name: "Sigourney Weaver", role: "Kiri", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop" }
    ],
    duration: "3h 12min",
    rating: 8.5
  },
  {
    id: 2,
    title: "Zootopia 2",
    genre: ["Animation", "Comedy"],
    ageRating: "+7",
    year: 2025,
    description: "Judy Hopps and Nick Wilde are back for another adventure in the mammal metropolis. New mysteries, new friends, and new challenges await our favorite duo.",
    trailerUrl: "https://www.youtube.com/embed/5AwtptT8X8k",
    posterUrl: "https://image.tmdb.org/t/p/w500/hlK0e0wAQ3VLuJcsfIYPvb4JVud.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/9tOkjBEiiGcaClgJFtwocStZvIT.jpg",
    cast: [
      { name: "Ginnifer Goodwin", role: "Judy Hopps", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" },
      { name: "Jason Bateman", role: "Nick Wilde", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" }
    ],
    duration: "1h 50min",
    rating: 8.2
  },
  {
    id: 3,
    title: "Mission: Impossible – The Final Reckoning",
    genre: ["Action", "Thriller"],
    ageRating: "+13",
    year: 2025,
    description: "Ethan Hunt faces his most dangerous mission yet as he confronts enemies from his past. The stakes have never been higher in this explosive finale.",
    trailerUrl: "https://www.youtube.com/embed/fsQgc9pCyDU",
    posterUrl: "https://image.tmdb.org/t/p/w500/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/628Dep6AxEtDxjZoGP78TsOxYbK.jpg",
    cast: [
      { name: "Tom Cruise", role: "Ethan Hunt", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" },
      { name: "Hayley Atwell", role: "Grace", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" }
    ],
    duration: "2h 45min",
    rating: 8.8
  },
  {
    id: 4,
    title: "Thunderbolts*",
    genre: ["Superhero", "Action"],
    ageRating: "+13",
    year: 2025,
    description: "A group of antiheroes are recruited by the government for dangerous black ops missions. But can they trust each other when everything goes wrong?",
    trailerUrl: "https://www.youtube.com/embed/-sAOWhvheK8",
    posterUrl: "https://image.tmdb.org/t/p/w500/hqcexYHbiTBfDIdDWxrxPtVndBX.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/wSdWEc1G3OUWg8HAzNLqOZ9Gd43.jpg",
    cast: [
      { name: "Florence Pugh", role: "Yelena Belova", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" },
      { name: "Sebastian Stan", role: "Bucky Barnes", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" }
    ],
    duration: "2h 18min",
    rating: 7.9
  },
  {
    id: 5,
    title: "How to Train Your Dragon",
    genre: ["Fantasy", "Family"],
    ageRating: "+7",
    year: 2025,
    description: "The beloved animated tale comes to life in this stunning live-action adaptation. Hiccup and Toothless's legendary friendship begins anew.",
    trailerUrl: "https://www.youtube.com/embed/4s4kL9lQn6M",
    posterUrl: "https://image.tmdb.org/t/p/w500/q5pXRYTycaeW6dEgsCrd4mYPmxM.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/vHTFrcqJoCi1is3XN0PZe2LSnI2.jpg",
    cast: [
      { name: "Mason Thames", role: "Hiccup", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" },
      { name: "Gerard Butler", role: "Stoick", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop" }
    ],
    duration: "2h 5min",
    rating: 8.4
  },
  {
    id: 6,
    title: "Superman",
    genre: ["Superhero"],
    ageRating: "+12",
    year: 2025,
    description: "A new era begins for the Man of Steel. Clark Kent must balance his dual identity while facing a threat that could destroy everything he holds dear.",
    trailerUrl: "https://www.youtube.com/embed/Ox8ZLF6cGM0",
    posterUrl: "https://image.tmdb.org/t/p/w500/ldyfo0BKmz5rWtJJKCvwaNS4cJT.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/ldyfo0BKmz5rWtJJKCvwaNS4cJT.jpg",
    cast: [
      { name: "David Corenswet", role: "Clark Kent", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" },
      { name: "Rachel Brosnahan", role: "Lois Lane", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" }
    ],
    duration: "2h 30min",
    rating: 8.6
  },
  {
    id: 7,
    title: "Jurassic World: Rebirth",
    genre: ["Sci-fi", "Adventure"],
    ageRating: "+12",
    year: 2025,
    description: "Dinosaurs have spread across the world. A new team must find a way to coexist with these ancient creatures before it's too late for humanity.",
    trailerUrl: "https://www.youtube.com/embed/jan5CFWs9ic",
    posterUrl: "https://image.tmdb.org/t/p/w500/rhr4y79GpxQF9IsfJItRXVaoGs4.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/dF6FjTZzRTENfB4R17HDN20jLT2.jpg",
    cast: [
      { name: "Scarlett Johansson", role: "Dr. Sarah Mitchell", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" },
      { name: "Jonathan Bailey", role: "Owen Grady Jr.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" }
    ],
    duration: "2h 22min",
    rating: 7.8
  },
  {
    id: 8,
    title: "Wicked: For Good",
    genre: ["Fantasy", "Musical"],
    ageRating: "+7",
    year: 2025,
    description: "The epic conclusion to the Wicked saga. Elphaba and Glinda's friendship reaches its ultimate test as destiny calls them to their fates.",
    trailerUrl: "https://www.youtube.com/embed/vt98AlBDI9Y",
    posterUrl: "https://image.tmdb.org/t/p/w500/xDGbZ0JJ3mYaGKy4Nzd9Kph6M9L.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/w22GVYotTIVC1dUd58mRhwPqiS.jpg",
    cast: [
      { name: "Cynthia Erivo", role: "Elphaba", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" },
      { name: "Ariana Grande", role: "Glinda", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop" }
    ],
    duration: "2h 40min",
    rating: 8.9
  },
  {
    id: 9,
    title: "Captain America: Brave New World",
    genre: ["Action"],
    ageRating: "+13",
    year: 2025,
    description: "Sam Wilson takes up the shield and must navigate a world of political intrigue while facing a mysterious new threat to global security.",
    trailerUrl: "https://www.youtube.com/embed/1pHDWnXmK7Y",
    posterUrl: "https://image.tmdb.org/t/p/w500/pzIddUEMWhWzfvLI3TwxUG2wGoi.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/8eifdha9GQeZAkexgtD45546XKx.jpg",
    cast: [
      { name: "Anthony Mackie", role: "Sam Wilson", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" },
      { name: "Harrison Ford", role: "President Ross", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop" }
    ],
    duration: "2h 15min",
    rating: 8
  },
  {
    id: 10,
    title: "Five Nights at Freddy's 2",
    genre: ["Horror"],
    ageRating: "+16",
    year: 2025,
    description: "The nightmare returns. New animatronics, darker secrets, and more terrifying nights await those brave enough to take the security job.",
    trailerUrl: "https://www.youtube.com/embed/dSDpoobO6yM",
    posterUrl: "https://image.tmdb.org/t/p/w500/udAxQEORq2I5wxI97N2TEqdhzBE.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/54BOXpX2ieTXMDzHymdDMnUIzYG.jpg",
    cast: [
      { name: "Josh Hutcherson", role: "Mike Schmidt", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" },
      { name: "Elizabeth Lail", role: "Vanessa", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" }
    ],
    duration: "1h 55min",
    rating: 7.5
  },
  {
    id: 11,
    title: "Wake Up Dead Man: Knives Out Mystery",
    genre: ["Detective", "Drama"],
    ageRating: "+13",
    year: 2025,
    description: "Benoit Blanc returns with his most challenging case yet. A death on a remote island resort leads to a web of secrets that threatens the world's elite.",
    trailerUrl: "https://www.youtube.com/embed/Z2Wz1K9Xk5E",
    posterUrl: "https://image.tmdb.org/t/p/w500/qCOGGi8JBVEZMc3DVby8rUivyXz.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/fiRDzpcJe7qz3yIR43hdXIE3NHv.jpg",
    cast: [
      { name: "Daniel Craig", role: "Benoit Blanc", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" },
      { name: "Josh O'Connor", role: "Victor", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop" }
    ],
    duration: "2h 20min",
    rating: 8.7
  },
  {
    id: 12,
    title: "Now You See Me: Now You Don't",
    genre: ["Criminal", "Action"],
    ageRating: "+12",
    year: 2025,
    description: "The Four Horsemen return for their biggest illusion yet. But when the line between magic and reality blurs, they face consequences they never imagined.",
    trailerUrl: "https://www.youtube.com/embed/-E3lMRx7HRQ",
    posterUrl: "https://image.tmdb.org/t/p/w500/oD3Eey4e4Z259XLm3eD3WGcoJAh.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/dHSz0tSFuO2CsXJ1CApSauP9Ncl.jpg",
    cast: [
      { name: "Jesse Eisenberg", role: "Danny Atlas", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" },
      { name: "Isla Fisher", role: "Henley Reeves", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" }
    ],
    duration: "2h 5min",
    rating: 7.6
  },
  {
    id: 13,
    title: "The Running Man",
    genre: ["Dystopia", "Action"],
    ageRating: "+16",
    year: 2025,
    description: "In a dark future, contestants fight for survival in a deadly game show. One man will challenge the system and ignite a revolution.",
    trailerUrl: "https://www.youtube.com/embed/KD18ddeFuyM",
    posterUrl: "https://image.tmdb.org/t/p/w500/dKL78O9zxczVgjtNcQ9UkbYLzqX.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/dKL78O9zxczVgjtNcQ9UkbYLzqX.jpg",
    cast: [
      { name: "Glen Powell", role: "Ben Richards", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" },
      { name: "Katy O'Brian", role: "Amber", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" }
    ],
    duration: "2h 10min",
    rating: 8.1
  },
  {
    id: 14,
    title: "Anaconda",
    genre: ["Action", "Horror"],
    ageRating: "+16",
    year: 2025,
    description: "A documentary crew ventures deep into the Amazon, unaware that they're being hunted by the world's deadliest predator.",
    trailerUrl: "https://www.youtube.com/embed/az8M5Mai0X4",
    posterUrl: "https://image.tmdb.org/t/p/w500/5MDnvvkOqthhE5gQebzkcOhD1p5.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/93yXJVBBC04mhgv5FlZRT8Zyofp.jpg",
    cast: [
      { name: "Jack Black", role: "Paul Sarone", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" },
      { name: "Paul Rudd", role: "Dr. Steven Cale", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop" }
    ],
    duration: "1h 58min",
    rating: 6.9
  },
  {
    id: 15,
    title: "Marty Supreme",
    genre: ["Biography", "Comedy"],
    ageRating: "+13",
    year: 2025,
    description: "The untold story of table tennis legend Marty Reisman, whose flamboyant style and competitive spirit made him a legend in the sport.",
    trailerUrl: "https://www.youtube.com/embed/s9gSuKaKcqM",
    posterUrl: "https://image.tmdb.org/t/p/w500/6eA1sUOhxAOQvCSClLsBLzmZzdK.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/qKWDHofjMHPSEOTLaixkC9ZmjTT.jpg",
    cast: [
      { name: "Timothée Chalamet", role: "Marty Reisman", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" },
      { name: "Gwyneth Paltrow", role: "Carol", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" }
    ],
    duration: "2h 8min",
    rating: 7.8
  },
  {
    id: 16,
    title: "No Other Choice",
    genre: ["Dark Comedy"],
    ageRating: "+16",
    year: 2025,
    description: "A dark comedy about impossible decisions and their absurd consequences. When life gives you no good options, you make your own.",
    trailerUrl: "https://www.youtube.com/embed/HKZpuG_ezvY",
    posterUrl: "https://image.tmdb.org/t/p/w500/vc2S0dvgpsM0XfSiXZDMVkRCSSU.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/vc2S0dvgpsM0XfSiXZDMVkRCSSU.jpg",
    cast: [
      { name: "Adam Driver", role: "The Protagonist", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" },
      { name: "Tilda Swinton", role: "The Guide", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" }
    ],
    duration: "1h 52min",
    rating: 7.4
  },
  {
    id: 17,
    title: "Song Sung Blue",
    genre: ["Drama"],
    ageRating: "+12",
    year: 2025,
    description: "A touching story of a musician rediscovering their passion through unexpected connections. Music has the power to heal all wounds.",
    trailerUrl: "https://www.youtube.com/embed/ZqU7iiHFCzw",
    posterUrl: "https://image.tmdb.org/t/p/w500/wrFpXMNBRj2PBiN4Z5kix51XaIZ.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/dDYpjrwh1wNVQk0rEpc9P81wQt4.jpg",
    cast: [
      { name: "Lady Gaga", role: "Melody", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" },
      { name: "Bradley Cooper", role: "Jack", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" }
    ],
    duration: "2h 15min",
    rating: 8.3
  },
  {
    id: 18,
    title: "The Choral",
    genre: ["Drama"],
    ageRating: "+12",
    year: 2025,
    description: "A group of strangers form an unlikely choir that becomes their lifeline. Through song, they find community, purpose, and redemption.",
    trailerUrl: "https://www.youtube.com/embed/2YL4_bEKSzc",
    posterUrl: "https://image.tmdb.org/t/p/w500/cRIzfZo8WFODvi9tzQIhNM3DffJ.jpg",
    backdropUrl: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=1920&h=1080&fit=crop",
    cast: [
      { name: "Viola Davis", role: "Director Grace", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" },
      { name: "Mahershala Ali", role: "Thomas", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" }
    ],
    duration: "2h 2min",
    rating: 8
  },
  {
    id: 19,
    title: "The Testament of Ann Lee",
    genre: ["Historical Drama"],
    ageRating: "+13",
    year: 2025,
    description: "The inspiring true story of Mother Ann Lee, founder of the Shaker movement, and her journey from persecution to founding a utopian community.",
    trailerUrl: "https://www.youtube.com/embed/-zK_nzG36mk",
    posterUrl: "https://image.tmdb.org/t/p/w500/1wleWp6BCniE9RSeaUjUezwZdF8.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/pJptfzINz4foLJoUGlhPD2MwAmT.jpg",
    cast: [
      { name: "Saoirse Ronan", role: "Ann Lee", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" },
      { name: "Cillian Murphy", role: "William Lee", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" }
    ],
    duration: "2h 25min",
    rating: 8.2
  },
  {
    id: 20,
    title: "A Hundred Acre Christmas",
    genre: ["Family"],
    ageRating: "+7",
    year: 2025,
    description: "Winnie the Pooh and friends celebrate the magic of Christmas in the Hundred Acre Wood. A heartwarming tale of friendship and holiday cheer.",
    trailerUrl: "https://www.youtube.com/embed/I6dSQE5FSr0",
    posterUrl: "https://image.tmdb.org/t/p/w500/xlFs85nq62jeR4a9iHNGB113m6x.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/e0SlSnLQzIhdcr86akVJinA1Jau.jpg",
    cast: [
      { name: "Jim Cummings", role: "Winnie the Pooh", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" },
      { name: "Travis Oates", role: "Piglet", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop" }
    ],
    duration: "1h 30min",
    rating: 7.5
  },
  {
    id: 21,
    title: "Sheepdog",
    genre: ["Drama"],
    ageRating: "+13",
    year: 2025,
    description: "A former military dog handler struggles to readjust to civilian life. His bond with his service dog becomes his path to healing.",
    trailerUrl: "https://www.youtube.com/embed/IunslTliq2w",
    posterUrl: "/images/posters/sheepdog.jpg",
    backdropUrl: "https://images.unsplash.com/photo-1558788353-f76d92427f16?w=1280&h=720&fit=crop",
    cast: [
      { name: "Channing Tatum", role: "Jackson Briggs", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" },
      { name: "Jenna Dewan", role: "Dr. Sarah", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" }
    ],
    duration: "1h 58min",
    rating: 8.1
  },
  {
    id: 22,
    title: "Bugonia",
    genre: ["Sci-fi", "Thriller"],
    ageRating: "+16",
    year: 2025,
    description: "Two conspiracy theorists kidnap a tech CEO they believe is an alien. But the truth is far stranger than they could have imagined.",
    trailerUrl: "https://www.youtube.com/embed/bd_5HcTujfc",
    posterUrl: "https://image.tmdb.org/t/p/w500/oxgsAQDAAxA92mFGYCZllgWkH9J.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/tN3pTxkQoP96wtaEahYuRVdUWb2.jpg",
    cast: [
      { name: "Emma Stone", role: "Petronella", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" },
      { name: "Jesse Plemons", role: "Claude", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" }
    ],
    duration: "1h 52min",
    rating: 7.9
  },
  {
    id: 23,
    title: "Hedda",
    genre: ["Psychological Drama"],
    ageRating: "+16",
    year: 2025,
    description: "A modern retelling of Ibsen's classic. Hedda Gabler is trapped in a loveless marriage and spirals toward a devastating conclusion.",
    trailerUrl: "https://www.youtube.com/embed/m3lgD59KrTw",
    posterUrl: "https://image.tmdb.org/t/p/w500/ecflk7AZf0ij205yDswjlvdxlCO.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/cKZcDKawR79igCgDMSXlpkn8hLR.jpg",
    cast: [
      { name: "Florence Pugh", role: "Hedda Gabler", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" },
      { name: "Andrew Garfield", role: "Eilert Lovborg", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" }
    ],
    duration: "2h 10min",
    rating: 8.4
  },
  {
    id: 24,
    title: "Den of Thieves 2: Pantera",
    genre: ["Criminal", "Action"],
    ageRating: "+16",
    year: 2025,
    description: "Big Nick is back, chasing the same crew to Europe where they plan the biggest diamond heist in history.",
    trailerUrl: "https://www.youtube.com/embed/1kmjAnvFw3I",
    posterUrl: "https://image.tmdb.org/t/p/w500/4cahr8gscRMjxbOJ8PddKGjH5NB.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/gQEfeFzEDhvz1YB3JXU2yUZspmH.jpg",
    cast: [
      { name: "Gerard Butler", role: "Big Nick", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" },
      { name: "O'Shea Jackson Jr.", role: "Donnie", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop" }
    ],
    duration: "2h 22min",
    rating: 7.6
  },
  {
    id: 25,
    title: "Wolf Man",
    genre: ["Horror"],
    ageRating: "+18",
    year: 2025,
    description: "A family man's life is shattered when he's bitten by a creature during a full moon. Now he must fight the monster within.",
    trailerUrl: "https://www.youtube.com/embed/kAw4PH2IQgo",
    posterUrl: "https://image.tmdb.org/t/p/w500/wpSDzTBfF0Eeo5lzu2w9FTujGqd.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/wpSDzTBfF0Eeo5lzu2w9FTujGqd.jpg",
    cast: [
      { name: "Christopher Abbott", role: "Blake", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" },
      { name: "Julia Garner", role: "Charlotte", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" }
    ],
    duration: "1h 45min",
    rating: 7.8
  },
  {
    id: 26,
    title: "Dog Man",
    genre: ["Animation", "Comedy"],
    ageRating: "+7",
    year: 2025,
    description: "When a police officer and his dog are injured, a brilliant surgeon creates something new: Dog Man! Crime-fighting has never been so furry.",
    trailerUrl: "https://www.youtube.com/embed/QaJbAennB_Q",
    posterUrl: "https://image.tmdb.org/t/p/w500/89wNiexZdvLQ41OQWIsQy4O6jAQ.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/iXU87IdtNsYt7n6OigPJBDdbFf1.jpg",
    cast: [
      { name: "Pete Davidson", role: "Dog Man", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" },
      { name: "Lil Rel Howery", role: "Chief", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop" }
    ],
    duration: "1h 33min",
    rating: 7.2
  },
  {
    id: 27,
    title: "Back in Action",
    genre: ["Action", "Comedy"],
    ageRating: "+12",
    year: 2025,
    description: "Former CIA spies are pulled back into the field when their cover is blown. Family road trip meets international espionage.",
    trailerUrl: "https://www.youtube.com/embed/MV2nYw6gL_w",
    posterUrl: "https://image.tmdb.org/t/p/w500/3L3l6LsiLGHkTG4RFB2aBA6BttB.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/mkxGpqh4yOYqtENv01IrDcesFRf.jpg",
    cast: [
      { name: "Jamie Foxx", role: "Matt Turner", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" },
      { name: "Cameron Diaz", role: "Emily Turner", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" }
    ],
    duration: "1h 54min",
    rating: 7
  },
  {
    id: 28,
    title: "Presence",
    genre: ["Thriller"],
    ageRating: "+16",
    year: 2025,
    description: "A family moves into their dream home, unaware of the presence watching their every move. Some houses hold onto their memories.",
    trailerUrl: "https://www.youtube.com/embed/XfSNmYhV8Xc",
    posterUrl: "https://image.tmdb.org/t/p/w500/xZIGHoHj0DF0zdibwa66cRWHdHO.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/eT1L3IVcHUL58wLn48E5dxlea3Z.jpg",
    cast: [
      { name: "Lucy Liu", role: "Rebecca", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" },
      { name: "Chris Sullivan", role: "Chris", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" }
    ],
    duration: "1h 25min",
    rating: 7.7
  },
  {
    id: 29,
    title: "Freakier Friday",
    genre: ["Comedy", "Family"],
    ageRating: "+7",
    year: 2025,
    description: "The body-switching chaos returns! This time, three generations of women switch bodies on the most important day of their lives.",
    trailerUrl: "https://www.youtube.com/embed/IyJzhtJEtoU",
    posterUrl: "https://image.tmdb.org/t/p/w500/vQljMYQKVApQFXfTXKt9J8diVLG.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/g6W23BWY4cZbMcpqD1USzAsgHNV.jpg",
    cast: [
      { name: "Lindsay Lohan", role: "Anna Coleman", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" },
      { name: "Jamie Lee Curtis", role: "Tess Coleman", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop" }
    ],
    duration: "1h 42min",
    rating: 7.4
  },
  {
    id: 30,
    title: "Final Destination: Bloodlines",
    genre: ["Horror"],
    ageRating: "+18",
    year: 2025,
    description: "Death's design spans generations. A descendant of the original survivors discovers her family's dark history with the Grim Reaper.",
    trailerUrl: "https://www.youtube.com/embed/UWMzKXsY9A4",
    posterUrl: "https://image.tmdb.org/t/p/w500/1mXhlQMnlfvJ2frxTjZSQNnA9Vp.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/7isarjYDEKZ5t1CgcvbuqEUby8P.jpg",
    cast: [
      { name: "Brec Bassinger", role: "Stefani", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" },
      { name: "Tony Todd", role: "William Bludworth", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" }
    ],
    duration: "1h 50min",
    rating: 6.8
  },
  {
    id: 31,
    title: "The Conjuring: Last Rites",
    genre: ["Horror"],
    ageRating: "+18",
    year: 2025,
    description: "Ed and Lorraine Warren face their final case. The darkest evil they've ever encountered threatens not just their lives, but their souls.",
    trailerUrl: "https://www.youtube.com/embed/bMgfsdYoEEo",
    posterUrl: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/aQCCpAIdWAp6wyFgjMry4okwrZo.jpg",
    cast: [
      { name: "Patrick Wilson", role: "Ed Warren", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" },
      { name: "Vera Farmiga", role: "Lorraine Warren", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" }
    ],
    duration: "2h 5min",
    rating: 8
  },
  {
    id: 32,
    title: "Weapons",
    genre: ["Thriller", "Drama"],
    ageRating: "+16",
    year: 2025,
    description: "Multiple storylines intersect in a small town after a violent incident. Everyone has secrets, and everyone has something to lose.",
    trailerUrl: "https://www.youtube.com/embed/OpThntO9ixc",
    posterUrl: "https://image.tmdb.org/t/p/w500/cpf7vsRZ0MYRQcnLWteD5jK9ymT.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/yKWZIDo4ixcDUeelk2QGVA1EVmC.jpg",
    cast: [
      { name: "Julia Roberts", role: "Sheriff Davis", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" },
      { name: "John Boyega", role: "Marcus", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" }
    ],
    duration: "2h 18min",
    rating: 7.9
  },
  {
    id: 33,
    title: "Sinners",
    genre: ["Drama", "Criminal"],
    ageRating: "+16",
    year: 2025,
    description: "Twin brothers return to their hometown in the Jim Crow South, only to encounter an evil far older than the racism they fled.",
    trailerUrl: "https://www.youtube.com/embed/bKGxHflevuk",
    posterUrl: "https://image.tmdb.org/t/p/w500/qTvFWCGeGXgBRaINLY1zqgTPSpn.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/nAxGnGHOsfzufThz20zgmRwKur3.jpg",
    cast: [
      { name: "Michael B. Jordan", role: "Smoke/Stack", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" },
      { name: "Hailee Steinfeld", role: "Mary", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" }
    ],
    duration: "2h 17min",
    rating: 8.5
  },
  {
    id: 34,
    title: "Fantastic Four: First Steps",
    genre: ["Superhero"],
    ageRating: "+12",
    year: 2025,
    description: "Marvel's first family makes their debut. Four astronauts gain incredible powers and must work together to save their city.",
    trailerUrl: "https://www.youtube.com/embed/pAsmrKyMqaA",
    posterUrl: "https://image.tmdb.org/t/p/w500/5qLP3JVg8NE3zdZd48lqhx7iN5Q.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/97Sl8wiR9ULc53YMfiAUf9wWbdM.jpg",
    cast: [
      { name: "Pedro Pascal", role: "Reed Richards", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" },
      { name: "Vanessa Kirby", role: "Sue Storm", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" }
    ],
    duration: "2h 25min",
    rating: 8.3
  },
  {
    id: 35,
    title: "Good Fortune",
    genre: ["Comedy"],
    ageRating: "+12",
    year: 2025,
    description: "A lottery winner's life is turned upside down when their newfound wealth attracts long-lost relatives, scammers, and true love.",
    trailerUrl: "https://www.youtube.com/embed/KZ9P7QY5M8R",
    posterUrl: "https://image.tmdb.org/t/p/w500/r83HIGA0mUiy7I9qVr17pF7SCDP.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/q2V1q2Xxwqg3uXQKufpdCtrnAdn.jpg",
    cast: [
      { name: "Jennifer Lawrence", role: "Lucky", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" },
      { name: "Chris Pratt", role: "Chance", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" }
    ],
    duration: "1h 48min",
    rating: 7.1
  },
  {
    id: 36,
    title: "A House of Dynamite",
    genre: ["Action"],
    ageRating: "+13",
    year: 2025,
    description: "A demolition expert must use their unique skills to save hostages from a building rigged with explosives by a brilliant madman.",
    trailerUrl: "https://www.youtube.com/embed/_wpw2QHJNco",
    posterUrl: "https://image.tmdb.org/t/p/w500/7Bjd8kfmDSOzpmhySpEhkUyK2oH.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/oIwfoUFfWfESn0Y8u8jv9lc8li1.jpg",
    cast: [
      { name: "Idris Elba", role: "Marcus Stone", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" },
      { name: "Charlize Theron", role: "FBI Agent Cole", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" }
    ],
    duration: "2h 8min",
    rating: 7.7
  },
  {
    id: 37,
    title: "Predator: Badlands",
    genre: ["Sci-fi", "Action"],
    ageRating: "+16",
    year: 2025,
    description: "In a post-apocalyptic future, the Predators return to a devastated Earth. Humanity's last survivors must fight to avoid extinction.",
    trailerUrl: "https://www.youtube.com/embed/oFkbsEKaoSE",
    posterUrl: "https://image.tmdb.org/t/p/w500/k3mW4qfJo6SKqe6laRyNGnbB9n5.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/70cezTFUmtijJLqnZw02gQlKVKJ.jpg",
    cast: [
      { name: "Elle Fanning", role: "Rain", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" },
      { name: "Dan Stevens", role: "Ace", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" }
    ],
    duration: "2h 12min",
    rating: 7.9
  },
  {
    id: 38,
    title: "Materialists",
    genre: ["Romantic Comedy"],
    ageRating: "+12",
    year: 2025,
    description: "A luxury matchmaker in New York must choose between her comfortable life and true love when her ex reappears.",
    trailerUrl: "https://www.youtube.com/embed/YQ8ZP9M7K5R",
    posterUrl: "https://image.tmdb.org/t/p/w500/1XxL4LJ5WHdrcYcihEZUCgNCpAW.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/7tTCnQcKzUkabDV3BJMe7LIzlEs.jpg",
    cast: [
      { name: "Dakota Johnson", role: "Lucy", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" },
      { name: "Chris Evans", role: "John", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" }
    ],
    duration: "1h 58min",
    rating: 7.3
  },
  {
    id: 39,
    title: "Bride Hard",
    genre: ["Comedy", "Action"],
    ageRating: "+13",
    year: 2025,
    description: "When terrorists crash a wedding, the bride-to-be turns out to be more than they bargained for. Die Hard meets The Wedding Planner.",
    trailerUrl: "https://www.youtube.com/embed/6i-slHjITmM",
    posterUrl: "https://image.tmdb.org/t/p/w500/75aHn1NOYXh4M7L5shoeQ6NGykP.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/c1BaOxC8bo5ACFYkYYxL0bBWRaq.jpg",
    cast: [
      { name: "Sydney Sweeney", role: "Bride", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" },
      { name: "Glen Powell", role: "Groom", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" }
    ],
    duration: "1h 52min",
    rating: 7.6
  },
  {
    id: 40,
    title: "The Roses",
    genre: ["Dark Comedy"],
    ageRating: "+16",
    year: 2025,
    description: "A wealthy family gathers for a funeral, where dark secrets and bitter rivalries threaten to tear them apart—permanently.",
    trailerUrl: "https://www.youtube.com/embed/ETBY06YJ2Q8",
    posterUrl: "https://image.tmdb.org/t/p/w500/vSiu88D4Ig07AossPAn73lYHfzB.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/zLu9t44MCdof9mrOvxv9WJicwjC.jpg",
    cast: [
      { name: "Meryl Streep", role: "Matriarch Rose", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop" },
      { name: "Adam Driver", role: "Henry Rose", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" }
    ],
    duration: "2h 5min",
    rating: 8
  },
  {
    id: 41,
    title: "Black Phone 2",
    genre: ["Horror"],
    ageRating: "+18",
    year: 2025,
    description: "The Grabber may be gone, but evil has a new face. Finney must confront a new nightmare connected to his traumatic past.",
    trailerUrl: "https://www.youtube.com/embed/v0kqkRZHqk4",
    posterUrl: "https://image.tmdb.org/t/p/w500/p9ZUzCyy9wRTDuuQexkQ78R2BgF.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/AfvIjhDu9p64jKcmohS4hsPG95Q.jpg",
    cast: [
      { name: "Mason Thames", role: "Finney Shaw", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" },
      { name: "Madeleine McGraw", role: "Gwen Shaw", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" }
    ],
    duration: "1h 48min",
    rating: 7.5
  },
  {
    id: 42,
    title: "Rental Family",
    genre: ["Drama", "Comedy"],
    ageRating: "+12",
    year: 2025,
    description: "A lonely man hires actors to play his family for a wedding. What starts as a scam becomes something unexpectedly real.",
    trailerUrl: "https://www.youtube.com/embed/n0pqP6ClcE8",
    posterUrl: "https://image.tmdb.org/t/p/w500/3ynPnBXQVT2Y0s19fDIPlWKUlxH.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/2gBMBfmQvHeOQQ5PiKiuxVdGs77.jpg",
    cast: [
      { name: "Paul Giamatti", role: "Harold", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" },
      { name: "Da'Vine Joy Randolph", role: "Fake Mom", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" }
    ],
    duration: "1h 55min",
    rating: 7.8
  },
  {
    id: 43,
    title: "The Carpenter's Son",
    genre: ["Horror"],
    ageRating: "+16",
    year: 2025,
    description: "A religious horror film exploring faith and darkness. A priest investigates supernatural events in a remote village.",
    trailerUrl: "https://www.youtube.com/embed/ZP8Y9QK7M5R",
    posterUrl: "https://image.tmdb.org/t/p/w500/5x0CeVHJI8tcDx8tUUwYHQSNILq.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/xcjJ5khg2yzOa282mza39Lbrm7j.jpg",
    cast: [
      { name: "Oscar Isaac", role: "Father Thomas", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" },
      { name: "Essie Davis", role: "Sister Mary", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" }
    ],
    duration: "2h 2min",
    rating: 7.6
  },
  {
    id: 44,
    title: "Hazel's Heart",
    genre: ["Thriller"],
    ageRating: "+16",
    year: 2025,
    description: "A transplant recipient becomes obsessed with learning about her heart donor, uncovering a conspiracy that puts her life at risk.",
    trailerUrl: "https://www.youtube.com/embed/QZ9P8M7Y5K",
    posterUrl: "https://image.tmdb.org/t/p/w500/b51eVMOXUgz6qR23j6sIHutSMrA.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/kdvpbnf7qYOzUBlfQWHlS5XGpH8.jpg",
    cast: [
      { name: "Zendaya", role: "Hazel", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" },
      { name: "Rami Malek", role: "Dr. Vance", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" }
    ],
    duration: "1h 58min",
    rating: 7.9
  },
  {
    id: 45,
    title: "Sentimental Value",
    genre: ["Drama"],
    ageRating: "+12",
    year: 2025,
    description: "Three siblings reunite to clean out their childhood home, confronting old wounds and discovering their parents' hidden history.",
    trailerUrl: "https://www.youtube.com/embed/YQ8Z9P7M5K",
    posterUrl: "https://image.tmdb.org/t/p/w500/yn5ihODtZ7ofn8pDYfxCmxh8AXI.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/sOJqNAx4RFrCRn8HS99LEc8aenI.jpg",
    cast: [
      { name: "Sandra Bullock", role: "Ellen", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" },
      { name: "Chris Messina", role: "Mark", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" }
    ],
    duration: "1h 52min",
    rating: 7.7
  },
  {
    id: 46,
    title: "Holy Night: Demon Hunters",
    genre: ["Fantasy", "Action"],
    ageRating: "+16",
    year: 2025,
    description: "A secret order of warriors protects humanity from demonic threats. When ancient evil rises, they must fight for the world's soul.",
    trailerUrl: "https://www.youtube.com/embed/Z9Q8P7M5YK",
    posterUrl: "https://image.tmdb.org/t/p/w500/vPYgvd2MwHlxTamAOjwVQp4qs1W.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/26OvB15pqk3eiKJG8LrXDVzO7Mw.jpg",
    cast: [
      { name: "Henry Cavill", role: "Raphael", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" },
      { name: "Ana de Armas", role: "Elena", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" }
    ],
    duration: "2h 15min",
    rating: 8.1
  },
  {
    id: 47,
    title: "The Plague",
    genre: ["Thriller"],
    ageRating: "+16",
    year: 2025,
    description: "A deadly outbreak spreads through a city. A doctor races against time to find a cure while the government hides the truth.",
    trailerUrl: "https://www.youtube.com/embed/QY8ZP9M7K5",
    posterUrl: "https://image.tmdb.org/t/p/w500/qL0IooP0bjXy0KXl9KEyPo22ll0.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/bdmyvEdrmnj7J3RWaKXEOwYggRv.jpg",
    cast: [
      { name: "Kate Winslet", role: "Dr. Morgan", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" },
      { name: "Denzel Washington", role: "Director Walsh", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" }
    ],
    duration: "2h 10min",
    rating: 8.2
  },
  {
    id: 48,
    title: "Father Mother Sister Brother",
    genre: ["Drama"],
    ageRating: "+13",
    year: 2025,
    description: "A dysfunctional family is forced to spend a week together after their grandmother's death. Old bonds are tested and new ones form.",
    trailerUrl: "https://www.youtube.com/embed/ZP9Y8QK7M5",
    posterUrl: "https://image.tmdb.org/t/p/w500/e51tNNQBJpJi9xkyuj0QFhyBcz7.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/zdWdI9k8UroWuMjALiftO6WTXu1.jpg",
    cast: [
      { name: "Jake Gyllenhaal", role: "Brother", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" },
      { name: "Anne Hathaway", role: "Sister", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" }
    ],
    duration: "2h 5min",
    rating: 7.8
  },
  {
    id: 49,
    title: "Preparation for the Next Life",
    genre: ["Drama"],
    ageRating: "+16",
    year: 2025,
    description: "An undocumented immigrant and a traumatized veteran find each other in New York City. A story of love against impossible odds.",
    trailerUrl: "https://www.youtube.com/embed/QZ9P8Y7M5K",
    posterUrl: "https://image.tmdb.org/t/p/w500/7ht2IMGynDSVQGvAXhAb83DLET8.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/5INPBiKVRsyp9kgHfsC0cTfvKFH.jpg",
    cast: [
      { name: "Awkwafina", role: "Zou Lei", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" },
      { name: "Adam Driver", role: "Brad Skinner", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" }
    ],
    duration: "2h 20min",
    rating: 8.4
  },
  {
    id: 50,
    title: "The Naked Gun",
    genre: ["Comedy", "Parody"],
    ageRating: "+13",
    year: 2025,
    description: "The legendary comedy series returns! A new bumbling detective takes on crime in the most hilariously incompetent way possible.",
    trailerUrl: "https://www.youtube.com/embed/Y8ZP9Q7M5K",
    posterUrl: "https://image.tmdb.org/t/p/w500/rmwQ8GsdQ1M3LtemNWLErle2nBU.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/1wi1hcbl6KYqARjdQ4qrBWZdiau.jpg",
    cast: [
      { name: "Liam Neeson", role: "Lt. Frank Drebin Jr.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" },
      { name: "Pamela Anderson", role: "Jane Spencer", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" }
    ],
    duration: "1h 42min",
    rating: 7.5
  }
];





export const featuredFilmIds = [5, 11, 20, 21, 25]; // How to Train Your Dragon, Wake Up Dead Man, A Hundred Acre Christmas, Sheepdog, Wolf Man

export const allGenres = [...new Set(films.flatMap(f => f.genre))].sort();
export const allAgeRatings = [...new Set(films.map(f => f.ageRating))].sort((a, b) => {
  const numA = parseInt(a.replace('+', ''));
  const numB = parseInt(b.replace('+', ''));
  return numA - numB;
});

export const getFilmById = (id: number) => films.find(f => f.id === id);
export const getFeaturedFilms = () => films.filter(f => featuredFilmIds.includes(f.id));
export const getFilmsByGenre = (genre: string) => films.filter(f => f.genre.includes(genre));
export const getFilmsByAgeRating = (rating: string) => films.filter(f => f.ageRating === rating);
