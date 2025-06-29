import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/output-onlinepngtools.png';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClass = scrolled
    ? 'bg-white/90 backdrop-blur-md shadow-md'
    : isHomePage
    ? 'bg-transparent'
    : 'bg-white/70 backdrop-blur-sm';

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-[Poppins] ${headerClass}`}
    >
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
          <img src={logo} alt="Codeminds Logo" className="h-10 w-auto object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative text-sm font-medium group transition-all duration-300 ${
                  isActive
                    ? 'text-[#0056D2]'
                    : 'text-[#1E1E1E] hover:text-[#0056D2]'
                }`
              }
            >
              <span className="z-10 relative">{item.name}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#0056D2] transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          ))}
        </nav>

        {/* CTA Button */}
        <Link
          to="/contact"
          className="hidden md:inline-block bg-[#0056D2] text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md hover:scale-105 hover:bg-blue-700 transition-all duration-300"
        >
          Let’s Talk
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-[#0056D2] hover:scale-110 transition-transform duration-300"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-white shadow-md transition-all duration-300 transform ${
          mobileOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-6 py-5 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className="block text-[#1E1E1E] text-base font-medium hover:text-[#0056D2] hover:translate-x-1 transition-all duration-300"
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="block w-full text-center bg-[#0056D2] text-white font-semibold px-4 py-2 rounded-full shadow hover:bg-blue-700 hover:scale-105 transition-all duration-300"
          >
            Let’s Talk
          </Link>
        </div>
      </div>
    </header>
  );
}
