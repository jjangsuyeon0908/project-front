import React, { useEffect, useRef, useState } from "react";
import * as S from "../style"; // style.js 안에서 export 된 모든 styled-components를 S라는 객체로 가져온다.

const SORT_OPTIONS = [
  { key: "latest", label: "최신순" },
  { key: "popular", label: "인기순" },
];

export const CommunityHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sort, setSort] = useState(SORT_OPTIONS[0]);

  const dropdownRef = useRef(null);

  // 바깥 클릭하면 닫기
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);

  }, []);

  const handleSelect = (option) => {
    setSort(option);
    setIsOpen(false);
  };

  return (
    <S.HeaderSection>
      <S.Title>요리 인증 커뮤니티</S.Title>

      <S.SearchRow>
        <S.SearchInput placeholder="요리명, 코멘트, 재료로 검색..." />

        <S.DropdownWrap ref={dropdownRef}>
          <S.FilterButton type="button" onClick={() => setIsOpen((p) => !p)}>
            <S.FilterIcon src="/assets/icons/filter.png" alt="정렬 아이콘" />
            {sort.label}
            
          </S.FilterButton>

          {isOpen && (
            <S.DropdownMenu>
              {SORT_OPTIONS.map((opt) => (
                <S.DropdownItem
                  key={opt.key}
                  type="button"
                  $active={opt.key === sort.key}
                  onClick={() => handleSelect(opt)}
                >
                  {opt.label}
                </S.DropdownItem>
              ))}
            </S.DropdownMenu>
          )}
        </S.DropdownWrap>
      </S.SearchRow>
    </S.HeaderSection>
  );
};
