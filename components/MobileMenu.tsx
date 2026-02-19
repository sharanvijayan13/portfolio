'use client'

export default function MobileMenu() {
  const closeMenu = () => {
    document.getElementById('mobileMenu')?.classList.remove('slide-in')
    document.getElementById('overlay')?.classList.add('hidden')
  }

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const targetId = e.currentTarget.getAttribute('href')
    if (targetId) {
      closeMenu()
      setTimeout(() => {
        document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' })
      }, 300)
    }
  }

  return (
    <>
      <div id="mobileMenu" className="mobile-menu">
        <button id="closeBtn" className="close-btn" onClick={closeMenu}>
          &times;
        </button>
        <div className="mobile-links">
          <nav>
            <div className="mobile-links">
              <a href="#about" onClick={handleLinkClick}>About</a>
              <a href="#skills" onClick={handleLinkClick}>Tech Stack</a>
              <a href="#projects" onClick={handleLinkClick}>Projects</a>
              <a href="#contact" onClick={handleLinkClick}>Contact</a>
            </div>
          </nav>
        </div>
      </div>
      <div id="overlay" className="overlay hidden" onClick={closeMenu}></div>
    </>
  )
}
