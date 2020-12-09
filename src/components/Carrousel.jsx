import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

import { IMAGE_BASE_URL } from "../const/Const";

const Example = (props) => {
  const { topRatedMovies: items } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.title}
      >
        <img
          className="custom-img-carousel"
          src={`${IMAGE_BASE_URL}${item.backdrop_path}`}
          alt={item.altText}
        />
        <CarouselCaption captionHeader={item.title} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      className="custom-carousel"
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

Example.propTypes = {
  topRatedMovies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Example;
