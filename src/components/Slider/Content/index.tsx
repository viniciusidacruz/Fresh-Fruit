import { Fragment } from "react";
import Image from "next/image";

import { ContentDataProps, SliderProps } from "./types";

import { Container } from "./styles";

export default function ContentData({
  activeIndex,
  carouselData,
}: ContentDataProps) {
  return (
    <Fragment>
      {carouselData?.map((slide: SliderProps, index: number) => (
        <Container key={slide.id} index={index} activeIndex={activeIndex}>
          <Image
            src={slide.thumbnail.path}
            alt={slide.thumbnail.alt}
            layout="fill"
          />
        </Container>
      ))}
    </Fragment>
  );
}
