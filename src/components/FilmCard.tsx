import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Star } from 'lucide-react';
import { Film } from '@/data/films';
import VideoModal from './VideoModal';

interface FilmCardProps {
  film: Film;
}

const FilmCard: React.FC<FilmCardProps> = ({ film }) => {
  const [showTrailer, setShowTrailer] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handlePlayClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowTrailer(true);
  };

  return (
    <>
      <Link to={`/film/${film.id}`} className="group block flex-shrink-0 w-40 md:w-48 lg:w-56">
      <div className="relative aspect-[2/3] rounded-lg overflow-hidden bg-card shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-primary/20">
        {/* Poster Image */}
        {!imageError ? (
          <img
            src={film.posterUrl}
            alt={film.title}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-secondary to-card flex items-center justify-center p-4">
            <p className="text-center text-sm text-muted-foreground font-medium">{film.title}</p>
          </div>
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Play Button */}
        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
          onClick={handlePlayClick}
        >
          <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center shadow-lg shadow-primary/50 hover:bg-primary transition-colors">
            <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
          </div>
        </div>
        
        {/* Age Rating Badge */}
        <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-background/80 backdrop-blur-sm text-xs font-medium text-foreground">
          {film.ageRating}
        </div>
        
        {/* Rating */}
        <div className="absolute bottom-2 left-2 flex items-center gap-1 px-2 py-0.5 rounded bg-background/80 backdrop-blur-sm">
          <Star className="w-3 h-3 text-primary" fill="currentColor" />
          <span className="text-xs font-medium text-foreground">{film.rating}</span>
        </div>
      </div>
      
      {/* Title */}
      <h3 className="mt-3 text-sm md:text-base font-medium text-foreground line-clamp-1 group-hover:text-primary transition-colors">
        {film.title}
      </h3>
      <p className="text-xs text-muted-foreground">
        {film.genre.slice(0, 2).join(' • ')}
      </p>
    </Link>

    {/* Video Modal */}
    <VideoModal
      isOpen={showTrailer}
      title={`${film.title} - Trailer`}
      videoUrl={film.trailerUrl}
      onClose={() => setShowTrailer(false)}
    />
    </>
  );
};

export default FilmCard;
