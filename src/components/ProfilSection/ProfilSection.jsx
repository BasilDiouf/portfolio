/* eslint-disable react/no-unescaped-entities */
import React from "react";
import photo from "./../../assets/img/photo-profil-bw.jpg";
import { Link } from "react-scroll";

const ProfilSection = () => {
  return (
    <div>
      <div class=" lg:grid grid-cols-5 gap-8 place-items-center text-center mb-60">
        <div class="col-span-3"></div>
        <div class="h-80 w-px bg-white hidden lg:block"></div>
        <img
          class="lg:-translate-y-10 lg:-translate-x-0 mt-10 lg:m-0 m-auto"
          style={{
            width: 250,
            height: 250,
            //Below lines will help to set the border radius
            overflow: "hidden",
            opacity: "0.85",
          }}
          src={photo}
          alt=""
          width={500}
        />
      </div>
      <aside class="pr-10">
        <p class="flex justify-end text-2xl font-sans text-color-title ">
          Open to Work!
        </p>
        <div class="w-1/10 flex justify-end">
          <Link
            class=" text-2xl font-sans text-color-title underline hover:text-[#f04444] cursor-pointer"
            to="contact"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            Parlons-en
          </Link>
        </div>
      </aside>
      <h2 class="font-sans text-5xl font-black p-5">QUI JE SUIS ?</h2>
      <p class="text-lg font-poppins text-color-title lg:w-2/5 sm:4/5 p-5 mb-20">
        Je m'appelle Basil et je suis developpeur Front-end junior. J'ai suivi
        le DWWM chez O-clock spécialisation React. Aujourd'hui je continue à me
        former en codant, codant et codant. Nous continuons à travailler sur
        notre projet d'apothéose et ainsi qu'un autre sur nextjs avec un ami
        developpeur Back-end (Node.js). Je suis en recherche active d'un job et
        préssé d'intégrer une nouvelle équipe! N'hésitez pas à me contacter ! À
        bientôt !
      </p>
    </div>
  );
};

export default ProfilSection;
