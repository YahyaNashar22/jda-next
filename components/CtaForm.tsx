import Image from "next/image";
import React from "react";

import profile_pic from "../public/profile_pic.png";
import mail from "../public/mail.png";
import dial from "../public/dial.png";
import attach from "../public/attach.png";
import diagonal_arrow from "../public/diagonal_arrow.png";

const CtaForm = () => {
  return (
    <div className="flex flex-col items-start justify-between bg-white px-5 py-10 gap-5">
      <h1 className="text-[24px]">Interested in investments?</h1>
      <div className="flex justify-between items-start gap-3">
        <Image
          src={profile_pic}
          alt="profile"
          height={50}
          width={50}
          className="rounded-full"
        />
        <div className="flex flex-col">
          <p className="text-[16px]">Hassan Ali</p>
          <ul className="flex items-center justify-between gap-7">
            <li className="flex items-center justify-between gap-2">
              <Image src={mail} alt="mail" height={16} width={16} />
              <span className="text-[14px]">contact@jda.com</span>
            </li>
            <li className="flex items-center justify-between gap-2">
              <Image src={dial} alt="dial" height={16} width={16} />
              <span className="text-[14px]">+966 12 638 4000</span>
            </li>
          </ul>
        </div>
      </div>
      <form className="flex flex-col items-start justify-between gap-5 w-full">
        <label htmlFor="fullName" className="block w-full">
          Full Name:
          <input
            id="fullName"
            type="text"
            name="fullName"
            className="block w-full px-0 py-2 border-b-2 border-b300 focus:outline-none focus:border-indigo-500 bg-transparent"
          />
        </label>
        <div className="flex items-start justify-between gap-5">
          <label htmlFor="email" className="block w-full">
            E-mail address:
            <input
              id="email"
              type="email"
              name="email"
              className="block w-full px-0 py-2 border-b-2 border-b300 focus:outline-none focus:border-indigo-500 bg-transparent"
            />
          </label>
          <label htmlFor="phoneNumber" className="block w-full">
            Phone number:
            <input
              id="phoneNumber"
              type="text"
              name="phoneNumber"
              className="block w-full px-0 py-2 border-b-2 border-b300 focus:outline-none focus:border-indigo-500 bg-transparent"
            />
          </label>
        </div>
        <label htmlFor="message" className="block w-full">
          Message:
          <textarea
            id="message"
            name="message"
            rows={3}
            className="block w-full px-0 py-2 border-b-2 border-b300 focus:outline-none focus:border-indigo-500 bg-transparent"
          />
        </label>
        <div className="flex items-center justify-between gap-5">
          <Image src={attach} alt="attach" height={16} width={16} />
          <p className="text-[14px]">Attach a file</p>
        </div>
        <button
          className="flex items-center justify-between gap-5 px-6 py-4 bg-b200 text-[16px] text-white rounded-none hover:bg-b100 focus:outline-none transition duration-300 ease-in-out"
          type="button"
        >
          <span>Send message</span>
          <Image
            src={diagonal_arrow}
            alt="diagonal arrow"
            height={14}
            width={12}
          />
        </button>
      </form>
    </div>
  );
};

export default CtaForm;
