import React, { useState } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { FloatingEffects } from './components/FloatingEffects';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StoryTimeline } from './components/StoryTimeline';
import { LoveReasons } from './components/LoveReasons';
import { MemoryGallery } from './components/MemoryGallery';
import { LoveLetters } from './components/LoveLetters';
import { LoveQuiz } from './components/LoveQuiz';
import { FinalSurprise } from './components/FinalSurprise';
import { MusicPlayer } from './components/MusicPlayer';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [welcomeOpened, setWelcomeOpened] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#FFF8F5] text-[#4A1025] selection:bg-[#F4A6B8] selection:text-[#4A1025]">
      {/* Cinematic Welcome Screen Overlay */}
      {!welcomeOpened && (
        <WelcomeScreen onOpen={() => setWelcomeOpened(true)} />
      )}

      {/* Ambient Floating Rose Petals & Particles */}
      <FloatingEffects />

      {/* Main Experience (Visible when surprise is opened) */}
      <div className={welcomeOpened ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'}>
        <Navbar />

        <main>
          <Hero />
          <StoryTimeline />
          <LoveReasons />
          <MemoryGallery />
          <LoveLetters />
          <LoveQuiz />
          <FinalSurprise />
        </main>

        <Footer />
        <MusicPlayer />
      </div>
    </div>
  );
};

export default App;
