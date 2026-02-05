import React, { useState } from "react";
import * as S from "./style";

const PasswordChange = ({ onSuccess }) => {
  const [form, setForm] = useState({ currentPw: "", newPw: "", confirmPw: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.newPw !== form.confirmPw) {
      alert("새 비밀번호가 일치하지 않습니다.");
      return;
    }

    // API 호출 로직
    alert("비밀번호가 변경되었습니다.");
    onSuccess();
  };

  return (
    <S.ModalForm
      onSubmit={(e) => {
        e.preventDefault();
        onSuccess();
      }}
    >
      <S.ModalTitle>비밀번호 변경</S.ModalTitle>
      <S.ModalDescription>
        보안을 위해 정기적으로 비밀번호를 변경하는 것이 좋습니다.
      </S.ModalDescription>
      <S.ModalInput type="password" placeholder="현재 비밀번호" required />
      <S.ModalInput type="password" placeholder="새 비밀번호" required />
      <S.ModalInput type="password" placeholder="새 비밀번호 확인" required />
      <S.ModalButton type="submit">비밀번호 재설정</S.ModalButton>
    </S.ModalForm>
  );
};

export default PasswordChange;
