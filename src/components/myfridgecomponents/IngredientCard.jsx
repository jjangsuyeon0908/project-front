import React from "react";
import { CardStyle, CardTextStyle, HoverInfo, IconStyle } from "../../pages/myfridge/style";

const IngredientCard = ({ name, active, onClick, quantity, expiredAt }) => {
  return (
    <CardStyle active={active} onClick={onClick}>
      <IconStyle>🥬</IconStyle>
      <CardTextStyle>{name}</CardTextStyle>

      {/* hover 시 나타나는 정보 박스 */}
      <HoverInfo>
        <p>재료명: {name}</p>
        <p>수량: {quantity}</p>
        <p>유통기한: {expiredAt}</p>
      </HoverInfo>
    </CardStyle>
  );
};

export default IngredientCard;
