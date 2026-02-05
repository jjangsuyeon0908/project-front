import React, { useState } from "react";
// import { Link } from "react-router-dom";
import {
  HeaderOuter,
  HeaderInner,
  TopRow,
  LogoArea,
  LogoIcon,
  LogoText,
  SearchArea,
  SearchInput,
  SearchBtn,
  RightArea,
  RightLink,
  RightIcon,
  RightText,
  BottomRow,
  Nav,
  NavItem,
  LogoWrap,
} from "./style";
import ProfilePopUp from "./ProfilePopUp";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <HeaderOuter>
      <HeaderInner>
        {/* Top Row */}
        <TopRow>
          <LogoArea to="/">
            <LogoWrap>
              <LogoIcon
                src="\assets\logos\frigogo_logo.png"
                alt="로고 아이콘"
                aria-hidden
              />
              <LogoText>프리고고</LogoText>
            </LogoWrap>
          </LogoArea>

          <SearchArea>
            <SearchInput placeholder=" " aria-label="검색" />
            <SearchBtn type="button" aria-label="검색">
              🔍
            </SearchBtn>
          </SearchArea>

          <RightArea>
            <RightLink to="/login">
              <RightIcon aria-hidden>👤</RightIcon>
              <RightText>로그인</RightText>
            </RightLink>

            <button onClick={() => setIsSidebarOpen(true)}>
              <RightIcon aria-hidden>▦</RightIcon>
              <RightText>프로필</RightText>
            </button>
            <ProfilePopUp
              isOpen={isSidebarOpen}
              onClose={() => setIsSidebarOpen(false)}
            />
          </RightArea>
        </TopRow>

        {/* Bottom Row */}
        <BottomRow>
          <Nav>
            <NavItem to="/myfridge">나의 냉장고</NavItem>
            <NavItem to="/foodrecommendation">추천 요리</NavItem>
            <NavItem to="/communitymain">커뮤니티</NavItem>
            <NavItem to="/levelandbadge">레벨&뱃지</NavItem>
            <NavItem to="/reportandchallenge">리포트&챌린지</NavItem>
          </Nav>
        </BottomRow>
      </HeaderInner>
    </HeaderOuter>
  );
};

export default Header;
