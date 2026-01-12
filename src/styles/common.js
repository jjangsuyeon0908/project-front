// 공통적인 css를 변수에 담아 사용할 수 있도록 제공하는 파일
import { css } from "styled-components";

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const flexBetweenRow = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const flexBetweenColumn = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const flexCenterColumn = css`
  ${flexCenter};
  flex-direction: column;
`;

// 1. 스타일 생성 공통 함수
const getFontStyle = (family, size, weight) => css`
  font-family: ${family.toLowerCase()};
  font-size: ${({ theme }) => theme.FONT_SIZE[size]};
  line-height: ${({ theme }) => theme.FONT_LINE[size]};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT[family.toUpperCase()][weight.toUpperCase()]};
`;

// 2. 반복 설정을 위한 기초 데이터
const sizes = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8'];
const pretendardWeights = [
  'THIN', 'EXTRALIGHT', 'LIGHT', 'REGULAR', 'MEDIUM', 
  'SEMIBOLD', 'BOLD', 'EXTRABOLD', 'BLACK'
];
const giantsWeights = ['REGULAR', 'BOLD'];

// 3. FONT_STYLE 객체 자동 생성
export const FONT_STYLE = {
  PRETENDARD: {},
  GIANTS: {},
};

// Pretendard 자동 생성 (h1~h8 * 9개 굵기)
sizes.forEach((size) => {
  pretendardWeights.forEach((weight) => {
    const key = `${size.toUpperCase()}_${weight}`;
    FONT_STYLE.PRETENDARD[key] = getFontStyle('PRETENDARD', size, weight);
  });
});

// Giants 자동 생성 (h1~h8 * 2개 굵기)
sizes.forEach((size) => {
  giantsWeights.forEach((weight) => {
    const key = `${size.toUpperCase()}_${weight}`;
    FONT_STYLE.GIANTS[key] = getFontStyle('GIANTS', size, weight);
  });
});

/**
 * [사용 예시]
 * const Title = styled.h1`
 * ${FONT_STYLE.PRETENDARD.H1_BOLD};
 * `;
 */