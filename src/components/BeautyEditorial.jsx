import { ArrowRight } from "lucide-react";
import "../styles/beautyEditorial.css";
import campaignImage from "../assets/images/editorial/beauty-editorial-campaign.jpg";

function BeautyEditorial() {
  return (
    <section className="beauty-editorial" aria-labelledby="beauty-editorial-heading">
      <div className="beauty-editorial__inner">
        <div className="beauty-editorial__copy">
          <p className="beauty-editorial__eyebrow">THE ART OF EVERYDAY BEAUTY</p>
          <h2 className="beauty-editorial__heading" id="beauty-editorial-heading">
            A little beauty.
            <br />
            A lot of confidence.
          </h2>
          <p className="beauty-editorial__support">
            Find the little essentials that make your beauty routine feel like your own.
          </p>
          <a className="beauty-editorial__cta" href="#featured-products">
            DISCOVER MORE
            <ArrowRight size={17} strokeWidth={1.7} aria-hidden="true" />
          </a>
        </div>
        <div className="beauty-editorial__image-frame">
          <img
            className="beauty-editorial__image"
            src={campaignImage}
            alt="A woman gently applying moisturizer to her face in soft natural light"
            loading="lazy"
            draggable="false"
          />
        </div>
      </div>
    </section>
  );
}

export default BeautyEditorial;
