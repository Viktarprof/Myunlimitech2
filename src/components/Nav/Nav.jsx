import React from "react";
import s from "../Nav/Nav.module.scss";
import mainLogo from "../../media/MainLogo.png";
import Select from "../UI/Select/Select";
import { navName } from "../../data";
import Input from "../UI/Input/Input";
import { TfiSearch } from "react-icons/tfi";
import { BiUser, BiHeart } from "react-icons/bi";
import { PiHandbag } from "react-icons/pi";

const Nav = () => {
  const openAlert = () => {
    alert("Page Under Construction!");
  };

  return (
    <div className={s.navContainer}>
      <img className={s.logoComapny} src={mainLogo} alt="logoCompany" />
      <ul className={s.navBTN}>
        <Select />
        {navName.map((el) => (
          <li key={el.id} onClick={openAlert}>
            {el.text}
          </li>
        ))}
      </ul>
      <div className={s.userPanel}>
        <Input
          styles={"navInput"}
          name={"product"}
          type={"text"}
          placeholder={"Wyszukaj"}
          icon={<TfiSearch />}
        />
        <div className={s.iconWrapper}>
          <BiUser />
        </div>
        <div className={s.iconWrapper}>
          <BiHeart />
        </div>
        <div className={s.iconWrapper}>
          <PiHandbag />
        </div>
      </div>
    </div>
  );
};

export default Nav;
