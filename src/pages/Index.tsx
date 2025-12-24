import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import HeroCarousel from '@/components/HeroCarousel';
import FilmRow from '@/components/FilmRow';
import { films, allGenres, allAgeRatings, getFilmsByGenre, getFilmsByAgeRating } from '@/data/films';

const Index: React.FC = () => {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [selectedAge, setSelectedAge] = useState<string | null>(null);

  // Group films by genre for display
  const actionFilms = films.filter(f => f.genre.some(g => g.toLowerCase().includes('action') || g.toLowerCase().includes('aksiya')));
  const horrorFilms = films.filter(f => f.genre.some(g => g.toLowerCase().includes('horror')));
  const comedyFilms = films.filter(f => f.genre.some(g => g.toLowerCase().includes('comedy') || g.toLowerCase().includes('komediya')));
  const dramaFilms = films.filter(f => f.genre.some(g => g.toLowerCase().includes('drama')));
  const scifiFilms = films.filter(f => f.genre.some(g => g.toLowerCase().includes('sci-fi') || g.toLowerCase().includes('fantasy') || g.toLowerCase().includes('fantaziya')));
  const familyFilms = films.filter(f => f.genre.some(g => g.toLowerCase().includes('family') || g.toLowerCase().includes('ailə') || g.toLowerCase().includes('animation')));

  // Films for +18 and +16
  const matureFilms = films.filter(f => f.ageRating === '+18' || f.ageRating === '+16');
  const allAgesFilms = films.filter(f => f.ageRating === '+7' || f.ageRating === '+12');

  return (
    <>
      <Helmet>
        <title>CineStream - Watch Movies & Trailers Online</title>
        <meta name="description" content="Discover and watch the latest movies, trailers, and exclusive content. Stream your favorite films in HD quality." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <HeroCarousel />

        {/* Filter Section */}
        <section className="py-6 border-b border-border/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-foreground font-medium">Filter by:</span>
              
              {/* Genre Filter */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedGenre(null)}
                  className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                    !selectedGenre
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                >
                  All Genres
                </button>
                {['Action', 'Horror', 'Comedy', 'Drama', 'Sci-fi', 'Animation'].map((genre) => (
                  <button
                    key={genre}
                    onClick={() => setSelectedGenre(selectedGenre === genre ? null : genre)}
                    className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                      selectedGenre === genre
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                    }`}
                  >
                    {genre}
                  </button>
                ))}
              </div>

              {/* Age Filter */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedAge(null)}
                  className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                    !selectedAge
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                >
                  All Ages
                </button>
                {allAgeRatings.map((age) => (
                  <button
                    key={age}
                    onClick={() => setSelectedAge(selectedAge === age ? null : age)}
                    className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                      selectedAge === age
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                    }`}
                  >
                    {age}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Film Rows */}
        {selectedGenre || selectedAge ? (
          <FilmRow
            title={`${selectedGenre || ''} ${selectedAge || ''} Films`.trim()}
            films={films.filter(f => {
              const genreMatch = !selectedGenre || f.genre.some(g => g.toLowerCase().includes(selectedGenre.toLowerCase()));
              const ageMatch = !selectedAge || f.ageRating === selectedAge;
              return genreMatch && ageMatch;
            })}
          />
        ) : (
          <>
            <FilmRow title="Action & Thriller" films={actionFilms} />
            <FilmRow title="Horror" films={horrorFilms} />
            <FilmRow title="Comedy" films={comedyFilms} />
            <FilmRow title="Drama" films={dramaFilms} />
            <FilmRow title="Sci-Fi & Fantasy" films={scifiFilms} />
            <FilmRow title="Family & Animation" films={familyFilms} />
            <FilmRow title="Mature Content (16+)" films={matureFilms} />
            <FilmRow title="For Everyone" films={allAgesFilms} />
          </>
        )}

        {/* Footer */}
        <footer className="py-12 border-t border-border/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="font-display text-2xl text-primary">CINE</span>
                <span className="font-display text-2xl text-foreground">STREAM</span>
              </div>
              <p className="text-muted-foreground text-sm">
                © 2025 CineStream. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
