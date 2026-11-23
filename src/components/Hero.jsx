import '../styles/hero.css'
import heroImg from '../assets/images/hero/beauty-hero-products.jpg'

function scrollToShop() {
  const shopSection = document.querySelector('#category-heading')
  shopSection?.scrollIntoView({
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    block: 'start',
  })
}

const Hero = () => {
  return (
    <section className="hero" id="home" aria-label="Homepage hero section">
      <div className="hero__content">
        <div className="hero__eyebrow">DISCOVER YOUR BEAUTY</div>
        <h1 className="hero__headline">
          Beauty,<br />in every detail.
        </h1>
        <div className="hero__support">
          Discover beauty essentials that make every day feel special.
        </div>
        <button className="hero__cta" onClick={scrollToShop} aria-label="Explore the shop">
          EXPLORE THE SHOP
          <span className="hero__cta-arrow" aria-hidden="true">
            <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display:'inline',verticalAlign:'middle'}}>
              <path d="M14.5 1L21 8M21 8L14.5 15M21 8H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </button>
        <div className="hero__editorial-detail">BEAUTY · CARE · CONFIDENCE</div>
      </div>
      <div className="hero__image-area">
        <div className="hero__image-container">
          <img
            src={heroImg}
            alt="Foundation, concealer, and a makeup sponge arranged on a light neutral surface."
            className="hero__image"
            loading="eager"
            fetchPriority="high"
            draggable="false"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero
