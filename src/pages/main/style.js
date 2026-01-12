import styled from "styled-components";
import { FONT_STYLE } from "../../styles/common";

export const MainTitle = styled.h1`
  /* 자동 생성된 객체에서 H1_MEDIUM 스타일을 꺼내어 적용합니다. */
  ${FONT_STYLE.GIANTS.H7_REGULAR}
  
  /* 색상 등 추가 스타일은 theme에서 가져와 적용합니다. */
  color: ${({ theme }) => theme.PALLETE.black};
`;
