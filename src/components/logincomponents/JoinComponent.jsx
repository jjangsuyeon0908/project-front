import React from "react";
import * as S from "../../pages/loginandjoin/style";

const JoinComponent = () => {
  return (
    <div>
      <S.QuickContainer>
        <S.StyledLoginFieldset>
          <S.LoginLegend align="center">&nbsp;간편 로그인&nbsp;</S.LoginLegend>
          <S.QuickIconBox>
            <p>이메일 가입</p>
            <p>네이버 가입</p>
            <p>애플 가입</p>
          </S.QuickIconBox>
        </S.StyledLoginFieldset>
      </S.QuickContainer>
    </div>
  );
};

export default JoinComponent;
