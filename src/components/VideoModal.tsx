import React from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  title: string;
  videoUrl: string;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, title, videoUrl, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="relative w-full max-w-4xl bg-background rounded-lg overflow-hidden shadow-2xl">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/90 hover:bg-background text-foreground transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Title */}
          <div className="p-4 border-b border-border">
            <h2 className="text-xl font-semibold text-foreground">{title}</h2>
          </div>

          {/* Video Container */}
          <div className="relative w-full aspect-video">
            <iframe
              src={videoUrl}
              title={`${title} Trailer`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoModal;
