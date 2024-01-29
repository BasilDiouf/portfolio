import React from "react";
import banner from "./../../assets/img/Melodica bannière.png";
import memories from "./../../assets/img/memories-screen.png";

const Card = () => {
  return (
    <div class=" md:flex md:justify-around box-content">
      <div class="flex rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-black m-auto mb-10 md:mb-0 md:p-0  flex-wrap justify-around">
        <div class=" w-2/5 mb-5">
          <a
            target="_blank"
            href="https://oclock.io/formations/developpeur-web"
            rel="noreferrer"
          >
            <img
              class="rounded-t-lg mb-20 "
              src="https://images.wizbii.com/file/v1/w24mivl4s9gd6wvxlclnkrog2ww0d1nj.png"
              alt=""
            />
          </a>
          <div>
            <h5 class="mb-3 text-2xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              École O'clock : <span class="italic">Formation DWWM</span>
            </h5>
            <p class="mb-4 lg:text-lg text-neutral-600 dark:text-neutral-200">
              2023 - Formation DWWM avec l'école O'clock. Une super aventure!
              Nous nous sommes formés en HTML, CSS, PHP, JS pendant 4 mois puis
              un mois de spécialisation avec REACT et le Front pour ma part! Le
              dernier mois comprenait l'apothéose, un projet mené en équipe.
              Dernière étape, obtenir mon diplôme en janvier à Paris.
            </p>
            <a
              target="_blank"
              href="https://oclock.io/formations/developpeur-web"
              rel="noreferrer"
            >
              <button
                type="button"
                class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                En Savoir Plus
              </button>
            </a>
          </div>
        </div>

        <div class=" w-2/5 mb-5">
          <a href="#!">
            <img class="rounded-t-lg" src={banner} alt="" />
          </a>
          <div class="p-6">
            <h5 class="mb-3 text-2xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              MÉLODICA : <span class="italic">Projet d'apothéose O'clock</span>
            </h5>
            <p class="mb-4 lg:text-lg  text-neutral-600 dark:text-neutral-200">
              Durant le dernier mois de formation, nous devions développer un
              projet de A à Z en équipe. Mélodica, Une application pour
              faciliter le lien et le contact entre artistes et organisateurs
              d'évènements! Projet toujours en cours de développement.
            </p>
            <p
              class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white "
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              En Savoir Plus Bientôt!
            </p>
          </div>
        </div>

        <div class=" w-2/5 mb-5">
          <a href="#!">
            <img class="rounded-t-lg" src={memories} alt="" />
          </a>
          <div class="p-6">
            <h5 class="mb-3 text-2xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              MEMORIES : <span class="italic">Projet personnel memories</span>
            </h5>
            <p class="mb-4 lg:text-lg  text-neutral-600 dark:text-neutral-200">
              Premier projet personnel sur une idée originiale. Memories propose
              aux utilisateurs d'entrer leur "MOOD" du moment afin de le
              partager avec les autres. Les "MOOD" seront enregistrés sur leur
              comptes et formeront une sorte de frise chronologiques. Le projets
              est encore en cours. Codé en React et NodeJS, Epress et Sequelize.
            </p>
            <p
              class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white "
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              En Savoir Plus Bientôt!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
