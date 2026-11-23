import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import '../styles/beautyNewsletter.css'

function BeautyNewsletter() {
  const [status, setStatus] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setStatus('Newsletter signup is not yet connected.')
  }

  return (
    <section className="beauty-newsletter" aria-labelledby="beauty-newsletter-heading">
      <div className="beauty-newsletter__inner">
        <p className="beauty-newsletter__eyebrow">A LITTLE BEAUTY IN YOUR INBOX</p>
        <h2 className="beauty-newsletter__heading" id="beauty-newsletter-heading">
          Stay close to the beauty.
        </h2>
        <p className="beauty-newsletter__support">
          Discover beauty inspiration, new finds, and little things worth sharing.
        </p>

        <form className="beauty-newsletter__form" onSubmit={handleSubmit}>
          <div className="beauty-newsletter__field">
            <label className="beauty-newsletter__label" htmlFor="beauty-newsletter-email">
              Email address
            </label>
            <input
              className="beauty-newsletter__input"
              id="beauty-newsletter-email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              autoComplete="email"
              required
              aria-describedby="beauty-newsletter-note beauty-newsletter-status"
            />
          </div>
          <button className="beauty-newsletter__submit" type="submit">
            <span>JOIN THE BEAUTY LIST</span>
            <ArrowRight size={17} strokeWidth={1.6} aria-hidden="true" />
          </button>
        </form>

        <p
          className="beauty-newsletter__status"
          id="beauty-newsletter-status"
          role="status"
          aria-live="polite"
        >
          {status}
        </p>
        <p className="beauty-newsletter__note" id="beauty-newsletter-note">
          A little inspiration, whenever there&apos;s something worth sharing.
        </p>
      </div>
    </section>
  )
}

export default BeautyNewsletter
