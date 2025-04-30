import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Chat Web App",
    year: "Mar 2025",
    align: "right",
    image: "../../public/images/website-img-1.jpg",
    link: "#",
    // --- ADD SUMMARY HERE ---
    summary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti impedit ipsa necessitatibus aspernatur deserunt vero itaque amet natus illo facere.",
  },
  {
    name: "URL Shortner",
    year: "Mar 2025",
    align: "left",
    image: "../../public/images/website-img-2.webp",
    link: "#",
    // --- ADD SUMMARY HERE ---
    summary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti impedit ipsa necessitatibus aspernatur deserunt vero itaque amet natus illo facere.",
  },
  {
    name: "AI ChatApp",
    year: "Mar 2025",
    align: "right",
    image: "../../public/images/website-img-3.jpg",
    link: "#",
    // --- ADD SUMMARY HERE ---
    summary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti impedit ipsa necessitatibus aspernatur deserunt vero itaque amet natus illo facere.",
  },

];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link} // Make sure link is passed if you use it
              // --- PASS SUMMARY PROP ---
              summary={project.summary}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;