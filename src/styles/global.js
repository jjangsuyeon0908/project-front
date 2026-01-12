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
    /* 🟢 추가: 모바일 기기 터치 시 발생하는 파란색 하이라이트 제거 */
    -webkit-tap-highlight-color: transparent;
  }

  body {
    /* 🟡 수정: 시스템 기본 폰트(Fall-back)를 더 상세하게 추가하여 로딩 안정성 확보 */
    font-family: 'pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    
    text-shadow: 0 0 1px rgba(0, 0, 0, 0.05);
    letter-spacing: -0.2px;
    color: #131313;

    /* 🟡 수정: 본문 가독성을 위해 행간을 1.3 -> 1.5로 가이드에 맞춰 상향 */
    line-height: 1.5; 

    /* 🟢 추가: 맥(macOS) 브라우저에서 폰트 테두리를 더 매끄럽게 렌더링 */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button, input, textarea, select {
    font-family: inherit;
    /* 🟢 추가: 폼 요소가 부모의 글자 크기를 강제로 상속받도록 설정 */
    font-size: inherit; 
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    padding: 0;
  }

  /* 🟢 추가: 클릭할 수 없는 상태의 버튼에 대한 커서 스타일 정의 */
  button:disabled {
    cursor: default;
  }

  input, textarea {
    border: 1px solid #dbdbdb;
    outline: none;
  }

  input:focus, textarea:focus {
    border-color: #333;
  }

  textarea {
    resize: none;
  }

  /* 🟢 추가: 이미지가 부모 영역을 벗어나지 않게 하고 하단 공백 제거 */
  img {
    max-width: 100%;
    display: block;
  }
`;

export default GlobalStyle;