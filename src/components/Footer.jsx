import '../styles/footer.css'

const exploreLinks = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '#category-heading' },
  { label: 'Skincare', href: '#category-heading' },
  { label: 'Makeup', href: '#category-heading' },
  { label: 'Beauty Essentials', href: '#category-heading' },
  { label: 'About', href: '#beauty-editorial-heading' },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__main">
          <div className="footer__brand-area">
            <a className="footer__brand" href="/" aria-label="Mili's Beauty Shop, back to top">
              <span className="footer__brand-name">MILI&apos;S</span>
              <span className="footer__brand-subtitle">BEAUTY SHOP</span>
            </a>
            <p className="footer__tagline">A little beauty in every day.</p>
          </div>

          <nav className="footer__explore" aria-label="Footer explore navigation">
            <p className="footer__column-label">EXPLORE</p>
            <ul className="footer__link-list">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <a className="footer__link" href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__connect">
            <p className="footer__column-label">CONNECT</p>
            <ul className="footer__link-list footer__plain-list">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2026 Mili&apos;s Beauty Shop. All rights reserved.</p>
          <p>Made with care.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
