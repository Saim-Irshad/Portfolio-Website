import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMap, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { TbBrandGithub } from "react-icons/tb";
import { SlSocialYoutube } from "react-icons/sl";
import {
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
} from "react-icons/sl";
import Footer from '../components/works/Footer';

const Contact2 = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault(e);
    if (username === "") {
      setErrMsg("Enter your Name");
    } else if (email === "") {
      setErrMsg("Enter your Email");
    } else if (message === "") {
      setErrMsg("Enter your Messages");
    } else {
      setSuccessMsg(
        `Hello dear ${username}, Thank you for your Messages. Additional Information will send to you shortly via your email at ${email}`
      );
    }
  };

  return (
    <section
      id="contact"
      className="mt-8 max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <p className="font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide">
        04. What's Next?
      </p>
      <h2 className="font-titleFont text-5xl font-semibold">Get In Touch</h2>
      <p className="max-w-[600px] text-center text-textDark">
      "Let's turn your website vision into reality - fill out the contact form and let's create something amazing together!"
      </p>
      <p className="max-w-[600px] text-center text-textDark">
       Whether you have a question or just want to say hi, I'll
        try my best to get back to you!
      </p>
      
      <div className="bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 w-[50%] h-full py-5">
        <div className="max-w-2xl h-full mx-auto flex flex-col gap-6 md:gap-12">
          {/* <h1 className="text-4xl font-bold tracking-widest text-center">
            Lets Connect!
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col items-center gap-3">
              <FaMap className="text-3xl text-designColor" />
              <p className="text-sm tracking-wide">Karachi, Pakistan</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <FaPhoneAlt className="text-3xl text-designColor" />
              <p className="text-sm tracking-wide">+92 345 2409822</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <FaEnvelope className="text-3xl text-designColor" />
              <p className="text-sm tracking-wide">bakarspvts@gmail.com</p>
            </div>
          </div> */}

          {successMsg ? (
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, type: "easeIn" }}
              className="max-w-[600px] h-full text-center flex justify-center items-center mx-auto text-lg font-semibold px-4"
            >
              {successMsg}
            </motion.p>
          ) : (
            <form className="w-full flex flex-col items-center gap-4 md:gap-10">
              <div className="w-full flex flex-col md:flex-row items-center gap-4 md:gap-10">
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-[#5a5a5a] backdrop-blur-sm bg-opacity-30 rounded-md w-full md:w-1/2 py-2 px-4 text-base text-white placeholder:text-gray-400 font-medium placeholder:font-normal outline-none border-transparent border-2 focus-within:border-textGreen duration-200"
                  type="text"
                  placeholder="Name"
                />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#5a5a5a] backdrop-blur-sm bg-opacity-30 rounded-md w-full md:w-1/2 py-2 px-4 text-base text-white placeholder:text-gray-400 font-medium placeholder:font-normal outline-none border-transparent border-2 focus-within:border-textGreen duration-200"
                  type="text"
                  placeholder="Email"
                />
              </div>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
                className=" bg-[#5a5a5a] backdrop-blur-sm bg-opacity-30 rounded-md w-full text-base h-36 p-4 text-white placeholder:text-gray-400 font-medium placeholder:font-normal outline-none border-transparent border-2 focus-within:border-textGreen duration-200 resize-none"
              ></textarea>
              {errMsg && (
                <p className="w-full bg-red-500 py-1 text-center text-base font-semibold tracking-wider bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70">
                  {errMsg}
                </p>
              )}
              <button
                onClick={handleSubmit}
                className="w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300"
              >
                Submit Now
              </button>
            </form>
          )}
          {/* <div className="bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 rounded-md w-full py-10 bg-[#5a5a5a] flex flex-col md:flex-row px-4 md:items-center justify-between">
            <div className="text-lg font-thin">
              <p>For project enquries</p>
              <p>
                or say 'Hello' -{" "}
                <span className="font-semibold text-designColor">
                  bakarspvt@gmail.com
                </span>
              </p>
            </div>
            <a href="https://reactbd.com/" target="_blank">
              <p>© 2023 saimirshad reserved.</p>
            </a>
          </div> */}
            <a href="https://github.com/Saim-Irshad" target = "_blank"><p className="max-w-[600px] text-xs text-center text-textDark hover:text-textGreen">
        Designed and Developed by Saim Irshad 
      </p></a>
        </div>
      <Footer/>
      </div>
    </section>
  );
};

export default Contact2;
