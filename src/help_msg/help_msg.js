import React, { useEffect } from 'react';
import HelpMsgCss from '../help_msg/help_msg.module.css';

function HelpMsg() {
    useEffect(() => {
        const modal = new window.bootstrap.Modal(document.getElementById("exampleModal"));
        modal.show();
      }, []);

  return (
    <div className={`modal fade ${HelpMsgCss.modal}`} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">도움말</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>현재 선택 단계.</p>
            <p>원하는 상품을 선택하여 사진부분을 누르면 상세 메뉴가 나타납니다.</p>
            <p>상세 메뉴 화면을 통해 추가 상품 설명 확인 및 선택사항 결정이 가능합니다.</p>
            <p>원하는 상품이 보이지 않는다면 돋보기를 눌러 검색기능을 활용해보세요!</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpMsg;
