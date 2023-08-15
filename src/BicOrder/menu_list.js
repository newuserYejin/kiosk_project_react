import React from 'react';
import Bic_css from '../BicOrder/BicOrder.module.css'
import coffee from '../image/coffee.png'
import { useNavigate } from 'react-router-dom';

function menu_item() {
    // const navigation = useNavigate();

    function selectBtn() {
        // navigation('/SelectEat?order=slow');
    }


    return (
        <div className={`${Bic_css.box} ${Bic_css.list_content_box}`}>

            <div className={`${Bic_css.box} ${Bic_css.list_img_box}`}>
                <img className={Bic_css.list_img_size} src={coffee} />
            </div>
            <div className={`${Bic_css.box} ${Bic_css.list_content_info}`}>
                {/*오른쪽 설명*/}
                <div className={Bic_css.content_title}>
                    <div className={Bic_css.menu_name}>아메리카노</div>
                    <div className={Bic_css.menu_cost}>3000원</div>
                </div>
                <div className={Bic_css.list_option}>
                    <div>
                        설명
                    </div>
                </div>
                <div className={Bic_css.list_buttons}>
                    <button className={Bic_css.selectBtn} onClick={selectBtn}>선택</button>
                </div>
            </div>
        </div>
    );
};

export default menu_item;


