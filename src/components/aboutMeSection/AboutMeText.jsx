import React from 'react'
import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-[#e8c683] mb-6 font-dot"
      >About Me</h2>
      <p className='text-white text-xl'>
      I'm an undergraduate student at Delhi Technological University (formerly DCE), actively exploring the dynamic field of web development to build meaningful and user-centric digital experiences. With a strong inclination toward clean design, structured problem-solving, and continuous learning, I aim to create solutions that are not just functional, but impactful.
      </p>
      <button className="border-2 border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
