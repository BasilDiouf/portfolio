import React from "react";
import linkedin from "./../../assets/icons/linkedin.png";
import github from "./../../assets/icons/github.png";

const Footer = () => {
  return (
    <div class="Footer">
      <div class="flex justify-center">
        <a
          class="p-10"
          href="https://www.linkedin.com/in/basil-diouf/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="" width="80" />
        </a>
        <a
          class="p-10"
          href="https://github.com/BasilDiouf"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="" width="80" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
