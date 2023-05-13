import React from "react";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiFillLinkedin,
  AiFillGithub
} from "react-icons/Ai";
const Footer = () => {
  return (
    <div className="flex justify-center items-center flex-col my-5">
      <div className="iconHolder flex gap-2">
        <a href="https://github.com/boooocchi" target="_blank">
          <AiFillGithub color="#21272b" className="text-[2rem]" />
        </a>
        <a
          href="https://www.linkedin.com/in/kota-ito-%EF%BC%A0041212/"
          target="_blank"
        >
          <AiFillLinkedin color="#21272b" className="text-[2rem]" />
        </a>
        <a href="https://www.instagram.com/boooocchi/" target="_blank">
          <AiFillInstagram color="#21272b" className="text-[2rem]" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCnqG6PkVW6V_gC3TCb80COg"
          target="_blank"
        >
          <AiFillYoutube color="#21272b" className="text-[2rem]" />
        </a>
      </div>
      <div className="mt-3">
        <p>© 2023 Kota Ito</p>
      </div>
    </div>
  );
};

export default Footer;
