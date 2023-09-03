import React, { useState }from "react";
import css from '../BasicOrder/BasicOrder.module.css'
import search_icon from '../image/search.png'
import line from '../image/line2.jpg';
import circle from '../image/circle-question.svg'
import helpImage from '../image/circle-question.svg';
import SelectItem from './select_list_detail_code'

import { useNavigate, useLocation } from 'react-router-dom';
import Menulist from './menu_list'

function App(){
    
    const navigation = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const order = searchParams.get('order');

    const [size, setSize] = useState("basic"); // 기본 값 설정
    const handleSizeChange = (newSize) => {
        setSize(newSize);
        if (newSize === 'big') {
            navigation(`/BigOrder?order=slow`);
        } else if (newSize === 'basic') {
            navigation(`/BasicOrder?order=basic`);
        }
    };

   
    const itemList = [
        { name: 'Americano', quantity: 5 },
        { name: 'Americano', quantity: 2 },
        { name: 'Americano', quantity: 3 },
        { name: 'Americano', quantity: 1 },
        { name: 'Americano', quantity: 1 },
        { name: 'Americano', quantity: 1 },
        { name: 'Americano', quantity: 1 },
        { name: 'Americano', quantity: 5 }
    ]
    function openSelect(){
       
    }
    function openCheck(){
        if (order == 'slow') {
            navigation('/Checklist_e?order=slow');
        } else if (order == 'basic') {
            navigation('/Checklist_e?order=basic');
        }
    }
    function openPay(){
        if (order == 'slow') {
            navigation('/Paymethod_e?order=slow');
        } else if (order == 'basic') {
            navigation('/Paymethod_e?order=basic');
        }
    }
    function prvsScren() {
        if (order == 'slow') {
            navigation('/Selecteat_e?order=slow');
        } else if (order == 'basic') {
            navigation('/Selecteat_e?order=basic');
        }
    }

    function firstScreen() {
        if (order == 'slow') {
            navigation('/SelectOrder_e?order=slow');
        } else if (order == 'basic') {
            navigation('/SelectOrder_e?order=basic');
        }
    }

    function nextScreen() {
        if (order == 'slow') {
            navigation('/Checklist_e?order=slow');
        } else if (order == 'basic') {
            navigation('/Checklist_e?order=basic');
        }
    }
    return (
        <div className ={css.all}>
            <div className={css.navigation}>
                <div className={css.navigation_all_box}>
                    <div className={css.box_line}>
                        <div onClick={openSelect} className={css.level_button}>
                            <p className={css.circle_name}>Select menu</p>
                            <button className={css.circle} style={{ backgroundColor: '#87ceeb' }}></button>
                        </div>
                    </div>

                    <div className={css.level_line}>
                        <p></p>
                        <img src={line} className={css.center}/>
                    </div>

                    <div className={css.box_line}>
                        <div onClick={openCheck} className={css.level_button}>
                            <p className={css.circle_name}>order confirmation</p>
                            <button className={css.circle}></button>
                        </div>
                    </div>

                    <div className={css.level_line}>
                        <p></p>
                        <img src={line} className={css.center}/>
                    </div>

                    <div className={css.box_line}>
                        <div onClick={openPay} className={css.level_button}>
                            <p className={css.circle_name}>Pay</p>
                            <button className={css.circle} ></button>
                        </div>
                    </div>
                </div>
                {/* 주문리스트 미리보기 */}
                <div className={css.select_list} onClick={() => { /* 주문리스트 미리보기 클릭 이벤트 처리 */ }}>
                    <div className={css.select_list_title}>
                        Current Order List
                    </div>
                    <div className={css.select_list_list}>
                        {/* 주문 목록 세부 내용들 */}
                        {itemList.map((item, index) => (
                            <SelectItem key={index} name={item.name} quantity={item.quantity} />
                        ))}
                    </div>
                </div>
            </div> 
            {/* 오른쪽 목록 */}
            <div className={`${css.box} ${css.list_menu}`}>
                <div>
                    <div className={css.list_name}>Order List</div>
                    <img className={css.help} src={circle} id="imageLink" alt="도움말" />
                    <div id="modalContainer"></div>
                </div>

                <div className={css.add_fuc_bar}>
                    <div className={css.view_button}>
                        <input type="radio" name="size" value="basic" checked={size === "basic"} onChange={()=> handleSizeChange("basic")}/>Basic
                        <input type="radio" name="size" value="big" checked={size === "big"} onChange={()=> handleSizeChange("big")} />Bigger
                    </div>
                    <div className={css.search_div} id="search_div">
                        <input type="search" name="menu-search" className={css.search} />
                        <img className={css.search_icon} src={search_icon} alt="검색" />
                    </div>
                </div>

                <ul className={css.categores}>
                    <li className={css.categore}><a href="/">Coffee</a></li>
                    <li className={css.categore}><a href="/">Beverage</a></li>
                    <li className={css.categore}><a href="/">Blending tea</a></li>
                    <li className={css.categore}><a href="/">flatccino</a></li>
                    <li className={css.categore}><a href="/">Shake & Ade</a></li>
                    <li className={css.categore}><a href="/">Dessert</a></li>
                </ul>

                <div className={`${css.box} ${css.list_box}`}>
                    <Menulist />
                    
                </div>

                {/* 고정 버튼 */}
                <div className={`${css.box} ${css.fix_button}`}>
                    <button className={css.fix_button_detail} onClick={prvsScren}>Previous screen</button>
                    <button className={css.fix_button_detail} onClick={firstScreen}>First screen</button>
                    <button className={css.fix_button_detail} onClick={nextScreen}>Next screen</button>
                </div>
            </div>


        </div>
    );
};
export default App;