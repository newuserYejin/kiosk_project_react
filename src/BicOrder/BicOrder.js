import React, { useState } from 'react';
import Bic_css from '../BicOrder/BicOrder.module.css'
import line from '../image/line2.jpg'
import circle from '../image/circle-question.svg'
// import help_icon from '../image/helpicon.png'
import search_icon from '../image/search.png'
import SelectItem from './select_list_detail_code'
import Menu_list from './menu_list'
import { useNavigate, useLocation } from 'react-router-dom';

function BicOrder() {
    const navigation = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const order = searchParams.get('order');

    const [size, setSize] = useState("big"); // 기본 값 설정

    const itemList = [
        { name: '아메리카노', quantity: 5 },
        { name: '아메리카노', quantity: 2 },
        { name: '아메리카노', quantity: 3 },
        { name: '아메리카노', quantity: 1 },
        { name: '아메리카노', quantity: 1 },
        { name: '아메리카노', quantity: 1 },
        { name: '아메리카노', quantity: 1 },
        { name: '아메리카노', quantity: 5 }
    ]

    const handleSizeChange = (newSize) => {
        setSize(newSize);
        if (newSize === 'big') {
            navigation(`/BigOrder?order=slow`);
        } else if (newSize === 'basic') {
            navigation(`/BasicOrder?order=basic`);
        }
    };

    function openSelect(){
       
    }
    function openCheck(){
        if (order == 'slow') {
            navigation('/Checklist?order=slow');
        } else if (order == 'basic') {
            navigation('/Checklist?order=basic');
        }
    }
    function openPay(){
         if (order == 'slow') {
            navigation('/Paymethod?order=slow');
        } else if (order == 'basic') {
            navigation('/Paymethod?order=basic');
        }
    }
  
    function prvsScren() {
        if (order == 'slow') {
            navigation('/Selecteat?order=slow');
        } else if (order == 'basic') {
            navigation('/Selecteat?order=basic');
        }
    }

    function firstScreen() {
        if (order == 'slow') {
            navigation('/SelectOrder?order=slow');
        } else if (order == 'basic') {
            navigation('/SelectOrder?order=basic');
        }
    }

    function nextScreen() {
        if (order == 'slow') {
            navigation('/Checklist?order=slow');
        } else if (order == 'basic') {
            navigation('/Checklist?order=basic');
        }
    }

    return (
        <div className={Bic_css.all}>
            {/* 네비게이션 바 */}
            <div className={Bic_css.navigation}>
                <div className={Bic_css.navigation_all_box}>
                    <div className={Bic_css.box_line}>
                        <div className={Bic_css.level_button}  onClick={openSelect}>
                            <p className={Bic_css.circle_name}>메뉴 선택</p>
                            <button className={Bic_css.circle} style={{ backgroundColor: '#87ceeb' }}></button>
                        </div>
                    </div>

                    <div className={Bic_css.level_line}>
                        <p></p>
                        <img className={Bic_css.center} src={line} alt='선' />
                    </div>

                    <div className={Bic_css.box_line}>
                        <div className={Bic_css.level_button} onClick={openCheck}>
                            <p className={Bic_css.circle_name}>주문 확인</p>
                            <button className={Bic_css.circle} ></button>
                        </div>
                    </div>

                    <div className={Bic_css.level_line}>
                        <p></p>
                        <img className={Bic_css.center} src={line} alt='선' />
                    </div>

                    <div className={Bic_css.box_line}>
                        <div className={Bic_css.level_button} onClick={openPay}>
                            <p className={Bic_css.circle_name}>결제</p>
                            <button className={Bic_css.circle} ></button>
                        </div>
                    </div>

                </div>

                {/* 주문리스트 미리보기 */}
                <div className={Bic_css.select_list} onClick={() => { /* 주문리스트 미리보기 클릭 이벤트 처리 */ }}>
                    <div className={Bic_css.select_list_title}>
                        현재 주문 목록
                    </div>
                    <div className={Bic_css.select_list_list}>
                        {/* 주문 목록 세부 내용들 */}
                        {itemList.map((item, index) => (
                            <SelectItem key={index} name={item.name} quantity={item.quantity} />
                        ))}
                    </div>
                </div>
            </div>

            {/* 오른쪽 목록 */}
            <div className={`${Bic_css.box} ${Bic_css.list_menu}`}>
                <div>
                    <div className={Bic_css.list_name}>메뉴 목록</div>
                    <img className={Bic_css.help} src={circle} id="imageLink" alt="도움말" />
                    <div id="modalContainer"></div>
                </div>

                <div className={Bic_css.add_fuc_bar}>
                    <div className={Bic_css.view_button}>
                        <input type="radio" name="size" value="basic" checked={size === "basic"} onChange={() => handleSizeChange("basic")} />기본
                        <input type="radio" name="size" value="big" checked={size === "big"} onChange={() => handleSizeChange("big")} />더크게
                    </div>
                    <div className={Bic_css.search_div} id="search_div">
                        <input type="search" name="menu-search" className={Bic_css.search} />
                        <img className={Bic_css.search_icon} src={search_icon} alt="검색" />
                    </div>
                </div>

                <ul className={Bic_css.categores}>
                    <li className={Bic_css.categore}><a href="/">커피</a></li>
                    <li className={Bic_css.categore}><a href="/">음료수</a></li>
                    <li className={Bic_css.categore}><a href="/">티</a></li>
                    <li className={Bic_css.categore}><a href="/">플랫치노</a></li>
                    <li className={Bic_css.categore}><a href="/">쉐이크 & 에이드</a></li>
                    <li className={Bic_css.categore}><a href="/">디저트</a></li>
                </ul>

                <div className={`${Bic_css.box} ${Bic_css.list_box}`}>
                    <Menu_list/>
                    <Menu_list/>
                    <Menu_list/>
                    <Menu_list/>
                </div>

                {/* 고정 버튼 */}
                <div className={`${Bic_css.box} ${Bic_css.fix_button}`}>
                    <button className={Bic_css.fix_button_detail} onClick={prvsScren}>이전화면</button>
                    <button className={Bic_css.fix_button_detail} onClick={firstScreen}>처음으로</button>
                    <button className={Bic_css.fix_button_detail} onClick={nextScreen}>다음</button>
                </div>
            </div>
        </div>
    );
}

export default BicOrder;
