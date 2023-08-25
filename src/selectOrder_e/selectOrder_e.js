import React from 'react';
import helpImage from '../image/circle-question.svg'
import css from './selectorder.module.css';
import korImg from '../image/kor.png'
import usaImg from '../image/usa.png'
import { useNavigate } from 'react-router-dom';

function App(){
    const navigation = useNavigate();


    function handleSlowOrderClick() {
        navigation('/SelectEat_e?order=slow');
    }

    function handleBasicOrderClick() {
        navigation('/SelectEat_e?order=basic');
    }

    function kor(){
        navigation('/SelectOrder');
    }
    function usa(){
        navigation('/SelectOrder_e');
    }
    return (
        <div className={css.all}>
            
            <div className={css.help}>
                <img className={css.helpimg} src={helpImage}id="imageLink"/>
                <div id="modalContainer"></div>
            </div>
            <div className={css.first}>
                <div className={css.fir_box}>
                    <div className={css.order}>
                        <button type="button" className={css.sloworder} onClick={handleSlowOrderClick}>Ordering slowly</button>
                        <button type="button" className={css.basicorder} onClick={handleBasicOrderClick}>Ordering basic</button>
                    </div>  
                    <div className={css.language}>
                        <img className={css.kor} src = {korImg} onClick={kor}/>
                        <img className={css.usa} src = {usaImg} onClick={usa}/>
                    </div>
                </div>
                    
            </div>
         

        </div>
    );
}
export default App;