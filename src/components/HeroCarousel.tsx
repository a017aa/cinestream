import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, Info, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { getFeaturedFilms, Film } from '@/data/films';

const HeroCarousel: React.FC = () => {
  const featuredFilms = getFeaturedFilms();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredFilms.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, featuredFilms.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrev = () => {
    goToSlide(currentIndex === 0 ? featuredFilms.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    goToSlide((currentIndex + 1) % featuredFilms.length);
  };

  const currentFilm = featuredFilms[currentIndex];

  return (
    <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">
      {/* Background Slides */}
      {featuredFilms.map((film, index) => (
        <div
          key={film.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Video Background Placeholder - using image */}
          <div className="absolute inset-0">
            <img
              src={film.backdropUrl}
              alt={film.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
          </div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl animate-slide-up">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                {currentFilm.ageRating}
              </span>
              <span className="text-muted-foreground text-sm">
                {currentFilm.year} • {currentFilm.duration}
              </span>
            </div>
            
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground mb-4 leading-tight">
              {currentFilm.title}
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {currentFilm.genre.map((g) => (
                <span key={g} className="text-muted-foreground text-sm">
                  {g}
                </span>
              ))}
            </div>
            
            <p className="text-foreground/80 text-base md:text-lg mb-8 line-clamp-3">
              {currentFilm.description}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href={currentFilm.trailerUrl.replace('embed/', 'watch?v=')}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="hero" size="xl">
                  <Play className="w-5 h-5 mr-2" fill="currentColor" />
                  Watch Trailer
                </Button>
              </a>
              <Link to={`/film/${currentFilm.id}`}>
                <Button variant="heroOutline" size="xl">
                  <Info className="w-5 h-5 mr-2" />
                  More Info
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-background/50 backdrop-blur-sm text-foreground hover:bg-background/80 transition-all"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-background/50 backdrop-blur-sm text-foreground hover:bg-background/80 transition-all"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {featuredFilms.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-primary w-6 md:w-8'
                : 'bg-foreground/30 hover:bg-foreground/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
