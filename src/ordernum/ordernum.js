import css from './ordernum.module.css';
import closeImage from '../image/close.png'
import helpImage from '../image/circle-question.svg'


function App() {

    function openHelp() {
        
    }

    function openHome() {
 
    }

    function Close() {

    }

    return (
        <div className={css.all}>
            <div className={css.help}>
                <img className={css.helpimg} src={helpImage} width="7.5%" height="7.5%" onclick={openHelp()}></img>
            </div>
            <div className={css.ordernum}>
                <div className={css.order}>
                    <div className={css.closeimg}>
                        <img className={css.close} src={closeImage} width="6%" height="3%" onclick={Close()}></img>
                    </div>
                    <div className={css.info}>
                        <p className={css.completed}>주문 완료</p>
                        <p className={css.waitnum}>대기 번호</p>
                        <div className={css.num}>901</div>
                    </div>
                </div>
                <div className={css.gohome_}>
                    <button type="button" className={css.gohome} onclick={openHome()}>처음으로 돌아가기</button>
                </div>
            </div>
        </div>
    );
}

export default App;