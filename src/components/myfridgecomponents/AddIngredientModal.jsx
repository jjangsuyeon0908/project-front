import React from 'react';
import S, { AddButton, Page, Wrapper } from '../../pages/myfridge/style';

const AddIngredientModal = ({ onNext }) => {
  return (
    <>
      <img
        className="firdgeImg"
        src={`${process.env.PUBLIC_URL}/assets/images/fridge.png`}
        alt="냉장고"
      />
      <AddButton onClick={onNext}>
        냉장고를 채워볼까요?
      </AddButton>
    </>
  );
};

export default AddIngredientModal;