import { ArrowRight } from "lucide-react";
import "../styles/featuredProducts.css";

import serumImage from "../assets/images/products/featured-serum.jpg";
import moisturizerImage from "../assets/images/products/featured-moisturizer.jpg";
import lipImage from "../assets/images/products/featured-lip-product.jpg";
import haircareImage from "../assets/images/products/featured-haircare.jpg";

const products = [
  {
    name: "Serum",
    category: "Skincare concept",
    image: serumImage,
    imageAlt: "A dropper bottle on a warm beige tray"
  },
  {
    name: "Face cream",
    category: "Daily moisture concept",
    image: moisturizerImage,
    imageAlt: "Minimal white skincare containers in soft natural light"
  },
  {
    name: "Lip color",
    category: "Makeup concept",
    image: lipImage,
    imageAlt: "A lip gloss application beauty portrait"
  },
  {
    name: "Haircare",
    category: "Routine essentials concept",
    image: haircareImage,
    imageAlt: "Haircare bottles and styling tools arranged on ivory fabric"
  }
];

function FeaturedProducts() {
  return (
    <section className="featured-products" id="featured-products" aria-labelledby="featured-products-heading">
      <div className="featured-products__inner">
        <p className="featured-products__eyebrow">THE BEAUTY EDIT</p>
        <div className="featured-products__heading-row">
          <h2 className="featured-products__heading" id="featured-products-heading">
            Beauty favorites
          </h2>
          <a className="featured-products__view-all" href="#featured-products">
            VIEW ALL PRODUCTS
            <ArrowRight size={16} strokeWidth={1.6} aria-hidden="true" />
          </a>
        </div>
        <p className="featured-products__support">
          A closer look at the essentials that elevate your everyday routine.
        </p>

        <div className="featured-products__grid" aria-label="Featured beauty product concepts">
          {products.map((product) => (
            <article className="featured-product" key={product.name}>
              <div className="featured-product__image-frame">
                <img
                  className="featured-product__image"
                  src={product.image}
                  alt={product.imageAlt}
                  loading="lazy"
                  draggable="false"
                />
              </div>
              <div className="featured-product__details">
                <h3 className="featured-product__name">{product.name}</h3>
                <p className="featured-product__category">{product.category}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
