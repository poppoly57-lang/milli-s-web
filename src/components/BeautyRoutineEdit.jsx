import { ArrowRight } from 'lucide-react'
import '../styles/beautyRoutineEdit.css'
import routineImage from '../assets/images/editorial/beauty-routine-edit.jpg'

function BeautyRoutineEdit() {
  return (
    <section className="beauty-routine-edit" aria-labelledby="beauty-routine-edit-heading">
      <div className="beauty-routine-edit__inner">
        <figure className="beauty-routine-edit__image-frame">
          <img
            className="beauty-routine-edit__image"
            src={routineImage}
            alt="Hands gently applying cream from a skincare jar"
            loading="lazy"
            draggable="false"
          />
          <figcaption className="beauty-routine-edit__image-label">
            THE EVERYDAY EDIT
          </figcaption>
        </figure>

        <div className="beauty-routine-edit__copy">
          <p className="beauty-routine-edit__eyebrow">YOUR BEAUTY, YOUR ROUTINE</p>
          <h2 className="beauty-routine-edit__heading" id="beauty-routine-edit-heading">
            Make time for your beauty.
          </h2>
          <p className="beauty-routine-edit__support">
            Discover inspiration for little routines, everyday essentials, and moments
            of self-care.
          </p>
          <a className="beauty-routine-edit__cta" href="#featured-products">
            <span>EXPLORE BEAUTY</span>
            <ArrowRight size={18} strokeWidth={1.6} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default BeautyRoutineEdit