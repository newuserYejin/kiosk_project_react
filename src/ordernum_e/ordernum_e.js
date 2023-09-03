import css from './ordernum.module.css';
import closeImage from '../image/close.png'
import helpImage from '../image/circle-question.svg'


function App() {
    const navigation = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const order = searchParams.get('order');
    function openHelp() {
        
    }

    function openHome() {
        navigation(`/selectorder_e`);
        
    }

    function Close() {
        navigation(`/selectorder`);
    }

    return (
        <div className={css.all}>
            <div className={css.help}>
                <img className={css.helpimg} src={helpImage} width="7.5%" height="7.5%" onClick={openHelp}></img>
            </div>
            <div className={css.ordernum}>
                <div className={css.order}>
                    <div className={css.closeimg}>
                        <img className={css.close} src={closeImage} width="6%" height="3%" onClick={Close}></img>
                    </div>
                    <div className={css.info}>
                        <p className={css.completed}>Order Completed</p>
                        <p className={css.waitnum}>Waiting number</p>
                        <div className={css.num}>901</div>
                    </div>
                </div>
                <div className={css.gohome_}>
                    <button type="button" className={css.gohome} onClick={openHome}>back to beginning</button>
                </div>
            </div>
        </div>
    );
}

export default App;