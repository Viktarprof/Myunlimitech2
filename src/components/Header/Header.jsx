import React from "react";
import s from "../Header/Header.module.scss";
import { topBatInfo } from "../../data";

const Header = () => {
  return (
    <div className={s.topBarContainer}>
      {topBatInfo.map((el) => (
        <div className={s.itemInfo} key={el.id}>
          {el.isIcon ? el.logo : <img src={el.logo} alt={el.altText} />}
          <p>
            {el.text.charAt(0).toUpperCase() + el.text.slice(1).toLowerCase()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Header;
