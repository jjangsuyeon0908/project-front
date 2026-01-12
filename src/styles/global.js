// 전역에 사용되는 스타일을 적용시키기위한 파일
// 폰트, 리셋
import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`
  /* css 스타일 리셋 */
  ${reset}

  /*
    100 Thin
    200 Extra Light
    300 Light
    400 Regular
    500 Medium
    600 Semi Bold
    700 Bold
    800 Extra Bold
    900 Black 
  */

  @font-face {
    font-family: 'pretendard';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/pretendard/Pretendard-Thin.woff2) format('woff2');
    font-weight: 100;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'pretendard';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/pretendard/Pretendard-ExtraLight.woff2) format('woff2');
    font-weight: 200;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'pretendard';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/pretendard/Pretendard-Light.woff2) format('woff2');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'pretendard';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/pretendard/Pretendard-Regular.woff2) format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'pretendard';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/pretendard/Pretendard-Medium.woff2) format('woff2');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'pretendard';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/pretendard/Pretendard-SemiBold.woff2) format('woff2');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'pretendard';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/pretendard/Pretendard-Bold.woff2) format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'pretendard';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/pretendard/Pretendard-ExtraBold.woff2) format('woff2');
    font-weight: 800;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'pretendard';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/pretendard/Pretendard-Black.woff2) format('woff2');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

    @font-face {
    font-family: 'giants';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/giants/Giants-Regular.otf) format('opentype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
    @font-face {
    font-family: 'giants';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/giants/Giants-Bold.otf) format('opentype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

* {
    box-sizing: border-box;
  }

  body {
    font-family: 'pretendard', sans-serif; /* 폰트 로드 실패 시 대비용 sans-serif 추가 */
    text-shadow: 0 0 1px rgba(0, 0, 0, 0.05); /* 2px은 때로 흐려보일 수 있어 1px 추천 */
    letter-spacing: -0.2px;
    color: #131313;
    line-height: 1.3;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  /* 폼 요소 폰트 및 스타일 초기화 */
  button, input, textarea, select {
    font-family: inherit;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    padding: 0; /* 버튼 기본 패딩 제거 */
  }

  input, textarea {
    border: 1px solid #dbdbdb;
    outline: none;
  }

  /* 입력창 활성화 시 피드백 통합 */
  input:focus, textarea:focus {
    border-color: #333;
  }

  /* 텍스트 영역 크기 조절 방지 (선택 사항) */
  textarea {
    resize: none;
  }

`;
export default GlobalStyle;
