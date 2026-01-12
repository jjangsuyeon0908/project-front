import React from "react";
import { Link } from "react-router-dom";

const MainContainer = () => {
  return (
    <div>
      <h1>메인 컨테이너</h1>
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
