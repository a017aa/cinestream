import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import FilmCard from './FilmCard';
import { Film } from '@/data/films';

interface FilmRowProps {
  title: string;
  films: Film[];
}

const FilmRow: React.FC<FilmRowProps> = ({ title, films }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  if (films.length === 0) return null;

  return (
    <section className="py-6 md:py-8">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4 md:mb-6">
          {title}
        </h2>
        
        <div className="relative">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm text-foreground opacity-0 hover:opacity-100 transition-opacity hover:bg-background shadow-lg -ml-4"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm text-foreground opacity-0 hover:opacity-100 transition-opacity hover:bg-background shadow-lg -mr-4"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
          {/* Films Container */}
          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-4"
          >
            {films.map((film) => (
              <FilmCard key={film.id} film={film} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilmRow;
