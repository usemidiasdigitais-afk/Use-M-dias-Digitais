import React, { useEffect, useState, useCallback, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import NicheGallery from './components/NicheGallery';
import MarketingSection from './components/MarketingSection';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BlogPage from './components/BlogPage';
import ServiceDetailPage from './components/ServiceDetailPage';
import CookieConsent from './components/CookieConsent';
import PrivacyPolicy from './components/PrivacyPolicy';

const App: React.FC = () => {
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);
  const [currentView, setCurrentView] = useState<'home' | 'blog' | 'service' | 'privacy'>('home');
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('use-midias-theme');
    return (saved as 'light' | 'dark') || 'light';
  });
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Simple SEO title update on mount
  useEffect(() => {
    document.title = "Use Mídias Digitais | Soluções Web & Marketing Estratégico";
  }, []);

  // Theme management
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('use-midias-theme', theme);
  }, [theme]);

  // Scroll Animation Observer - Fix for the "Blank Screen" issue
  useEffect(() => {
    const handleReveal = () => {
      if (observerRef.current) observerRef.current.disconnect();

      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      observerRef.current = observer;

      // Select all elements that should animate
      const revealElements = document.querySelectorAll('section, .reveal');
      
      revealElements.forEach((el) => {
        // Fallback: If it doesn't have reveal class but is a section, we can add it or just observe
        if (!el.classList.contains('active')) {
          // IntersectionObserver will handle the reveal
          observer.observe(el);
          
          // Immediate check for elements already in viewport to avoid flickering
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom >= 0) {
            el.classList.add('active');
          }
        }
      });
    };

    // Small delay to ensure DOM is ready after view change
    const timer = setTimeout(handleReveal, 150);

    return () => {
      clearTimeout(timer);
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [currentView]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleOpenService = useCallback((id: string) => {
    setActiveServiceId(id);
    setCurrentView('service');
    window.scrollTo(0, 0);
  }, []);

  const handleCloseService = () => {
    setActiveServiceId(null);
    setCurrentView('home');
    setTimeout(() => {
      const element = document.getElementById('services');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleNavigate = (view: 'home' | 'blog' | 'service' | 'privacy') => {
    setCurrentView(view);
    if (view !== 'service') {
      setActiveServiceId(null);
    }
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleServiceEvent = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail) {
        handleOpenService(customEvent.detail);
      }
    };

    window.addEventListener('openService', handleServiceEvent);
    return () => window.removeEventListener('openService', handleServiceEvent);
  }, [handleOpenService]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-gray-800 dark:text-slate-200 flex flex-col transition-colors duration-300">
      <Header 
        onOpenService={handleOpenService} 
        onNavigate={handleNavigate}
        currentView={currentView}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <main className="flex-grow">
        {currentView === 'home' ? (
          <div className="flex flex-col">
            <Hero />
            <Services activeServiceId={activeServiceId} onClose={handleCloseService} />
            <NicheGallery />
            <MarketingSection />
            <Testimonials />
            <Contact />
          </div>
        ) : currentView === 'blog' ? (
          <BlogPage onBack={() => handleNavigate('home')} />
        ) : currentView === 'service' ? (
          <ServiceDetailPage serviceId={activeServiceId} onBack={handleCloseService} />
        ) : (
          <PrivacyPolicy onBack={() => handleNavigate('home')} />
        )}
      </main>
      <Footer onOpenService={handleOpenService} onNavigate={handleNavigate} />
      <CookieConsent />
    </div>
  );
};

export default App;