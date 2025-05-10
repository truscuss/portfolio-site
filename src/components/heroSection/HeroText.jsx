import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-4xl sm:text-xl font-shade font bold uppercase text-white "
      >
        Full Stack Developer
      </motion.h2>
      {/* <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase"
      >
        Hi, I am <br className="sm:hidden md:block" />
        Shivam
      </motion.h1> */}

<motion.h1
  variants={fadeIn("right", 0.4)}
  initial="hidden"
  whileInView="show"
  viewport={{ once: false, amount: 0 }}
  className="md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold text-orange"
>
  <span
    className="text-4xl sm:text-5xl md:text-6xl font-fancy"
    // style={{ fontFamily: "Cambria" }}
  >
    Hi, I am
  </span>
  <br className="my-2" />
  <span
    className="text-5xl sm:text-6xl md:text-8xl text-[#3B82F6] font-fancy"
    // style={{ fontFamily: "Georgia", color: "#3B82F6" }}
  >
    Shivam
  </span>
</motion.h1>

      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4 font-dot font-bold"
      >
        A Passionate Web Development Enthusiast with a love <br />for problem-solving, and continuous learning, exploring the world of code.
      </motion.p>
    </div>
  );
};

export default HeroText;
