import React, { useState, useRef,useEffect  } from 'react';
import css from './BasicOrder.module.css'; // 스타일 파일을 임포트하세요 (만약 스타일을 따로 정의한 경우)
import coffee from '../image/coffee.png';

function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);
  const sliderRef = useRef(null);

  const updateSliderPosition = () => {
    const slideWidth = sliderRef.current.clientWidth;
    const offset = -slideWidth * slideIndex;
    sliderRef.current.style.transform = `translateX(${offset}px)`;
  };

  const prevSlide = () => {
    setSlideIndex((prevSlideIndex) => {
      const newIndex = Math.max(prevSlideIndex - 1, 0);
      return newIndex;
    });
  };

  const nextSlide = () => {
    setSlideIndex((prevSlideIndex) => {
      const newIndex = Math.min(prevSlideIndex + 1, sliderRef.current.children.length - 1);
      return newIndex;
    });
  };

  // 슬라이드가 변경될 때마다 위치를 업데이트합니다.
  useEffect(() => {
    updateSliderPosition();
  }, [slideIndex]);

  return (
    <div className={`${css.box} ${css.list_box}`}>
      <div className={css.slider_container}>
        <div className={css.slider} ref={sliderRef}>
          {/* 슬라이드할 내용들을 추가하세요 */}
          {/* 예시: */}
          <div className={css.slide}>
            {/* 슬라이드 내용 */}
            <div className={`${css.box} ${css.list_content_box}`} id="list_click">
                    <div className={`${css.box} ${css.list_img_box}`}>
                        <img className={css.list_img_size} src={coffee}/>
                    </div>
                    <div className={`${css.box}  ${css.list_content_info}`}>
                        <div className={`${css.container} ${css.text_center}`}>
                            <div className={css.content_title}>
                                <div className={css.menu_name}>아메리카노</div>
                                <div className={css.menu_cost}>3000원</div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className={`${css.box} ${css.list_content_box}`} id="list_click">
                    <div className={`${css.box} ${css.list_img_box}`}>
                        <img className={css.list_img_size} src={coffee}/>
                    </div>
                    <div className={`${css.box}  ${css.list_content_info}`}>
                        <div className={`${css.container} ${css.text_center}`}>
                            <div className={css.content_title}>
                                <div className={css.menu_name}>아메리카노</div>
                                <div className={css.menu_cost}>3000원</div>
                            </div>
                        </div>
                    </div>
            </div>
          </div>
          <div className={css.slide}>
            {/* 슬라이드 내용 */}
            <div className={`${css.box} ${css.list_content_box}`} id="list_click">
                    <div className={`${css.box} ${css.list_img_box}`}>
                        <img className={css.list_img_size} src={coffee}/>
                    </div>
                    <div className={`${css.box}  ${css.list_content_info}`}>
                        <div className={`${css.container} ${css.text_center}`}>
                            <div className={css.content_title}>
                                <div className={css.menu_name}>아메리카노</div>
                                <div className={css.menu_cost}>3000원</div>
                            </div>
                        </div>
                    </div>
            </div>
          </div>
        </div>
        <button className={css.prevBtn} id="prevBtn" onClick={prevSlide}>
          &lt;
        </button>
        <button className={css.nextBtn} id="nextBtn" onClick={nextSlide}>
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Slider;
