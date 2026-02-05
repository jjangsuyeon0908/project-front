import React, { useState } from "react";
import * as S from "./style";

const NicknameChange = ({ onSuccess }) => {
  const [newNickname, setNewNickname] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newNickname.trim().length < 2) {
      alert("닉네임은 최소 2글자 이상이어야 합니다.");
      return;
    }

    // TODO: API 호출 로직 (axios.post 등)
    console.log("닉네임 변경 요청:", newNickname);

    // 성공 시 부모가 내려준 closeModal 실행
    alert("닉네임이 성공적으로 변경되었습니다.");
    onSuccess();
  };

  return (
    <S.ModalForm
      onSubmit={(e) => {
        e.preventDefault();
        onSuccess();
      }}
    >
      <S.ModalTitle>닉네임 변경</S.ModalTitle>
      <S.ModalDescription>
        서비스에서 사용할 새로운 닉네임을 입력해주세요.
      </S.ModalDescription>
      <S.ModalInput type="text" placeholder="새 닉네임 입력" required />
      <S.ModalButton type="submit">변경 완료</S.ModalButton>
    </S.ModalForm>
  );
};

export default NicknameChange;
