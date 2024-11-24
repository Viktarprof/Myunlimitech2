import React from "react";
import s from "./Discount.module.scss";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import { GoArrowUpRight } from "react-icons/go";

const Discount = () => {
  return (
    <div className={s.discountContainer}>
      <div className={s.newsLeter}>
        <div className={s.leterImg}> </div>
        <div className={s.textLeter}>
          <h2>CHCESZ OTRZYMAĆ 5% ZNIŻKI NA SWOJE ZAKUPY?</h2>
          <p>
            Zapisz się do naszego newslettera i jako pierwsza dowiedz się o
            nowościach,promocjach i ofertach specjalnych!
          </p>
        </div>
      </div>
      <div>
        <div className={s.inputEmailContainer}>
          <Input
            placeholder={"Twój adres email"}
            type={"email"}
            styles={"inputEmail"}
            name={"emailAdres"}
          />
          <Button 
            styles={'emailButton'} 
            text={<GoArrowUpRight/>}/>
        </div>
        <div className={s.containerAccept}>
          <Input styles={"inputCheckBox"} type={"checkbox"} />
          <p>
            Akceptuję <span className={s.akceptRuls}>Regulamin</span> i{" "}
            <span className={s.akceptRuls}>Politykę Prywatności.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Discount;
