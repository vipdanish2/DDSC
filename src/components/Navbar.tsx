
import { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from '@/hooks/use-theme';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? theme === 'light'
            ? 'bg-white/95 backdrop-blur-lg shadow-md border-b border-gray-200' 
            : 'bg-background/80 backdrop-blur-lg shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <img src="/lovable-uploads/1562081e-2603-4dd2-8c30-cc01d2781a8b.png" alt="DCode Logo" className="h-10 w-auto animate-pulse-slow" />
            <span className={`text-xl font-bold ${
              theme === 'light' ? 'text-gray-900' : 'text-white'
            }`}>DCode Developers Club</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className={`transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-ndc-purple after:transition-all after:duration-300 ${
              theme === 'light' 
                ? 'text-gray-700 hover:text-gray-900' 
                : 'text-gray-300 hover:text-white'
            }`}>About</a>
            <a href="#why-join" className={`transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-ndc-blue after:transition-all after:duration-300 ${
              theme === 'light' 
                ? 'text-gray-700 hover:text-gray-900' 
                : 'text-gray-300 hover:text-white'
            }`}>Why Join</a>
            <a href="#benefits" className={`transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-ndc-green after:transition-all after:duration-300 ${
              theme === 'light' 
                ? 'text-gray-700 hover:text-gray-900' 
                : 'text-gray-300 hover:text-white'
            }`}>Benefits</a>
            <a href="#events" className={`transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-ndc-purple after:transition-all after:duration-300 ${
              theme === 'light' 
                ? 'text-gray-700 hover:text-gray-900' 
                : 'text-gray-300 hover:text-white'
            }`}>Events</a>
            <a href="#team" className={`transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-ndc-blue after:transition-all after:duration-300 ${
              theme === 'light' 
                ? 'text-gray-700 hover:text-gray-900' 
                : 'text-gray-300 hover:text-white'
            }`}>Team</a>
            <a href="#partners" className={`transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-ndc-green after:transition-all after:duration-300 ${
              theme === 'light' 
                ? 'text-gray-700 hover:text-gray-900' 
                : 'text-gray-300 hover:text-white'
            }`}>Partners</a>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
