import React, { useState } from "react";
import {AddButton,CategoryTab,ModalBody,ModalContent,ModalFooter,ModalGrid,ModalHeader,ModalOverlay,SelectedHeader,SelectedRow,SelectedSection} from "../../pages/myfridge/style";

// 재료 하나를 카드 형태로 보여주는 컴포넌트
import IngredientCard from "./IngredientCard";

/*
  임시 재료 데이터
  → 실제 서비스에서는 서버/API에서 받아오게 될 예정
*/
const ingredients = [
  { id: 1, name: "돼지고기" },
  { id: 2, name: "소고기" },
  { id: 3, name: "항정살" },
];

/*
  재료 추가 상세 모달 컴포넌트

  props 설명
  - onClose  : 모달을 닫기 위한 함수 (부모 MyFridge에서 내려줌)
  - onSubmit : 선택된 재료 데이터를 부모(MyFridge)로 전달하는 함수
*/
const AddIngredientDetailModal = ({ onClose, onSubmit }) => {

  /*
    selectedItems 상태 구조

    {
      1: { quantity: "2", expiredAt: "2026-02-01" },
      3: { quantity: "1", expiredAt: "2026-01-15" }
    }

    👉 key   : 재료 id
    👉 value : 해당 재료의 입력 정보
  */
  const [selectedItems, setSelectedItems] = useState({});

  /*
    수량 변경 핸들러
    - 특정 재료(id)의 quantity 값만 업데이트
  */
  const handleQuantityChange = (id, value) => {
    setSelectedItems((prev) => ({
      ...prev,            // 기존 선택된 재료 유지
      [id]: {
        ...prev[id],      // 기존 해당 재료 정보 유지
        quantity: value,  // 수량만 변경
      },
    }));
  };

  /*
    유통기한 변경 핸들러
    - 특정 재료(id)의 expiredAt 값만 업데이트
  */
  const handleDateChange = (id, value) => {
    setSelectedItems((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        expiredAt: value, // 유통기한만 변경
      },
    }));
  };

  /*
    재료 카드 클릭 시 선택 / 해제 처리

    - 이미 선택된 재료면 → 상태에서 제거
    - 선택 안 된 재료면 → 기본 값으로 추가
  */
  const handleToggle = (id) => {
    setSelectedItems((prev) => {
      // 이미 선택된 경우 → 제거
      if (prev[id]) {
        const copied = { ...prev };
        delete copied[id];
        return copied;
      }

      // 선택 안 된 경우 → 기본 데이터 생성
      return {
        ...prev,
        [id]: {
          quantity: "",
          expiredAt: "",
        },
      };
    });
  };

  return (
    /*
      화면 전체를 덮는 반투명 배경
      → 모달 바깥 클릭 차단용
    */
    <ModalOverlay>
      {/* 모달 본체 */}
      <ModalContent>

        {/* ===== 카테고리 탭 영역 (UI용, 아직 로직 없음) ===== */}
        <ModalHeader>
          <CategoryTab>채소</CategoryTab>
          <CategoryTab active>육류</CategoryTab>
          <CategoryTab>해산물</CategoryTab>
          <CategoryTab>유제품</CategoryTab>
          <CategoryTab>가공식품</CategoryTab>
          <CategoryTab>기타</CategoryTab>
        </ModalHeader>

        {/* ===== 모달 본문 ===== */}
        <ModalBody>

          {/* ===== 재료 카드 Grid 영역 ===== */}
          <ModalGrid>
            {ingredients.map((item) => (
              <IngredientCard
                key={item.id}                // React 렌더링용 key
                name={item.name}             // 카드에 표시할 이름
                active={!!selectedItems[item.id]} // 선택 여부
                onClick={() => handleToggle(item.id)} // 클릭 시 토글
              />
            ))}
          </ModalGrid>

          {/* ===== 선택된 재료 정보 입력 영역 ===== */}
          <SelectedSection>

            {/* 선택 목록 헤더 */}
            <SelectedHeader>
              <div>재료명</div>
              <div>수량</div>
              <div>유통기한</div>
            </SelectedHeader>

            {/*
              selectedItems 객체를 배열로 변환해서 렌더링
              Object.entries → [id, data] 형태
            */}
            {Object.entries(selectedItems).map(([id, data]) => {
              // id에 해당하는 재료 이름 찾기
              const item = ingredients.find(
                (v) => v.id === Number(id)
              );

              return (
                <SelectedRow key={id}>
                  {/* 재료 이름 */}
                  <div>{item.name}</div>

                  {/* 수량 입력 */}
                  <input
                    type="number"
                    value={data.quantity}
                    onChange={(e) =>
                      handleQuantityChange(id, e.target.value)
                    }
                  />

                  {/* 유통기한 입력 */}
                  <input
                    type="date"
                    value={data.expiredAt}
                    onChange={(e) =>
                      handleDateChange(id, e.target.value)
                    }
                  />
                </SelectedRow>
              );
            })}

            {/* ===== 하단 버튼 ===== */}
            <ModalFooter>
              <AddButton
                onClick={() => {

                  /*
                    selectedItems 객체를
                    부모(MyFridge)가 쓰기 좋은 배열 형태로 변환
                  */
                  const result = Object.entries(selectedItems).map(
                    ([id, data]) => ({
                      id: Number(id),
                      quantity: data.quantity,
                      expiredAt: data.expiredAt,
                    })
                  );

                  // 부모(MyFridge)에게 데이터 전달
                  onSubmit(result);

                  // 모달 닫기
                  onClose();
                }}
              >
                선택한 재료 추가하기
              </AddButton>
            </ModalFooter>

          </SelectedSection>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};

export default AddIngredientDetailModal;
