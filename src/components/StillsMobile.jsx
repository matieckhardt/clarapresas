import useEmblaCarousel from "embla-carousel-react";
import stillsByIndex from "./Embla/stillsByIndex";

function StillsMobile(props) {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <div id="stillsMobile">
      <h2 className="mobileTitles"> Stills</h2>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__number">
                  <span>{index + 1}</span>
                </div>
                <img
                  className="embla__slide__img"
                  src={stillsByIndex(index)}
                  alt="Your alt text"
                  id="stillsMobile"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StillsMobile;
