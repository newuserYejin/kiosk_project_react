import css from './pay_coupon.module.css';
import couponGif from '../image/pay_coupon.gif'
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


    function back(){
        if (order == 'slow') {
            navigation('/Paymethod?order=slow');
        } else if (order == 'basic') {
            navigation('/Paymethod?order=basic');
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
                        <div className={css.explain}>	
                            <div className={css.explain1}>카드를 아래의 영상과 같이</div>
                            <div className={css.explain2}>투입구에 끝까지 넣어주세요.</div>
                        </div>
                        <div className={css.video}>
                            <img className={css.pay_coupon} src={couponGif} />
                        </div>
                        <div className={css.gohome_}>
                        <button type="button" className={css.back} onClick={back}>이전 화면</button>
                            <button type="button" className={css.gohome} onClick={gohome}>주문으로 돌아가기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default App;