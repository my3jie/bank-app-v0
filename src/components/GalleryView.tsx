import React from 'react';
import { PenSquare, User, RotateCcw } from 'lucide-react';
import { GalleryImage } from '../types';

const images: GalleryImage[] = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=800&q=80',
    title: 'Bank Statement March'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
    title: 'Investment Portfolio'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80',
    title: 'Property Documents'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80',
    title: 'Contract Scan'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=800&q=80',
    title: 'Tax Documents'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=800&q=80',
    title: 'Receipt Collection'
  }
];

export function GalleryView() {
  return (
    <div className="flex-1 flex flex-col bg-black overflow-hidden">
      <header className="p-4 flex justify-between items-center bg-gray-900">
        <div className="text-amber-400 font-semibold">Gallery &gt;</div>
        <div className="flex gap-4">
          <PenSquare className="w-6 h-6 text-indigo-400" />
          <User className="w-6 h-6 text-indigo-400" />
          <RotateCcw className="w-6 h-6 text-indigo-400" />
        </div>
      </header>

      <div className="flex-1 p-4 overflow-y-auto hide-scrollbar">
        <div className="grid grid-cols-2 gap-4">
          {images.map((image) => (
            <div key={image.id} className="aspect-square relative group">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 rounded-b-lg">
                <p className="text-white text-sm">{image.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}