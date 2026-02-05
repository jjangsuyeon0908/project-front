import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./style";
import ChangeInfoFrame from "../joincomponents/ChangeInfoFrame";
import NicknameChange from "../joincomponents/NicknameChange";
import PasswordChange from "../joincomponents/PasswordChange";


const ProfilePopUp = ({ isOpen, onClose }) => {
  const [activeModal, setActiveModal] = useState(null);

  const closeModal = () => setActiveModal(null);

  return (
    <div>
      <S.Backdrop isOpen={isOpen} onClick={onClose} />

      {/* 사이드바 내용 */}
      <S.SidebarContainer isOpen={isOpen}>
        <S.ProfileImgWrap>
          <img src="\assets\images\pinggu.png" alt="프로필 이미지" />
          <S.CloseButton onClick={onClose}>
            <img src="\assets\icons\close.svg" alt="닫기 버튼" />
          </S.CloseButton>
        </S.ProfileImgWrap>
        <S.ProfileContainer>
          <S.ProfileUserInfoContainer>
            <S.ProfileUserName>요리왕 김철수</S.ProfileUserName>
            <S.ProfileUserLevel>
              <img src="\assets\icons\star.svg" alt="별" />
              LV.1
            </S.ProfileUserLevel>
            <S.ProfileUserXp>XP 0</S.ProfileUserXp>
            <S.ProfileUserCreateAt>
              가입일 : 2025년 12월 25일
            </S.ProfileUserCreateAt>
          </S.ProfileUserInfoContainer>
        </S.ProfileContainer>
        <S.ProfileContainer>
          <S.ProfileTitles>활동 요약</S.ProfileTitles>
          <p>총 인증: 0</p>
          <p>획득한 뱃지: 0</p>
        </S.ProfileContainer>
        <S.ProfileContainer>
          <S.ProfileTitles>내 활동</S.ProfileTitles>
          <Link to={"/myrecipe"} onClick={onClose}>저장한 레시피</Link>
          <Link to={"/levelandbadge"} onClick={onClose}>획득한 뱃지</Link>
          <Link to={"/myposts"} onClick={onClose}>커뮤니티 게시물</Link>
        </S.ProfileContainer>
        <S.ProfileContainer>
          <S.ProfileTitles>설정</S.ProfileTitles>
          <S.ChangeButton onClick={() => setActiveModal("nickname")}>
            닉네임 변경
          </S.ChangeButton>
          <S.ChangeButton onClick={() => setActiveModal("password")}>
            비밀번호 변경
          </S.ChangeButton>
          <Link
            to={""}
            onClick={onClose}
          >
            로그아웃
          </Link>
        </S.ProfileContainer>
        <div>회원탈퇴</div>
        {activeModal && (
          <ChangeInfoFrame onClose={closeModal}>
            {activeModal === "nickname" && (
              <NicknameChange onSuccess={closeModal} />
            )}
            {activeModal === "password" && (
              <PasswordChange onSuccess={closeModal} />
            )}
          </ChangeInfoFrame>
        )}
      </S.SidebarContainer>
    </div>
  );
};

export default ProfilePopUp;
