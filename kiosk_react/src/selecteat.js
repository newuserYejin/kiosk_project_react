import css from './selecteat.module.css';
import helpImage from './image/circle-question.svg'


function App() {

    function checkOrderType() {

    }

    function openHelp() {
        
    }

    return (
        <div className={css.all}>
            <div className={css.selecteat}>
                <div className={css.help}>
                    <img className={css.helpimg} src={helpImage} id="imageLink" onclick={openHelp()}/>
                    <div id="modalContainer" ></div>
                </div>
                <div className={css.first}>
                    <div className={css.fir_box}>
                        <div className={css.order}>
                            <button type="button" className={css.sloworder} onclick={checkOrderType()}>포장하기</button>
                            <button type="button" className={css.basicorder} onclick={checkOrderType()}>먹고 가기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default App;