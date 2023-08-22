import React, { useEffect } from 'react';
import messageBox_css from './messageBox.module.css';

function Msg_Box() {
    useEffect(() => {
        const modal = new window.bootstrap.Modal(document.getElementById("exampleModal"));
        modal.show();
    }, []);

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">확인 메세지</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p className={`${messageBox_css.content_font_size}`}>
                            상품을 삭제하시겠습니까?
                        </p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">취소</button>
                        <button type="button" className="btn btn-primary">확인</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Msg_Box;
