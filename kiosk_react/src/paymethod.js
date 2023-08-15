import css from './paymethod.module.css';
import Line from './image/line2.jpg'
import helpImage from './image/circle-question.svg'


function App() {

    function openSelect() {

    }

    function openCheck() {

    }

    function openPay() {

    }

    function checkPayType() {

    }

    function Back() {

    }

    return (
        <div className={css.all}>
            {/* 네비게이션 */}
            <div className={css.navigation}>
                <div className={css.navigation_all_box}>
                    <div className={css.box_line}>
                        <div onclick={openSelect()} className={css.level_button}>
                            <p className={css.circle_name}>선택</p>
                            <button className={css.circle}></button>
                        </div>
                    </div>

                    <div className={css.level_line}>
                        <p></p>
                        <img src={Line} alt="Line 이미지" className={css.center} />
                    </div>

                    <div className={css.box_line}>
                        <div onclick={openCheck()} className={css.level_button}>
                            <p className={css.circle_name}>확인</p>
                            <button className={css.circle}></button>

                        </div>
                    </div>

                    <div className={css.level_line}>
                        <p></p>
                        <img src={Line} alt="Line 이미지" className={css.center} />
                    </div>

                    <div className={css.box_line}>
                        <div onclick={openPay()} className={css.level_button}>
                            <p className={css.circle_name}>결제</p>
                            <button className={css.circle} style={{ backgroundColor: '#b928b98d' }}></button>
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
                            <button type="button" className={css.card_method} onclick={checkPayType()}>카드</button>
                            <button type="button" className={css.coupon_method} onclick={checkPayType()}>쿠폰</button>
                        </div>
                        <div className={css.go_home}>
                            <button type="button" className={css.gohome} onclick={Back()}>주문으로 돌아가기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default App;