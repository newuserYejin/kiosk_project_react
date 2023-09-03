import React, { useState } from 'react';
import css from './exit_home.module.css'

function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 모달 열기
  const openModal = () => {
    setIsModalOpen(true);
  };

  // 모달 닫기
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>모달 열기</button>
      {isModalOpen && (
        <div className={css.self_modal}>
          <div className={css.self_modal_all}>
            <div className={css.self_modal_content}>
              <div className={css.self_modal_top}>
                <h1>사용 여부 확인</h1>
              </div>
              <div className={css.self_modal_body}>
                <p>키오스크 사용을 계속 하시겠습니까?</p>
                <p>네 : 이어서 계속 진행하기</p>
                <p>아니요: 키오스크 사용 중단하기</p>
                <p>(아무런 선택이 없을 시 10초 후 맨 처음 화면으로 돌아갑니다.)</p>
              </div>
              <div className={css.self_modal_footer}>
                <button className={css.self_modal_ok} onClick={closeModal}>
                  네
                </button>
                <button className={css.self_modal_cancel} onClick={closeModal}>
                  아니요
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
