import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    alert("Votre mail à bien été envoyé!");

    emailjs
      .sendForm(
        "service_93lhu2a",
        "template_bgb7wtq",
        form.current,
        "UL-LsvPbdIKpYEJ8z"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div>
      <h2 class="font-sans text-center font-black text-2xl md:text-4xl mt-10">
        CONTACT
      </h2>
      <form
        id="contact"
        ref={form}
        onSubmit={sendEmail}
        class="grid grid-cols-4 gap-6 items-stretch mt-10 text-black font-sans"
      >
        <input
          class="rounded-md p-2 h-10 col-span-4 col-start-2 lg:w-1/5 w-3/5"
          type="text"
          placeholder="Entrez votre nom"
          name="user_name"
        />{" "}
        <input
          class="rounded-md p-2 h-10 col-span-4 col-start-2 lg:w-1/5 w-3/5"
          type="email"
          placeholder="Entrez votre Email"
          name="user_email"
          // value=""
          // onChange={handleChange}
          required
        />{" "}
        <textarea
          class="rounded p-2 col-span-2 lg:col-span-2 lg:col-start-2 col-start-2"
          rows="8"
          cols="200"
          placeholder="Entrez votre message"
          name="message"
          //   onChange={handleChange}
        />
        <button
          class="rounded-md text-xl md:text-2xl p-3 bg-[#f04444] w-4/5 self-end text-white lg:row-start row-start-4 col-start-2"
          type="submit "
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
