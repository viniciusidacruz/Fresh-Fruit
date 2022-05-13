import React, { useState, useEffect } from "react";

import Arrows from "./Arrows";
import ContentData from "./Content";

import { sliders } from "mocks/banners";

import { Content } from "./styles";

export function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const len = sliders && sliders.length - 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex, len]);

  return (
    <Content>
      <ContentData activeIndex={activeIndex} carouselData={sliders} />
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
    </Content>
  );
}
