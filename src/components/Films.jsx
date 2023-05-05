import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import imageByIndex from "./Embla/imageByIndex";
import videoByIndex from "./Embla/videoByIndex";

import {
  DotButton,
  PrevButton,
  NextButton,
} from "./Embla/EmblaCarouselArrowsDotsButtons";
import "./films.modules.css";
import filmData from "./Embla/videos/films/titulos.json";

const TWEEN_FACTOR = 4.2;
const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max);

function Films(props) {
  const { slides, options } = props;
  const { titulos } = filmData;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [tweenValues, setTweenValues] = useState([]);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi, setSelectedIndex]);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;

    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();

    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      if (!emblaApi.slidesInView().includes(index)) return 0;
      let diffToTarget = scrollSnap - scrollProgress;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target().get();
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
          }
        });
      }
      const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR);
      return numberWithinRange(tweenValue, 0, 1);
    });
    setTweenValues(styles);
  }, [emblaApi, setTweenValues]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);
  return (
    <div className="Films" id="videos">
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container" id="films">
            {slides.map((index) => (
              <div
                className="embla__slide"
                key={index}
                style={{
                  ...(tweenValues.length && { opacity: tweenValues[index] }),
                }}
              >
                <div>
                  <a
                    href={filmData[index].url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="gallery-text">
                      <h1>{filmData[index].work}</h1>
                      <p>
                        {filmData[index].type} | {filmData[index].autor} ·
                        {filmData[index].title}
                      </p>
                    </div>
                  </a>
                </div>
                <video
                  autoplay="true"
                  muted
                  loop
                  class="video-gal"
                  src={videoByIndex(index)}
                  alt="Your alt text"
                />
              </div>
            ))}
          </div>
          <div id="controls">
            <PrevButton
              onClick={scrollPrev}
              enabled={prevBtnEnabled}
              id="controls"
            />
            <NextButton
              onClick={scrollNext}
              enabled={nextBtnEnabled}
              id="controls"
            />
          </div>
          <h2 className="mobileTitles">Films</h2>
          <div className="embla__container" id="gifsMobile">
            {slides.map((index) => (
              <div
                className="embla__slide"
                key={index}
                style={{
                  ...(tweenValues.length && { opacity: tweenValues[index] }),
                }}
              >
                <div>
                  <a
                    href={filmData[index].url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="gallery-text">
                      <h1>{filmData[index].work}</h1>
                      <p>
                        {filmData[index].type} | {filmData[index].autor} ·
                        {filmData[index].title}
                      </p>
                    </div>
                  </a>
                </div>
                <img
                  autoplay="true"
                  muted
                  loop
                  className="video-gal"
                  src={imageByIndex(index)}
                  alt="Your alt text"
                />
              </div>
            ))}
          </div>
          <div id="controls">
            <PrevButton
              onClick={scrollPrev}
              enabled={prevBtnEnabled}
              id="controls"
            />
            <NextButton
              onClick={scrollNext}
              enabled={nextBtnEnabled}
              id="controls"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Films;
