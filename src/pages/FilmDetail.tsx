import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Play, Star, Clock, Calendar, ArrowLeft, Film as FilmIcon } from 'lucide-react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import FilmRow from '@/components/FilmRow';
import { getFilmById, films } from '@/data/films';

const FilmDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const film = getFilmById(Number(id));

  if (!film) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl text-foreground mb-4">Film Not Found</h1>
          <Link to="/">
            <Button variant="hero">Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedFilms = films
    .filter(f => f.id !== film.id && f.genre.some(g => film.genre.includes(g)))
    .slice(0, 10);

  return (
    <>
      <Helmet>
        <title>{film.title} - CineStream</title>
        <meta name="description" content={film.description} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section with Backdrop */}
        <section className="relative pt-20 md:pt-24">
          {/* Backdrop */}
          <div className="absolute inset-0 h-[60vh] md:h-[70vh]">
            <img
              src={film.backdropUrl}
              alt={film.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 pt-8 md:pt-16">
            {/* Back Button */}
            <Link to="/" className="inline-flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <div className="flex flex-col md:flex-row gap-8 md:gap-12">
              {/* Poster */}
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <div className="w-56 md:w-72 aspect-[2/3] rounded-lg overflow-hidden shadow-2xl shadow-primary/20">
                  <img
                    src={film.posterUrl}
                    alt={film.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Details */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                    {film.ageRating}
                  </span>
                  {film.genre.map((g) => (
                    <span key={g} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">
                      {g}
                    </span>
                  ))}
                </div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
                  {film.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 md:gap-6 text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-primary" fill="currentColor" />
                    <span className="text-foreground font-medium">{film.rating}/10</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>{film.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>{film.year}</span>
                  </div>
                </div>

                <p className="text-foreground/80 text-lg mb-8 max-w-2xl">
                  {film.description}
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <a
                    href={film.trailerUrl.replace('embed/', 'watch?v=')}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="hero" size="xl">
                      <Play className="w-5 h-5 mr-2" fill="currentColor" />
                      Watch Trailer
                    </Button>
                  </a>
                  <Button variant="heroOutline" size="xl" disabled>
                    <FilmIcon className="w-5 h-5 mr-2" />
                    Watch Film
                  </Button>
                </div>

                {/* Trailer Embed */}
                <div className="rounded-lg overflow-hidden shadow-2xl aspect-video max-w-3xl">
                  <iframe
                    src={film.trailerUrl}
                    title={`${film.title} Trailer`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cast Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">Cast</h2>
            
            <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
              {film.cast.map((member, index) => (
                <div key={index} className="flex-shrink-0 w-32 md:w-40 text-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden bg-card mb-3">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-foreground font-medium text-sm md:text-base">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground text-xs md:text-sm">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Films */}
        {relatedFilms.length > 0 && (
          <FilmRow title="You May Also Like" films={relatedFilms} />
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

export default FilmDetail;
