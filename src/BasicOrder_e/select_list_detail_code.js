import React from 'react';
import css from '../BasicOrder/BasicOrder.module.css'

const SelectItem = ({ name, quantity }) => {
  return (
    <div className={css.select_list_detail}>
      <div className={css.select_name}>
        {name}
      </div>
      <div className={css.select_num}>
        {quantity}개
      </div>
    </div>
  );
};

export default SelectItem;