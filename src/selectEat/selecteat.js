import React from 'react';
import sl from '../selectEat/selecteat.module.css';
import Line from '../image/line2.jpg'
import Circle from '../image/circle-question.svg'
import { useNavigate, useLocation } from 'react-router-dom';


function App() {

    const navigation = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const order = searchParams.get('order');

    function checkOrderType() {
        if (order == 'slow') {
            navigation('/BigOrder?order=slow');
        } else if (order == 'basic') {
            navigation('/BigOrder?order=basic');
        }
    }


    return (
        <div className={sl.all}>
            <div className={sl.selecteat}>
                <div className={sl.help}>
                    <img className={sl.helpimg} src={Circle} id="imageLink" />
                    <div id="modalContainer" ></div>
                </div>
                <div className={sl.first}>
                    <div className={sl.fir_box}>
                        <div className={sl.order}>
                            <button type="button" className={sl.sloworder} onClick={checkOrderType}>포장하기</button>
                            <button type="button" className={sl.basicorder} onClick={checkOrderType}>먹고 가기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default App;
