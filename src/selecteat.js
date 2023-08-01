import sl from './selecteat.module.css';
import Line from './image/line2.jpg'
import Circle from './image/circle-question.svg'


function App() {

    function openSelect() {

    }

    function openCheck() {

    }

    function openPay() {

    }

    function checkOrderType() {

    }


    return (
        <div className={sl.all}>
            {/* 네비게이션 */}
            <div className={sl.navigation}>
                <div className={sl.navigation_all_box}>
                    <div className={sl.box_line}>
                        <div onclick={openSelect()} className={sl.level_button}>
                            <p className={sl.circle_name}>선택</p>
                            <button className={sl.circle} style={{ backgroundColor: '#b928b98d' }}></button>
                        </div>
                    </div>

                    <div className={sl.level_line}>
                        <p></p>
                        <img src={Line} alt="Line 이미지" className={sl.center} />
                    </div>

                    <div className={sl.box_line}>
                        <div onclick={openCheck()} className={sl.level_button}>
                            <p className={sl.circle_name}>확인</p>
                            <button className={sl.circle}></button>

                        </div>
                    </div>

                    <div className={sl.level_line}>
                        <p></p>
                        <img src={Line} alt="Line 이미지" className={sl.center} />
                    </div>

                    <div className={sl.box_line}>
                        <div onclick={openPay()} className={sl.level_button}>
                            <p className={sl.circle_name}>결제</p>
                            <button className={sl.circle}></button>
                        </div>
                    </div>
                </div>

            </div>

            <div className={sl.selecteat}>
                <div className={sl.help}>
                    <img className={sl.helpimg} src={Circle} id="imageLink" />
                    <div id="modalContainer" ></div>
                </div>
                <div className={sl.first}>
                    <div className={sl.fir_box}>
                        <div className={sl.order}>
                            <button type="button" className={sl.sloworder} onclick={checkOrderType()}>포장하기</button>
                            <button type="button" className={sl.basicorder} onclick={checkOrderType()}>먹고 가기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default App;
