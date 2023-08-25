import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import css from "./checklist.module.css";
import line from '../image/line2.jpg';
import helpImage from '../image/circle-question.svg';
import Menulist from './menulist';
import { useNavigate, useLocation } from 'react-router-dom';

function App(){
    const navigation = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const order = searchParams.get('order');

    function openSelect() {
        if (order == 'slow') {
            navigation('/BigOrder?order=slow');
        } else if (order == 'basic') {
            navigation('/BigOrder?order=basic');
        }
    }

    function openCheck() {
        if (order == 'slow') {
            navigation('/Checklist?order=slow');
        } else if (order == 'basic') {
            navigation('/Checklist?order=basic');
        }
    }

    function openPay() {
        if (order == 'slow') {
            navigation('/Paymethod?order=slow');
        } else if (order == 'basic') {
            navigation('/Paymethod?order=basic');
        }
    }

    function prvsScren() {
        if (order == 'slow') {
            navigation('/BigOrder?order=slow');
        } else if (order == 'basic') {
            navigation('/BigOrder?order=basic');
        }
    }

    function firstScreen() {
        if (order == 'slow') {
            navigation('/SelectOrder?order=slow');
        } else if (order == 'basic') {
            navigation('/SelectOrder?order=basic');
        }
    }

    function nextScreen() {
        if (order == 'slow') {
            navigation('/Paymethod?order=slow');
        } else if (order == 'basic') {
            navigation('/Paymethod?order=basic');
        }
    }
    return(
        <div className={css.all}>
            <div className={css.navigation}>
                <div className={css.navigation_all_box}>
                    <div className={css.box_line}>
                        <div onClick={openSelect} className={css.level_button}>
                            <p className={css.circle_name}>선택</p>
                            <button className={css.circle}></button>
                        </div>
                    </div>

                    <div className={css.level_line}>
                        <p></p>
                        <img src={line} className={css.center}/>
                    </div>

                    <div className={css.box_line}>
                        <div onClick={openCheck} className={css.level_button}>
                            <p className={css.circle_name}>확인</p>
                            <button className={css.circle}></button>
                        </div>
                    </div>

                    <div className={css.level_line}>
                        <p></p>
                        <img src={line} className={css.center}/>
                    </div>

                    <div className={css.box_line}>
                        <div onClick={openPay} className={css.level_button}>
                            <p className={css.circle_name}>결제</p>
                            <button className={css.circle} style={{ backgroundColor: '#b928b98d' }}></button>
                        </div>
                    </div>
                </div>
            </div> 

            <div className={`${css.box} ${css.list_menu}`}>
                {/* 주문 목록 */}
                <div>
                <div className={css.list_name}>내가 담은 목록</div>
                <div className={css.help}>
                    <img className={css.helpimg} src={helpImage} id="imageLink"/>
                    <div id="modalContainer"></div>
                </div>
                </div>

                {/* 포장 확인 */}
                <div className={css.take_out}>
                <div className={css.take_out_title}>포장확인: </div>
                <ul className={css.list_group}>
                    <li className={css.list_group_item}>
                        <input className={css.form_check_input} type="radio" name="listGroupRadio" value="" id="firstRadio" defaultChecked />
                        <label className={css.form_check_label} htmlFor="firstRadio">먹고가기</label>
                    </li>
                    <li className={css.list_group_item}>
                    <input className={css.form_check_input} type="radio" name="listGroupRadio" value="" id="secondRadio" />
                    <label className={css.form_check_label} htmlFor="secondRadio">포장</label>
                    </li>
                </ul>
                </div>
                <div className={`${css.box} ${css.list_box}`}>
                    <Menulist/>
                    <Menulist/>
                    <Menulist/>
                    <Menulist/>
                </div>
                {/* 총금액 */}
                <div className={`${css.box} ${css.total_cost_box}`}>
                <span>총 금액 : </span>
                <div className={css.total_cost}>9000원</div>
                </div>
                {/* 고정 버튼 */}
                <div className={`${css.box} ${css.fix_button}`}>
                    <button className={css.fix_button_detail} onClick={prvsScren}>이전화면</button>
                    <button className={css.fix_button_detail} onClick={firstScreen}>처음으로</button>
                    <button className={css.fix_button_detail} onClick={nextScreen}>다음</button>
                </div>
            </div>
            
        </div>
    );
}
export default App;