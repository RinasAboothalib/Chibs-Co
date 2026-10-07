import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { GallerySection } from '../components/GallerySection';

interface GalleryPageProps {
  onNavigateHome: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onNavigateHome }) => {
  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      <PageHeader
        badge="Visual Archive"
        title="The Gallery of Little Stories"
        description="Every photograph represents a story captured in wood: milestones celebrated, weddings immortalized, and furry companions rendered with love."
        currentPage="Gallery"
        onNavigateHome={onNavigateHome}
      />

      {/* Gallery Section with Matching Equal Sized Images */}
      <GallerySection />
    </div>
  );
};
