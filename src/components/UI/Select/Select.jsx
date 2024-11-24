import React from "react";
import s from "../Select/Select.module.scss";
import { selectProduct } from "../../../data";

const Select = () => {
  return (
    <select className={s.selectContaier}>
      {selectProduct.map((el) => (
        <option key={el.id} value={el.value}>
          {el.text}
        </option>
      ))}
    </select>
  );
};

export default Select;
