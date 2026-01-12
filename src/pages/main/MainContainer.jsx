import React from "react";
import { Link } from "react-router-dom";
import { MainTitle } from "./style";

const MainContainer = () => {
  return (
    <div>
      <MainTitle>메인 컨테이너</MainTitle> {/*common.js 폰트 스타일 적용 샘플*/}
      <p>컴포넌트</p>
      <p>컴포넌트</p>
      <p>컴포넌트</p>
      <p>컴포넌트</p>
      <p>컴포넌트</p>
      <p>컴포넌트</p>
      <Link to={"/test"}>강사님 템플릿</Link>
    </div>
  );
};

export default MainContainer;
