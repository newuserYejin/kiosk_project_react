import React from 'react';
import helpImage from '../image/circle-question.svg'
import css from './selecteat.module.css';
import { useNavigate,useLocation } from 'react-router-dom';
function App(){
    const navigation = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const order = searchParams.get('order');

    function checkOrderType(){
        if (order == 'slow') {
            navigation('/BigOrder_e?order=slow');
        } else if (order == 'basic') {
            navigation('/BasicOrder_e?order=basic');
        }
    }

    return (
        <div className={css.all}>
            <div className={css.selecteat}>
                <div className={css.help}>
                    <img className={css.helpimg} src={helpImage}id="imageLink"/>
                    <div id="modalContainer"></div>
                </div>
                <div className={css.first}>
                    <div className={css.fir_box}>
                        <div className={css.order}>
                            <button type="button" className={css.sloworder} onClick={checkOrderType}>To go</button>
                            <button type="button" className={css.basicorder} onClick={checkOrderType}>Eat and go</button>
                        </div>  
                    </div>
                    
                </div>
            </div>

        </div>
    );
}
export default App;