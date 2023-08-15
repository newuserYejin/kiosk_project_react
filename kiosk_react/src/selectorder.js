import './App.css';
import css from './selectorder.module.css';
import korImage from '../src/image/kor.png';
import usaImage from '../src/image/usa.png';
import helpImage from '../src/image/circle-question.svg';

function App() {
  //const navigation = useNavigate();

  function handleHelpClick() {

  }

  const handleSlowOrderClick = () => {
    
  }

  function handleBasicOrderClick() {
      
  }

  return (
      <div className={css.all}>
          <div className={css.help}>
              <img className={css.helpimg} src={helpImage} onClick={handleHelpClick} />
              <div id="modalContainer"></div>
          </div>
          <div className={css.first}>
              <div className={css.fir_box}>
                  <div className={css.order}>
                      <button type="button" className={css.sloworder} onClick={handleSlowOrderClick} >
                          천천히 주문하기
                      </button>

                      <button type="button" className={css.basicorder} onClick={handleBasicOrderClick} >
                          기본 주문하기
                      </button>

                  </div>

                  <div className={css.language}>
                      <img className={css.kor} src={korImage} alt="한국어" />
                      <img className={css.usa} src={usaImage} alt="미국어" />
                  </div>

              </div>
          </div>
      </div>
  );
}

export default App;
