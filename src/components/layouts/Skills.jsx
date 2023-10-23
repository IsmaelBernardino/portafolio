import React from "react";

const Skills = ({ skill, icon }) => {
  return (
    <div className="text-center">
      <div className="bg-white rounded-full w-28 h-28 sm:w-20 sm:h-20 flex justify-center items-center">
        <img
          src={icon}
          className="w-8/12"
          alt="logo"
        />
      </div>
      <p className="mt-2 font-semibold">{skill}</p>
    </div>
  );
};

export default Skills;
