import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import footerLogo from "../../assets/food-logo.png";
import { FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  const handlePhoneLinkClick = () => {
    window.location.href = `tel:${7800004405}`;
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-950">
      <section className="max-w-[1200px] mx-auto">
        <div className=" grid md:grid-cols-3 py-5">
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="Logo" className="max-w-[50px]" />
              छप्पन भोग
            </h1>
            <p className="">
            We are conveniently situated near the Bharat Petrol Pump. We would be grateful for the opportunity to serve you and provide the finest quality food. </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Maniyara, Khalilabad (272175) Uttar Pradesh</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+91 7800004405</p>
            </div>
            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6">
              <a href="https://www.instagram.com/chhappan_bhoog.007/">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100023850500630&mibextid=ZbWKwL">
                <FaFacebook className="text-3xl" />
              </a>
              <button  onClick={handlePhoneLinkClick}>
                <FaWhatsapp className="text-3xl" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  <a href="#" className="cursor-pointer">Home</a>
                  <a href="/#about" className="cursor-pointer">About</a>
                  <a href="/#services" className="cursor-pointer">Services</a>
                  {/* <li className="cursor-pointer">Login</li> */}
                </ul>
              </div>
            </div>
            
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                {/* <ul className="list-disc list-inside"> */}
                <ul className="flex flex-col gap-3">
                  <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="https://www.instagram.com/chhappan_bhoog.007/" >Instagram</a>
                  <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="https://www.facebook.com/profile.php?id=100023850500630&mibextid=ZbWKwL" >Facebook</a>
                  <li onClick={handlePhoneLinkClick} className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer">Whatsapp</li>
                  {/* <li className="cursor-pointer">Login</li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center py-10 border-t-2 border-gray-300/50"  style={{fontSize:13}}>
            @copyright 2024 All rights reserved | Developer <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="https://www.instagram.com/_the.satya/">Satya Mishra </a> <br/>
            <p style={{fontSize:12}}>Template <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="https://www.youtube.com/@TheCodingJourney">The Coding Journey</a>
          </p>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
