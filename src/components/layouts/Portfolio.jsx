import React, { useRef, useState, useEffect } from "react";
import { images } from "./Images";
import { motion } from "framer-motion";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

const Portfolio = () => {
  const [width, setWidth] = useState(0);
  const Slider = useRef();

  useEffect(() => {
    setWidth(Slider.current.scrollWidth - Slider.current.offsetWidth);
  }, []);

  return (
    <motion.div
      ref={Slider}
      className="cursor-grab overflow-hidden max-w-md md:max-w-2xl mt-10 p-3 sm:mx-auto"
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="flex gap-3"
      >
        {images.map((image) => {
          return (
            <motion.div
              style={{ backgroundImage: `url(${image.url})` }}
              className="min-w-[95%] md:min-w-[75%] h-[300px] bg-white rounded-3xl overflow-hidden bg-center bg-cover bg-no-repeat group relative transition-all ease-in-out"
              key={image.key}
            >
              <div className="absolute w-full bottom-0 right-0 p-4 text-cyan-500 text-3xl cursor-pointer bg-gradient-to-t from-black">
                <div className="flex justify-between">
                  <p className="text-2xl">{image.name}</p>
                  <div className="flex gap-3">
                    <a href={image.git} target="_blank" rel="noreferrer">
                      <AiFillGithub className="hover:scale-110 transition-all ease-in-out" />
                    </a>
                    {image.gitlink !== "" ? (
                      <a href={image.gitlink} target="_blank" rel="noreferrer">
                        <AiOutlineLink className="hover:scale-125 transition-all ease-in-out" />
                      </a>
                    ) : null}
                  </div>
                </div>
                <p className="hidden group-hover:block text-base mt-2 text-gray-300">{image.description}</p>
              </div>
              {/* <img src={image.url} alt="proyect" className="h-full" /> */}
              {/* <div className="w-full min-h-[150px] max-h-[150px] rounded-3xl pointer-events-none overflow-hidden">
              </div> */}
              {/* <div className="w-full p-4 text-white">
                <p className="font-semibold">{image.name}</p>
                <p className="mb-5 text-slate-400 ">{image.description}</p>
                <a
                  href={image.git}
                  target="_blank"
                  rel="noreferrer"
                  className="border-2 border-solid border-cyan-500 rounded-lg p-2 text-cyan-500 mr-4"
                >
                  Github
                </a>
                {image.gitlink !== "" ? (
                  <a
                    href={image.gitlink}
                    target="_blank"
                    rel="noreferrer"
                    className="border-2 border-solid border-cyan-500 rounded-lg p-2 text-cyan-500"
                  >
                    Live demo
                  </a>
                ) : null}
              </div> */}
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Portfolio;
