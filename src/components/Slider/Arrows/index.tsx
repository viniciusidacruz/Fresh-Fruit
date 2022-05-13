import { ArrowsProps } from "./types";

import * as S from "./styles";

export default function Arrows({ prevSlide, nextSlide }: ArrowsProps) {
  return (
    <S.Container>
      <S.CircleLeft>
        <S.Prev onClick={prevSlide} />
      </S.CircleLeft>

      <S.CircleRight>
        <S.Next onClick={nextSlide} />
      </S.CircleRight>
    </S.Container>
  );
}
