import css from './paymethod.module.css'
import React from 'react';
import line from '../image/line2.jpg';
import helpImage from '../image/circle-question.svg'
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
            navigation('/Checklist_e?order=slow');
        } else if (order == 'basic') {
            navigation('/Checklist_e?order=basic');
        }
    }

    function openPay() {

    }
    function back(){
        if (order == 'slow') {
            navigation('/BigOrder?order=slow');
        } else if (order == 'basic') {
            navigation('/BigOrder?order=basic');
        }
    }
    function cupon_method(){
        if (order == 'slow') {
            navigation('/PayCoupon_e?order=slow');
        } else if (order == 'basic') {
            navigation('/PayCoupon_e?order=basic');
        }
    }
    function card_method(){
        if (order == 'slow') {
            navigation('/PayCard_e?order=slow');
        } else if (order == 'basic') {
            navigation('/PayCard_e?order=basic');
        }
    }
    return (
        <div className={css.all}>
            <div className={css.navigation}>
                <div className={css.navigation_all_box}>
                    <div className={css.box_line}>
                        <div onClick={openSelect} className={css.level_button}>
                            <p className={css.circle_name}>Choose</p>
                            <button className={css.circle}></button>
                        </div>
                    </div>

                    <div className={css.level_line}>
                        <p></p>
                        <img src={line} className={css.center}/>
                    </div>

                    <div className={css.box_line}>
                        <div onClick={openCheck} className={css.level_button}>
                            <p className={css.circle_name}>Check</p>
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
                            <button className={css.circle} style={{ backgroundColor: '#b928b98d' }}></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={css.selectpay}>
                <div className={css.help}>
                    <img className={css.helpimg} src={helpImage}id="imageLink"/>
                    <div id="modalContainer"></div>
                </div>
                <div className={css.first}>
                    <div className={css.fir_box}>
                        <div className={css.pay}>
                            <button type="button" className={css.card_method} onClick={card_method}>Card</button>
                            <button type="button" className={css.coupon_method} onClick={cupon_method}>Coupon</button>
                        </div>  
                        <div className={css.gohome}>
                            <button type="button" className={css.gohome} onClick={back}>Return to order</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default App;