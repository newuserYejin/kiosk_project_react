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
            navigation('/BigOrder_e?order=slow');
        } else if (order == 'basic') {
            navigation('/BasicOrder_e?order=basic');
        }
    }

    function openCheck() {
        if (order == 'slow') {
            navigation('/Checklist_e?order=slow');
        } else if (order == 'basic') {
            navigation('/Checklist_e?order=basic');
        }
    }

    function openPay() {
        if (order == 'slow') {
            navigation('/Paymethod_e?order=slow');
        } else if (order == 'basic') {
            navigation('/Paymethod_e?order=basic');
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
            navigation('/SelectOrder_e?order=slow');
        } else if (order == 'basic') {
            navigation('/BigOrder?order=basic');
        }
    }

    function nextScreen() {
        if (order == 'slow') {
            navigation('/Paymethod_e?order=slow');
        } else if (order == 'basic') {
            navigation('/Paymethod_e?order=basic');
        }
    }
    return(
        <div className={css.all}>
            <div className={css.navigation}>
                <div className={css.navigation_all_box}>
                    <div className={css.box_line}>
                        <div onClick={openSelect} className={css.level_button}>
                            <p className={css.circle_name}>Select menu</p>
                            <button className={css.circle}></button>
                        </div>
                    </div>

                    <div className={css.level_line}>
                        <p></p>
                        <img src={line} className={css.center}/>
                    </div>

                    <div className={css.box_line}>
                        <div onClick={openCheck} className={css.level_button}>
                            <p className={css.circle_name}>order confirmation</p>
                            <button className={css.circle}></button>
                        </div>
                    </div>

                    <div className={css.level_line}>
                        <p></p>
                        <img src={line} className={css.center}/>
                    </div>

                    <div className={css.box_line}>
                        <div onClick={openPay} className={css.level_button}>
                            <p className={css.circle_name}>Pay</p>
                            <button className={css.circle} style={{ backgroundColor: '#87ceeb' }}></button>
                        </div>
                    </div>
                </div>
            </div> 

            <div className={`${css.box} ${css.list_menu}`}>
                {/* 주문 목록 */}
                <div>
                <div className={css.list_name}>Order List</div>
                <div className={css.help}>
                    <img className={css.helpimg} src={helpImage} id="imageLink"/>
                    <div id="modalContainer"></div>
                </div>
                </div>

                {/* 포장 확인 */}
                <div className={css.take_out}>
                <div className={css.take_out_title}>Packaging confirmation: </div>
                <ul className={css.list_group}>
                    <li className={css.list_group_item}>
                        <input className={css.form_check_input} type="radio" name="listGroupRadio" value="" id="firstRadio" defaultChecked />
                        <label className={css.form_check_label} htmlFor="firstRadio">Eat and go</label>
                    </li>
                    <li className={css.list_group_item}>
                    <input className={css.form_check_input} type="radio" name="listGroupRadio" value="" id="secondRadio" />
                    <label className={css.form_check_label} htmlFor="secondRadio">To go</label>
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
                <span>Total Cost : </span>
                <div className={css.total_cost}>9000won</div>
                </div>
                {/* 고정 버튼 */}
                <div className={`${css.box} ${css.fix_button}`}>
                    <button className={css.fix_button_detail} onClick={prvsScren}>Previous screen</button>
                    <button className={css.fix_button_detail} onClick={firstScreen}>First screen</button>
                    <button className={css.fix_button_detail} onClick={nextScreen}>Next screen</button>
                </div>
            </div>
            
        </div>
    );
}
export default App;