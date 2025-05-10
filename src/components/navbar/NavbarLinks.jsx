import { Link } from "react-scroll";

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  return (
    <ul className="flex lg:flex-row sm:flex-col gap-6 text-[#BFA181] font-body lg:relative sm:absolute sm:top-[120%] text-center left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-[#050816]/90 backdrop-blur-lg lg:bg-[#050a30] sm:w-full py-4">
      {links.map((link, index) => {
        return (
          <li key={index} className="group">
            <Link
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              to={link.section}
              className="cursor-pointer text-[#BFA181] hover:text-cyan transition-all duration-500"
            >
              {link.link}
            </Link>
            <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
          </li>
        );
      })}
       {/* Resume external link */}
  <li className="group">
    <a
      href="https://drive.google.com/file/d/13tTqJNmw9lXh2uamHmsIlqhbUriuHCRg/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer text-[#BFA181] hover:text-cyan transition-all duration-500"
    >
      Resume
    </a>
    <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
  </li>
    </ul>
  );
};

export default NavbarLinks;
