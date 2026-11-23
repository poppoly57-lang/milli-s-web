import { ArrowUpRight } from "lucide-react";
import "../styles/categorySection.css";

import skincareImage from "../assets/images/categories/skincare-category.jpg";
import makeupImage from "../assets/images/categories/makeup-category.jpg";
import haircareImage from "../assets/images/categories/haircare-category.jpg";
import essentialsImage from "../assets/images/categories/beauty-essentials-category.jpg";

const categories = [
  {
    title: "Skincare",
    subtitle: "Everyday skin essentials",
    image: skincareImage,
    imageAlt: "A skincare serum applied with a glass dropper"
  },
  {
    title: "Makeup",
    subtitle: "Makeup & beauty favorites",
    image: makeupImage,
    imageAlt: "A selection of makeup in soft neutral tones"
  },
  {
    title: "Haircare",
    subtitle: "Care for every hair routine",
    image: haircareImage,
    imageAlt: "A woman brushing her long red hair"
  },
  {
    title: "Beauty Essentials",
    subtitle: "Little things that complete your routine",
    image: essentialsImage,
    imageAlt: "Facial massage tools and skincare arranged together"
  }
];

function CategorySection() {
  return (
    <section className="category-section" aria-labelledby="category-heading">
      <div className="category-section__inner">
        <header className="category-section__intro">
          <p className="category-section__eyebrow">BEAUTY, YOUR WAY</p>
          <h2 className="category-section__heading" id="category-heading">
            Explore the collection
          </h2>
          <p className="category-section__support">
            Everything you need for your beauty routine.
          </p>
        </header>

        <div className="category-grid" aria-label="Beauty categories">
          {categories.map((category) => (
            <article className="category-item" key={category.title}>
              <div className="category-item__image-frame">
                <img
                  className="category-item__image"
                  src={category.image}
                  alt={category.imageAlt}
                  loading="lazy"
                  draggable="false"
                />
              </div>
              <div className="category-item__caption">
                <div>
                  <h3 className="category-item__title">{category.title}</h3>
                  <p className="category-item__subtitle">{category.subtitle}</p>
                </div>
                <ArrowUpRight
                  className="category-item__arrow"
                  size={20}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategorySection;
