import React from "react";
import s from "../Footer/Footer.module.scss";
import { FiFacebook } from "react-icons/fi";
import { SiInstagram } from "react-icons/si";
import { TbBrandTiktok } from "react-icons/tb";
import { AiOutlinePhone } from "react-icons/ai";

const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.socialMedia}>
        <p>Social media</p>
        <div className={s.media}>
          <FiFacebook />
          <SiInstagram />
          <TbBrandTiktok />
        </div>
      </div>

      <div className={s.contacts}>
        <h3>Skontaktuj się z nami</h3>
        <div className={s.phoneNumber}>
          {" "}
          <AiOutlinePhone /> (+48) 48 623 18 02
        </div>
        <p>
          Jesteśmy do Twojej dyspozycji od poniedziałku do piątku w godzinach
          8:00 - 16:00
        </p>
      </div>
    </div>
  );
};

export default Footer;
