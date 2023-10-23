import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FiHome, FiCode, FiGrid, FiSend } from "react-icons/fi";

function Header() {
  return (
    <>
      <motion.div
        className="fixed left-0 bottom-2 w-full h-16 flex justify-center items-center z-50"
        initial={{ y: 500 }}
        animate={{ y: 0 }}
        transition={{ duration: 3 }}
      >
        <div className="relative w-full sm:w-[400px] flex justify-evenly items-center">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            activeClass="active"
            className="flex flex-col items-center cursor-pointer z-10"
          >
            <FiHome className="icon" />
            <p className="text-slate-400">Home</p>
          </Link>
          <Link
            to="skill"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            activeClass="active"
            className="flex flex-col items-center cursor-pointer z-10"
          >
            <FiCode className="icon" />
            <p className="text-slate-400">Skills</p>
          </Link>
          <Link
            to="proyect"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            activeClass="active"
            className="flex flex-col items-center cursor-pointer z-10"
          >
            <FiGrid className="icon" />
            <p className="text-slate-400">Proyects</p>
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            activeClass="active"
            className="flex flex-col items-center cursor-pointer z-10"
          >
            <FiSend className="icon" />
            <p className="text-slate-400">Contact</p>
          </Link>
          <div className="absolute w-11/12 sm:w-[400px] h-16 rounded-full backdrop-blur-2xl"></div>
        </div>
      </motion.div>
    </>
  );
}

export default Header;
