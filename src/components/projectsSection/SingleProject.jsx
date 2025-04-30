import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleProject = ({ name, year, align, image, link, summary }) => {
  // Determine row direction based on 'align' prop for medium screens and up
  const rowDirection = align === 'left' ? 'md:flex-row' : 'md:flex-row-reverse';

  return (
    <motion.div
      variants={fadeIn("top", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      // Base: flex, full width, align items (center is default, but can be explicit), add gap
      // Small screens: reverse column order
      // Medium+ screens: control row direction, justify BETWEEN items for spacing
      className={`flex w-full items-center gap-8
                  sm:flex-col-reverse
                  ${rowDirection}
                  md:justify-between`} // Keep justify-between to space the two blocks
    >
      {/* Text Content Block - REMOVED flex-1. It will shrink-wrap content. */}
      {/* Added a max-width on medium+ to prevent it getting too wide with long text */}
      <div className="md:max-w-md"> {/* You can adjust max-w-md (medium) or use specific px/rem */}
        {/* Align text center on small, force LEFT align on medium+ for readability */}
        <h2 className="md:text-3xl sm:text-2xl text-green-400 sm:text-center md:text-left font-shade">
           {name}
        </h2>
        <h2
          className="text-xl font-thin text-white font-special sm:text-center md:text-left"
        >
          {year}
        </h2>

        <p
          className="text-sm text-gray-300 mt-2 mb-4 sm:text-center md:text-left"
        >
          {summary}
        </p>

        {/* Align link content center on small, start (left) on medium+ */}
        <a
          href={link}
          className="text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer sm:justify-center md:justify-start"
        >
          View <BsFillArrowUpRightCircleFill />
        </a>
      </div>

      {/* Image Block - Keep fixed dimensions and prevent shrinking */}
      {/* Added w-full for small screens, explicit width on medium+ */}
      <div className="max-h-[220px] max-w-[400px] w-full md:w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white shrink-0">
        <div className="w-full h-full bg-cyan opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block"></div>
        <img src={image} alt={`${name} project screenshot`} className="w-full h-full object-cover" />
      </div>
    </motion.div>
  );
};

export default SingleProject;