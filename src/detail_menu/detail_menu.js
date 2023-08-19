import React, { useEffect } from 'react';
import detail_menu_css from '../detail_menu/detail_menu.module.css'
import coffee_img from '../image/coffee.png'

function Detail_menu() {
  useEffect(() => {
    const modal = new window.bootstrap.Modal(document.getElementById("exampleModal"));
    modal.show();
  }, []);  

  return (
    <div className={`modal fade ${detail_menu_css.modal}`} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className={`modal-dialog modal-dialog-centered ${detail_menu_css.modalDialog}`}>
        <div className={`modal-content ${detail_menu_css.modalContent}`}>
          <div className={detail_menu_css.all_modal}>
            <div className={`modal-header ${detail_menu_css.border_line}`}>
              <h1 className={`modal-title fs-5 ${detail_menu_css.modalTitle}`} id="exampleModalLabel">상세 메뉴</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="container-fluid">
                <div className={`row ${detail_menu_css.row}`}>
                  <div className="col-6">
                    <div className={detail_menu_css.menu_img_box}>
                      <img className={detail_menu_css.menu_img_size} src={coffee_img} alt="메뉴 이미지" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className={detail_menu_css.menu_explain}>
                      <div className={detail_menu_css.menu_explain_center}>
                        <div className={`${detail_menu_css.menu_explain_content} ${detail_menu_css.menu_title}`}>
                          아메리카노
                        </div>
                        <div className={`${detail_menu_css.menu_explain_content} ${detail_menu_css.menu_cost}`}>
                          가격: 3000원
                        </div>
                        <div className={detail_menu_css.menu_explain_content}>
                          카페의 가장 기본적인 음료!
                        </div>
                        {/* ... */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`row ${detail_menu_css.row}`}>
                  <div className="col-12 ml-auto">
                    <div className={detail_menu_css.option_box}>
                      <div className={detail_menu_css.option}>
                        <div className={detail_menu_css.option_inner_bow}>
                          <p className={detail_menu_css.option_name}>
                            첫번째 옵션
                          </p>
                          <ul className={`list-group ${detail_menu_css.listGroup}`}>
                            <li className={`list-group-item ${detail_menu_css.listGroupItem}`}>
                              <input className={`form-check-input me-1 ${detail_menu_css.formCheckInput}`} type="radio" name="listGroupRadio" value="" id="firstRadio" defaultChecked />
                              <label className={`form-check-label ${detail_menu_css.formCheckLabel}`} htmlFor="firstRadio">First radio</label>
                            </li>
                            {/* ... */}
                          </ul>
                        </div>
                      </div>
                      <div className={detail_menu_css.option}>
                        <div className={detail_menu_css.option_inner_bow}>
                          <p className={detail_menu_css.option_name}>
                            두번째 옵션
                          </p>
                          <ul className={`list-group ${detail_menu_css.listGroup}`}>
                            <li className={`list-group-item ${detail_menu_css.listGroupItem}`}>
                              <input className={`form-check-input me-1 ${detail_menu_css.formCheckInput}`} type="checkbox" value="" id="firstCheckbox" />
                              <label className="form-check-label" htmlFor="firstCheckbox">First</label>
                            </li>
                            {/* ... */}
                          </ul>
                        </div>
                      </div>
                      {/* ... */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">취소</button>
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">저장</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail_menu;
