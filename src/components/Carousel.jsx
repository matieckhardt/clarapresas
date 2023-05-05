import React from "react";
import EmblaCarousel from "./Embla/EmblaCarousel";
import "./Embla/css/base.css";
import "./Embla/css/sandbox.css";
import "./Embla/css/embla.css";

const OPTIONS = { inViewThreshold: 0 };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Carousel = () => (
  <main className="sandbox">
    <section className="sandbox__carousel">
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </section>
  </main>
);

export default Carousel;
