import React, { useEffect } from 'react';
import search_css from './search.module.css';
import search_icon from '../image/search.png';
import Keyboard from 'simple-keyboard';
import 'simple-keyboard/build/css/index.css';
import layout from "simple-keyboard-layouts/build/layouts/korean";

function SearchPage() {
    useEffect(() => {
        const modal = new window.bootstrap.Modal(document.getElementById("exampleModal"));
        modal.show();

        // 키보드 인스턴스 생성
        const myKeyboard = new Keyboard({
            onChange: input => onChange(input),
            onKeyPress: button => onKeyPress(button),
            ...layout
        });

        return () => {
            myKeyboard.destroy(); // 컴포넌트가 언마운트될 때 키보드 인스턴스 해제
        };
    }, []);

    function onChange(input) {
        document.querySelector(".input").value = input;
        console.log("Input changed", input);
    }

    function onKeyPress(button) {
        console.log("Button pressed", button);
    }

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className={`modal-dialog modal-dialog-centered ${search_css.modal_size}`}>
                <div className={`modal-content ${search_css.modal_size}`}>
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">검색창</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body modalBody">
                        <div className={`${search_css.box} ${search_css.top_box}`}>
                            <input className={`input ${search_css.input}`} type="text" id="input_menu_name" placeholder="상품명을 입력하세요" />
                            <img className={search_css.search_icon} id="search_icon" src={search_icon} alt="Search Icon" />
                        </div>
                        <div className={`${search_css.box} ${search_css.keyword_box}`} id="resultContainer">키워드 박스</div>
                        {/* 키보드 */}
                        <div id="KeyBoard" className={`simple-keyboard ${search_css.simple_keyboard}`}></div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchPage;
