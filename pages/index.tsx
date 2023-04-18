import Head from "next/head";
import Navbar from "../components/Navbar";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/works/Projects";
import Sada from "../components/works/Sada";
import Contact from "../components/works/Contact";
import Contact2 from "../components/Contact2";
import Footer from "../components/works/Footer";
import Testimonial from "../components/Testimonial";
import ImageScroll from "../components/ImageScroll";
import "slick-carousel/slick/slick.css";
import ScrollBtn from "../components/ScrollBtn";

export default function Home() {
  return (
    <>
      <Head>
        <title>Design With Saim</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/LOGO WHITE.pdf" />
      </Head>
      <main className="w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll scrollbar-track-textDark/20 scrollbar scrollbar-thumb-textDark/60">
        {/* home section */}
        {/* Navbar */}
        <Navbar />
        <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
          {/* three sections */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="hidden lgl:inline-flex w-32 h-full fixed left-0 bottom-0"
          >
            <LeftSide />
          </motion.div>
          {/* xl:flex items-center gap-20 justify-between" */}
          <div className="h-[88vh] w-full mx-auto p-4">
            <Hero />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.2 }}
            className="hidden lgl:inline-flex w-32 h-full fixed right-0 bottom-0 "
          >
            <RightSide />
          </motion.div>
          {/* About section */}
          <About />
          {/* Experience section */}
          <Experience />
          {/* Projects section */}
          <Sada />
          {/* Archive section */}
          <Projects />
          {/* contact section */}
          <Testimonial />
          {/* <Contact/> */}
          <Contact2 />
          {/* footer section */}
          {/* <Footer/> */}
        </div>
      </main>
    </>
  );
}
