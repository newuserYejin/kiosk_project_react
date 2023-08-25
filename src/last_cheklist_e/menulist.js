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
                        <div className={css.menu_name}>Americano</div>
                        <div className={css.menu_cost}>3000won</div>
                    </div>
                        <div className={css.list_option}>
                            <div className={css.list_option_detail}>
                                <p className={css.option_title}>Current Selected Content</p>
                                <div className={css.option_detail}>
                                    <div>
                                        <span className={css.option_name}>Temperature: </span>
                                        <span className={css.select_tem}>cold</span>
                                    </div>
                                    <div>
                                        <span className={css.option_name}>Size: </span>
                                        <span className={css.select_size}>Large</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    
                        <div className={css.list_buttons}>
                            <div className={css.button_num}>1ea</div>
                            <div className={css.content_update_button}>
                                <button className={css.modify} onClick={modify}>Modify</button>
                                <div id="modalContainer"></div>
                                <button className={css.delete} onClick={Delete}>Delete</button>
                            </div>
                        </div>

                            
                        </div>
                    </div>
                </div>

            
    );
}
export default menu_item;