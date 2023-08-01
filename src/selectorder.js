import React from 'react';
import sl from './selectorder.module.css';
import korImage from '../src/image/kor.png';
import usaImage from '../src/image/usa.png';
import helpImage from '../src/image/circle-question.svg';
import { useNavigate } from 'react-router-dom';


function App() {
    const navigation = useNavigate();

    function handleHelpClick() {

    }

    const handleSlowOrderClick = () => {
        navigation('/SelectEat?order=slow');
    }

    function handleBasicOrderClick() {
        navigation('/SelectEat?order=basic');
    }

    return (
        <div className={sl.all}>
            <div className={sl.help}>
                <img className={sl.helpimg} src={helpImage} onClick={handleHelpClick} />
                <div id="modalContainer"></div>
            </div>
            <div className={sl.first}>
                <div className={sl.fir_box}>
                    <div className={sl.order}>
                        <button type="button" className={sl.sloworder} onClick={handleSlowOrderClick} >
                            천천히 주문하기
                        </button>

                        <button type="button" className={sl.basicorder} onClick={handleBasicOrderClick} >
                            기본 주문하기
                        </button>

                    </div>

                    <div className={sl.language}>
                        <img className={sl.kor} src={korImage} alt="한국어" />
                        <img className={sl.usa} src={usaImage} alt="미국어" />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default App;
