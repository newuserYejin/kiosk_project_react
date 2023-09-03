import css from './paymethod.module.css';
import Line from '../image/line2.jpg'
import helpImage from '../image/circle-question.svg'
import { useNavigate, useLocation } from 'react-router-dom';

function App() {
    const navigation = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const order = searchParams.get('order');
    
    function openSelect() {
        if (order == 'slow') {
            navigation('/BigOrder?order=slow');
        } else if (order == 'basic') {
            navigation('/BasicOrder?order=basic');
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

    }

    function cupon_method(){
        if (order == 'slow') {
            navigation('/PayCoupon?order=slow');
        } else if (order == 'basic') {
            navigation('/PayCoupon?order=basic');
        }
    }
    function card_method(){
        if (order == 'slow') {
            navigation('/PayCard?order=slow');
        } else if (order == 'basic') {
            navigation('/PayCard?order=basic');
        }
    }

    function Back(){
        if (order == 'slow') {
            navigation('/BigOrder?order=slow');
        } else if (order == 'basic') {
            navigation('/BasicOrder?order=basic');
        }
    }

    return (
        <div className={css.all}>
            {/* 네비게이션 */}
            <div className={css.navigation}>
                <div className={css.navigation_all_box}>
                    <div className={css.box_line}>
                        <div onClick={openSelect} className={css.level_button}>
                            <p className={css.circle_name}>메뉴 선택</p>
                            <button className={css.circle}></button>
                        </div>
                    </div>

                    <div className={css.level_line}>
                        <p></p>
                        <img src={Line} alt="Line 이미지" className={css.center} />
                    </div>

                    <div className={css.box_line}>
                        <div onClick={openCheck} className={css.level_button}>
                            <p className={css.circle_name}>주문 확인</p>
                            <button className={css.circle}></button>

                        </div>
                    </div>

                    <div className={css.level_line}>
                        <p></p>
                        <img src={Line} alt="Line 이미지" className={css.center} />
                    </div>

                    <div className={css.box_line}>
                        <div onClick={openPay} className={css.level_button}>
                            <p className={css.circle_name}>결제</p>
                            <button className={css.circle} style={{ backgroundColor: '#87ceeb' }}></button>
                        </div>
                    </div>
                </div>

            </div>

            <div className={css.selectpay}>
                <div className={css.help}>
                    <img className={css.helpimg} src={helpImage} id="imageLink" />
                    <div id="modalContainer" ></div>
                </div>
                <div className={css.first}>
                    <div className={css.fir_box}>
                        <div className={css.pay}>
                            <button type="button" className={css.card_method} onClick={card_method}>카드</button>
                            <button type="button" className={css.coupon_method} onClick={cupon_method}>쿠폰</button>
                        </div>
                        <div className={css.go_home}>
                            <button type="button" className={css.gohome} onClick={Back}>주문으로 돌아가기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default App;