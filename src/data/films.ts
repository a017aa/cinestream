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
    posterUrl: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=600&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1920&h=1080&fit=crop",
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
    trailerUrl: "https://www.youtube.com/embed/jWM0ct-OLsM",
    posterUrl: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=400&h=600&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=1920&h=1080&fit=crop",
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
    trailerUrl: "https://www.youtube.com/embed/NOhDyUmT9z0",
    posterUrl: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=1920&h=1080&fit=crop",
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
    trailerUrl: "https://www.youtube.com/embed/z31cH_Y4J9Q",
    posterUrl: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&h=600&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=1920&h=1080&fit=crop",
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
    trailerUrl: "https://www.youtube.com/embed/Z9a4PvzlqoQ",
    posterUrl: "https://images.unsplash.com/photo-1577493340887-b7bfff550145?w=400&h=600&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1577493340887-b7bfff550145?w=1920&h=1080&fit=crop",
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
    trailerUrl: "https://www.youtube.com/embed/wXWEHn2bJw8",
    posterUrl: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=600&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=1920&h=1080&fit=crop",
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
    trailerUrl: "https://www.youtube.com/embed/RfinBMTNiR4",
    posterUrl: "https://images.unsplash.com/photo-1606567595334-d39972c85dfd?w=400&h=600&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1606567595334-d39972c85dfd?w=1920&h=1080&fit=crop",
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
    trailerUrl: "https://www.youtube.com/embed/6COmYeLsz4c",
    posterUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=600&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1920&h=1080&fit=crop",
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
    trailerUrl: "https://www.youtube.com/embed/cuQ5ja-sYbQ",
    posterUrl: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?w=400&h=600&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?w=1920&h=1080&fit=crop",
    cast: [
      { name: "Anthony Mackie", role: "Sam Wilson", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" },
      { name: "Harrison Ford", role: "President Ross", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop" }
    ],
    duration: "2h 15min",
    rating: 8.0
  },
  {
    id: 10,
    title: "Five Nights at Freddy's 2",
    genre: ["Horror"],
    ageRating: "+16",
    year: 2025,
    description: "The nightmare returns. New animatronics, darker secrets, and more terrifying nights await those brave enough to take the security job.",
    trailerUrl: "https://www.youtube.com/embed/0jnNwSQBBWw",
    posterUrl: "https://images.unsplash.com/photo-1509248961725-9d3c5c148f93?w=400&h=600&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1509248961725-9d3c5c148f93?w=1920&h=1080&fit=crop",
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
    trailerUrl: "https://www.youtube.com/embed/A_TnSB3H5xw",
    posterUrl: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1920&h=1080&fit=crop",
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
    trailerUrl: "https://www.youtube.com/embed/4OtM5LSNsFE",
    posterUrl: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=400&h=600&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=1920&h=1080&fit=crop",
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
    trailerUrl: "https://www.youtube.com/embed/JNwNXF9Y6kY",
    posterUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920&h=1080&fit=crop",
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
    trailerUrl: "https://www.youtube.com/embed/JNwNXF9Y6kY",
    posterUrl: "https://images.unsplash.com/photo-1504450874802-0ba2bcd9b5ae?w=400&h=600&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1504450874802-0ba2bcd9b5ae?w=1920&h=1080&fit=crop",
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
    trailerUrl: "https://www.youtube.com/embed/JNwNXF9Y6kY",
    posterUrl: "https://images.unsplash.com/photo-1511994714008-b6d68a8b32a2?w=400&h=600&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1511994714008-b6d68a8b32a2?w=1920&h=1080&fit=crop",
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
    trailerUrl: "https://www.youtube.com/embed/JNwNXF9Y6kY",
    posterUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1920&h=1080&fit=crop",
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
    trailerUrl: "https://www.youtube.com/embed/JNwNXF9Y6kY",
    posterUrl: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=600&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=1920&h=1080&fit=crop",
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
    trailerUrl: "https://www.youtube.com/embed/JNwNXF9Y6kY",
    posterUrl: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=600&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=1920&h=1080&fit=crop",
    cast: [
      { name: "Viola Davis", role: "Director Grace", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" },
      { name: "Mahershala Ali", role: "Thomas", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" }
    ],
    duration: "2h 2min",
    rating: 8.0
  },
  {
    id: 19,
    title: "The Testament of Ann Lee",
    genre: ["Historical Drama"],
    ageRating: "+13",
    year: 2025,
    description: "The inspiring true story of Mother Ann Lee, founder of the Shaker movement, and her journey from persecution to founding a utopian community.",
    trailerUrl: "https://www.youtube.com/embed/JNwNXF9Y6kY",
    posterUrl: "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=400&h=600&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=1920&h=1080&fit=crop",
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
    trailerUrl: "https://www.youtube.com/embed/JNwNXF9Y6kY",
    posterUrl: "https://images.unsplash.com/photo-1512389142860-9c449e58a814?w=400&h=600&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1512389142860-9c449e58a814?w=1920&h=1080&fit=crop",
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
    trailerUrl: "https://www.youtube.com/embed/JNwNXF9Y6kY",
    posterUrl: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=600&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1920&h=1080&fit=crop",
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
    trailerUrl: "https://www.youtube.com/embed/JNwNXF9Y6kY",
    posterUrl: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&h=600&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1920&h=1080&fit=crop",
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
    trailerUrl: "https://www.youtube.com/embed/JNwNXF9Y6kY",
    posterUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=600&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1920&h=1080&fit=crop",
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
    trailerUrl: "https://www.youtube.com/embed/JNwNXF9Y6kY",
    posterUrl: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=600&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1920&h=1080&fit=crop",
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
    trailerUrl: "https://www.youtube.com/embed/JNwNXF9Y6kY",
    posterUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop",
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
    trailerUrl: "https://www.youtube.com/embed/JNwNXF9Y6kY",
    posterUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=600&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop",
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
    trailerUrl: "https://www.youtube.com/embed/JNwNXF9Y6kY",
    posterUrl: "https://images.unsplash.com/photo-1533928298208-27ff66555d8d?w=400&h=600&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1533928298208-27ff66555d8d?w=1920&h=1080&fit=crop",
    cast: [
      { name: "Jamie Foxx", role: "Matt Turner", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" },
      { name: "Cameron Diaz", role: "Emily Turner", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" }
    ],
    duration: "1h 54min",
    rating: 7.0
  },
  {
    id: 28,
    title: "Presence",
    genre: ["Thriller"],
    ageRating: "+16",
    year: 2025,
    description: "A family moves into their dream home, unaware of the presence watching their every move. Some houses hold onto their memories.",
    trailerUrl: "https://www.youtube.com/embed/JNwNXF9Y6kY",
    posterUrl: "https://images.unsplash.com/photo-1509248961725-9d3c5c148f93?w=400&h=600&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1509248961725-9d3c5c148f93?w=1920&h=1080&fit=crop",
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
    trailerUrl: "https://www.youtube.com/embed/JNwNXF9Y6kY",
    posterUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=600&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&h=1080&fit=crop",
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
    trailerUrl: "https://www.youtube.com/embed/JNwNXF9Y6kY",
    posterUrl: "https://images.unsplash.com/photo-1509248961725-9d3c5c148f93?w=400&h=600&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1509248961725-9d3c5c148f93?w=1920&h=1080&fit=crop",
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
    trailerUrl: "https://www.youtube.com/embed/JNwNXF9Y6kY",
    posterUrl: "https://images.unsplash.com/photo-1509248961725-9d3c5c148f93?w=400&h=600&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1509248961725-9d3c5c148f93?w=1920&h=1080&fit=crop",
    cast: [
      { name: "Patrick Wilson", role: "Ed Warren", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" },
      { name: "Vera Farmiga", role: "Lorraine Warren", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" }
    ],
    duration: "2h 5min",
    rating: 8.0
  },
  {
    id: 32,
    title: "Weapons",
    genre: ["Thriller", "Drama"],
    ageRating: "+16",
    year: 2025,
    description: "Multiple storylines intersect in a small town after a violent incident. Everyone has secrets, and everyone has something to lose.",
    trailerUrl: "https://www.youtube.com/embed/JNwNXF9Y6kY",
    posterUrl: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=1920&h=1080&fit=crop",
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
    trailerUrl: "https://www.youtube.com/embed/JNwNXF9Y6kY",
    posterUrl: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=600&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1920&h=1080&fit=crop",
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
    trailerUrl: "https://www.youtube.com/embed/JNwNXF9Y6kY",
    posterUrl: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&h=600&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=1920&h=1080&fit=crop",
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
    trailerUrl: "https://www.youtube.com/embed/JNwNXF9Y6kY",
    posterUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1920&h=1080&fit=crop",
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
    trailerUrl: "https://www.youtube.com/embed/JNwNXF9Y6kY",
    posterUrl: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=1920&h=1080&fit=crop",
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
    trailerUrl: "https://www.youtube.com/embed/JNwNXF9Y6kY",
    posterUrl: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=600&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1920&h=1080&fit=crop",
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
    trailerUrl: "https://www.youtube.com/embed/JNwNXF9Y6kY",
    posterUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=600&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&h=1080&fit=crop",
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
    trailerUrl: "https://www.youtube.com/embed/JNwNXF9Y6kY",
    posterUrl: "https://images.unsplash.com/photo-1533928298208-27ff66555d8d?w=400&h=600&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1533928298208-27ff66555d8d?w=1920&h=1080&fit=crop",
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
    trailerUrl: "https://www.youtube.com/embed/JNwNXF9Y6kY",
    posterUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1920&h=1080&fit=crop",
    cast: [
      { name: "Meryl Streep", role: "Matriarch Rose", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop" },
      { name: "Adam Driver", role: "Henry Rose", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" }
    ],
    duration: "2h 5min",
    rating: 8.0
  },
  {
    id: 41,
    title: "Black Phone 2",
    genre: ["Horror"],
    ageRating: "+18",
    year: 2025,
    description: "The Grabber may be gone, but evil has a new face. Finney must confront a new nightmare connected to his traumatic past.",
    trailerUrl: "https://www.youtube.com/embed/JNwNXF9Y6kY",
    posterUrl: "https://images.unsplash.com/photo-1509248961725-9d3c5c148f93?w=400&h=600&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1509248961725-9d3c5c148f93?w=1920&h=1080&fit=crop",
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
    trailerUrl: "https://www.youtube.com/embed/JNwNXF9Y6kY",
    posterUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=600&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&h=1080&fit=crop",
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
    trailerUrl: "https://www.youtube.com/embed/JNwNXF9Y6kY",
    posterUrl: "https://images.unsplash.com/photo-1509248961725-9d3c5c148f93?w=400&h=600&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1509248961725-9d3c5c148f93?w=1920&h=1080&fit=crop",
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
    trailerUrl: "https://www.youtube.com/embed/JNwNXF9Y6kY",
    posterUrl: "https://images.unsplash.com/photo-1509248961725-9d3c5c148f93?w=400&h=600&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1509248961725-9d3c5c148f93?w=1920&h=1080&fit=crop",
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
    trailerUrl: "https://www.youtube.com/embed/JNwNXF9Y6kY",
    posterUrl: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=600&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=1920&h=1080&fit=crop",
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
    trailerUrl: "https://www.youtube.com/embed/JNwNXF9Y6kY",
    posterUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=600&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1920&h=1080&fit=crop",
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
    trailerUrl: "https://www.youtube.com/embed/JNwNXF9Y6kY",
    posterUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920&h=1080&fit=crop",
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
    trailerUrl: "https://www.youtube.com/embed/JNwNXF9Y6kY",
    posterUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=600&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&h=1080&fit=crop",
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
    trailerUrl: "https://www.youtube.com/embed/JNwNXF9Y6kY",
    posterUrl: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=600&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=1920&h=1080&fit=crop",
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
    trailerUrl: "https://www.youtube.com/embed/JNwNXF9Y6kY",
    posterUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1920&h=1080&fit=crop",
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
