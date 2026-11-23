import { useEffect, useState } from 'react'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import '../styles/navbar.css'

const navigationItems = [
  { label: 'Home', href: '#home' },
  { label: 'Shop', href: '#category-heading' },
  { label: 'Skincare', href: '#category-heading' },
  { label: 'Makeup', href: '#category-heading' },
  { label: 'About', href: '#beauty-editorial-heading' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const updateScrolledState = () => {
      const hasScrolled = window.scrollY > 8
      setIsScrolled((currentState) =>
        currentState === hasScrolled ? currentState : hasScrolled,
      )
    }

    updateScrolledState()
    window.addEventListener('scroll', updateScrolledState, { passive: true })

    return () => window.removeEventListener('scroll', updateScrolledState)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return undefined

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={`navbar${isScrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <button
          className="navbar__icon-button navbar__menu-toggle"
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <a className="navbar__wordmark" href="#home" onClick={closeMenu}>
          <span className="navbar__brand-name">MILI&apos;S</span>
          <span className="navbar__brand-subtitle">BEAUTY SHOP</span>
        </a>

        <nav className="navbar__desktop-navigation" aria-label="Main navigation">
          <ul className="navbar__link-list">
            {navigationItems.map((item) => (
              <li key={item.label}>
                <a className="navbar__link" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar__actions">
          <button
            className="navbar__icon-button"
            type="button"
            aria-label="Search is not available yet"
            title="Search is not available yet"
            disabled
          >
            <Search aria-hidden="true" />
          </button>
          <button
            className="navbar__icon-button"
            type="button"
            aria-label="Shopping bag is not available yet"
            title="Shopping bag is not available yet"
            disabled
          >
            <ShoppingBag aria-hidden="true" />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          className="navbar__mobile-panel"
          id="mobile-navigation"
          aria-label="Mobile navigation"
        >
          <ul className="navbar__mobile-link-list">
            {navigationItems.map((item) => (
              <li key={item.label}>
                <a className="navbar__mobile-link" href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Navbar