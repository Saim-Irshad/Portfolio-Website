import React from "react";
import Section from "./Section";
import { AiFillThunderbolt } from "react-icons/ai";
import Image from "next/image";
import { profileImg, cyberImg } from "../public/assets";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <Section title="About Me" titleNo="01" />
      <div className="m-10 flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            I'm Saim Irshad, <span className="text-textGreen">
            Computer Science graduate | Web Developer | UI/UX
            Designer.
            </span>{" "} I specialize in helping brands succeed in the digital era
            with innovative strategies.{" "}
            <span className="text-textGreen">
              Together, we'll set a new status quo and showcase your unique
              voice.
            </span>{" "}
            Whether you need a website, ui design or ux research plan, I'm here
            to help. With my expertise, your brand will stand out and stay ahead
            of the game.
          </p>
          <p>
          My passion for problem-solving and client satisfaction is what drives me. By working closely with you and understanding your unique vision, I ensure that every project is delivered to exceed your expectations.
          </p>
          <p>  
              I am confident that my skills, combined with my commitment to excellence, make me the perfect choice for your web development and design needs. 
          </p>
          <p>Here are few technologies I have been working with recently:</p>
          <ul className="max-2-[450px] text-sm font-titleFont grid grid-cols-2 mt-6 gap-2">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Next JS
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              TypeScript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              React
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              JavaScript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              TailwindCSS
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Figma
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              AdobeXD
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              FramerMotion
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0 ">
              <Image
                className=" rounded-lg h-full object-cover scale-105 group-hover:scale-100 duration-500"
                src={cyberImg}
                alt="profileImg"
              />             
              <div className="hidden lgl:inline-block scale-105  absolute w-full h-80 bg-hoverColor/10 rounded-md top-0 left-0 group hover:bg-transparent duration-300 "></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex absolute p-2 m-3 w-full h-80 border border-textGreen rounded-md group-hover:-translate-y-2 group-hover:-translate-x-2 transition-transform duration-300 "></div>
        </div>
      </div>
    </section>
  );
};

export default About;
