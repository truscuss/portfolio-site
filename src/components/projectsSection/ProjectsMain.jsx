import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Whisprr",
    year: "Mar 2025",
    align: "right",
    image: "/images/chatApp.png",
    link: "https://whisprr.onrender.com/",
    // --- ADD SUMMARY HERE ---
    summary: "Created a chat application using the MERN stack and Socket.IO for real-time messaging. Features include real-time messaging and online/offline status, media sharing, profile picture upload, emoji reactions, unread message count, 32-themes to choose from and secure login with JWT."
  },
  {
    name: "URL Shortner",
    year: "Mar 2025",
    align: "left",
    image: "/images/website-img-2.webp",
    link: "#",
    // --- ADD SUMMARY HERE ---
    summary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti impedit ipsa necessitatibus aspernatur deserunt vero itaque amet natus illo facere.",
  },
  // {
  //   name: "AI ChatApp",
  //   year: "Mar 2025",
  //   align: "right",
  //   image: "/images/website-img-3.jpg",
  //   link: "#",
  //   // --- ADD SUMMARY HERE ---
  //   summary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti impedit ipsa necessitatibus aspernatur deserunt vero itaque amet natus illo facere.",
  // },

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