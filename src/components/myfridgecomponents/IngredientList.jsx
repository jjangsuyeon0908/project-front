import React from "react";
import IngredientCard from "./IngredientCard";
import { GridStyle, GridWrapperStyle } from "../../pages/myfridge/style";

// 🔹 props로 ingredients 받기
const IngredientList = ({ items }) => {
  // 임시 id → 이름 매핑 (지금 구조 기준)
  const ingredientMap = {
    1: "돼지고기",
    2: "소고기",
    3: "항정살",
  };

  return (
    <GridWrapperStyle>
      <GridStyle>
        {items.map((item) => (
          <IngredientCard
            key={item.id}
            name={ingredientMap[item.id]}
            quantity={item.quantity}
            expiredAt={item.expiredAt}
          />
        ))}
      </GridStyle>
    </GridWrapperStyle>
  );
};

export default IngredientList;
