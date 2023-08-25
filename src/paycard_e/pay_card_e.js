import React from 'react';
import cardGif from '../image/pay_card.gif';
import line from '../image/line2.jpg';
import css from './pay_card.module.css';
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
        if (order == 'slow') {
            navigation('/Paymethod_e?order=slow');
        } else if (order == 'basic') {
            navigation('/Paymethod_e?order=basic');
        }
    }

    function back(){
        if (order == 'slow') {
            navigation('/Paymethod_e?order=slow');
        } else if (order == 'basic') {
            navigation('/Paymethod_e?order=basic');
        }
    }
    function gohome(){
        if (order == 'slow') {
            navigation('/BigOrder?order=slow');
        } else if (order == 'basic') {
            navigation('/BigOrder?order=basic');
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
                        <div className={css.explain}>
                            <div className={css.explain1}>Please insert the card</div>
                            <div className={css.explain2}>into the slot like the video.</div>
                        </div>
                        <div className={css.video}>
                            <img className={css.pay_card} src={cardGif}  />
                        </div>
                        <div className={css.gohome_}>
                            <button type="button" className={css.back} onClick={back}>Previous screen</button>
                            <button type="button" className={css.gohome} onClick={gohome}>Return to order</button>
                        </div>
                    </div>
                </div>                
            </div>
        </div>    

    );
};

export default App;