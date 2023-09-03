import React from 'react';
import Bic_css from '../BicOrder/BicOrder.module.css'

const SelectItem = ({ name, quantity }) => {
  return (
    <div className={Bic_css.select_list_detail}>
      <div className={Bic_css.select_name}>
        {name}
      </div>
      <div className={Bic_css.select_num}>
        {quantity}개
      </div>
    </div>
  );
};

export default SelectItem;