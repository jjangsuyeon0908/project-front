import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddIngredientModal from "../../components/myfridgecomponents/AddIngredientModal";
import IngredientList from "../../components/myfridgecomponents/IngredientList";
import AddIngredientDetailModal from "../../components/myfridgecomponents/AddIngredientDetailModal";
import {
  CategoryRow,
  EmptyWrapper,
  FridgeButtonGroup,
  FridgeHeader,
  FridgeTopSection,
  LayoutAddButton,
  LayoutCategoryTab,
  MyFridgeContainer,
  TopFixedSection,
  TopInfoRow,
} from "./style";

const MyFridge = () => {
  // 냉장고에 실제로 들어있는 재료들
  const [ingredients, setIngredients] = useState([]);

  // 재료 추가 모달 열림 여부
  const [isAddOpen, setIsAddOpen] = useState(false);

  const [activeCategory, setActiveCategory] = useState("전체");

  // 🔹 AddIngredientDetailModal에서 받은 데이터 저장
  const handleAddIngredients = (newItems) => {
    setIngredients((prev) => [...prev, ...newItems]);
  };

  return (
    <MyFridgeContainer>
      {/* 페이지 제목 */}
      <TopFixedSection>
        <FridgeHeader>
          <h1>나의 냉장고</h1>
          <FridgeButtonGroup>
            <LayoutAddButton onClick={() => setIsAddOpen(true)}>재료 추가</LayoutAddButton>
            <LayoutAddButton>재료 삭제</LayoutAddButton>
            <LayoutAddButton>재료 수정</LayoutAddButton>
          </FridgeButtonGroup>
        </FridgeHeader>
        <FridgeTopSection>
          {/* 카테고리 탭 */}
          <CategoryRow>
            <LayoutCategoryTab active={activeCategory === "전체"} onClick={() => setActiveCategory("전체")}> 전체 </LayoutCategoryTab>
            <LayoutCategoryTab>채소</LayoutCategoryTab>
            <LayoutCategoryTab>육류</LayoutCategoryTab>
            <LayoutCategoryTab>해산물</LayoutCategoryTab>
            <LayoutCategoryTab>유제품</LayoutCategoryTab>
            <LayoutCategoryTab>가공품</LayoutCategoryTab>
            <LayoutCategoryTab>기타</LayoutCategoryTab>
          </CategoryRow>
          {/* 추천 + 정렬 */}
          <TopInfoRow>
            <div>
              현재 재료로 추천 요리를 확인해보세요!
              {/* 추천 요리 페이지로 이동하는 링크 */}
              <Link to={"/foodrecommendation"}>
                <button>추천 요리 보기</button>
              </Link>
            </div>
            <div>
              <span>일반순</span>
              <span>최신순</span>
              <span>☰</span>
            </div>
          </TopInfoRow>
        </FridgeTopSection>
      </TopFixedSection>

      {/* 재료가 하나도 없을 때 -> empty 화면 */}
      {ingredients.length === 0 && !isAddOpen && (
        <EmptyWrapper>
          <AddIngredientModal onNext={() => setIsAddOpen(true)} />
        </EmptyWrapper>
      )}

      {/* 재료가 있을 때 -> 리스트 화면 */}
      {ingredients.length > 0 && <IngredientList items={ingredients} />}

      {/* 재료 추가 모달 */}
      {isAddOpen && (
        <AddIngredientDetailModal
          onClose={() => setIsAddOpen(false)}
          onSubmit={handleAddIngredients}
        />
      )}
    </MyFridgeContainer>
  );
};

export default MyFridge;
