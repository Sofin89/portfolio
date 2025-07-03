import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="main1">
      <header className="container">
        <div className="logo-container">
          <a href={null} alt="" className="logo">
            <img src="/favicon.svg" alt="SOFIN MANSURI"  className='logo2'/>
          </a>
        </div>
        
        {/* Mobile Menu Button (Hamburger) - Right aligned */}
        <button 
          className="mobile-menu-button" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg viewBox="0 0 24 24" width="24" height="24">
            {isMenuOpen ? (
              <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            ) : (
              <path fill="currentColor" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
            )}
          </svg>
        </button>
        
        <div className={`center-container ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
          <a href="#" className="font-color">HOME</a>
          <a href="#About" className="font-color">ABOUT</a>
          <a href="#Skill" className="font-color">SKILLS</a>
          <a href="#Project" className="font-color">PROJECT</a>
        </div>
        <div className={`contact-container ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
          <button type="button" className="contact-button">Contact Us</button>
        </div>
      </header>
    </div>
  );
};

export default Header;