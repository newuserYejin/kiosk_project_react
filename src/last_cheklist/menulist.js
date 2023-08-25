import React from 'react';
import css from "./checklist.module.css";
import coffee from '../image/coffee.png';

function menu_item() {
    function modify(){}
    function Delete(){}
    return (
       
        <div className={`${css.box} ${css.list_content_box}`}>
            <div className={`${css.box} ${css.list_img_box}`}>
                <img id="im" className={css.list_img_size} src={coffee} />
            </div>
            <div className={`${css.box} ${css.list_content_info}`}>
                <div className={`${css.container} ${css.text_center}`}>
                    <div className={css.content_title}>
                        <div className={css.menu_name}>아메리카노</div>
                        <div className={css.menu_cost}>3000원</div>
                    </div>
                        <div className={css.list_option}>
                            <div className={css.list_option_detail}>
                                <p className={css.option_title}>현재 선택 내용</p>
                                <div className={css.option_detail}>
                                    <div>
                                        <span className={css.option_name}>온도: </span>
                                        <span className={css.select_tem}>차갑게</span>
                                    </div>
                                    <div>
                                        <span className={css.option_name}>크기: </span>
                                        <span className={css.select_size}>큰거</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    
                        <div className={css.list_buttons}>
                            <div className={css.button_num}>1ea</div>
                            <div className={css.content_update_button}>
                                <button className={css.modify} onClick={modify}>수정</button>
                                <div id="modalContainer"></div>
                                <button className={css.delete} onClick={Delete}>삭제</button>
                            </div>
                        </div>

                            
                        </div>
                    </div>
                </div>

            
    );
}
export default menu_item;