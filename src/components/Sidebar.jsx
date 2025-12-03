import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import { IoHome, IoPersonSharp } from "react-icons/io5";
import { GrTasks } from "react-icons/gr";
import { SiHyperskill } from "react-icons/si";
import { MdContactPhone, MdHomeRepairService } from "react-icons/md";
import { TbFileCv } from "react-icons/tb";
import { FaRobot } from "react-icons/fa";
import { a } from "motion/react-client";

const Sidebar = () => {
  const linksData = [
    {
      path: "/",
      icon: <IoHome />,
      level: <a className="md:block hidden">Home</a>,
    },
    {
      path: "/aboutme",
      icon: <IoPersonSharp />,
      level: <a className="md:block hidden">About Me</a>,
    },
    {
      path: "/projects",
      icon: <GrTasks />,
      level: <a className="md:block hidden">Projects</a>,
    },
    {
      path: "/skills",
      icon: <SiHyperskill />,
      level: <a className="md:block hidden">Skills</a>,
    },
    {
      path: "/services",
      icon: <MdHomeRepairService />,
      level: <a className="md:block hidden">Services</a>,
    },
    {
      path: "/resume",
      icon: <TbFileCv />,
      level: <a className="md:block hidden">Resume</a>,
    },
    {
      path: "/contact",
      icon: <MdContactPhone />,
      level: <a className="md:block hidden">Conctact</a>,
    },
    {
      path: "/ai",
      icon: <FaRobot />,
      level: <a className="md:block hidden">Ask AI</a>,
    },
  ];
  const linkStyle = ({ isActive }) =>
    "px-3 py-2 rounded-md font-medium transition delay-150 duration-300 ease-in-out block text-center text-[var(--color-text)] flex justify-center md:justify-start md:ml-5 ml-0 items-center gap-x-4 " +
    (isActive
      ? "bg-[var(--color-primary)]"
      : "hover:bg-[var(--color-primary)] hover:ml-0");
  return (
    <div
      style={{ fontFamily: "Science Gothic" }}
      className={`md:w-48 w-16 fixed right-0 top-0 h-full science-font bg-[var(--color-bg)] flex flex-col justify-between items-center shadow-lg t z-50`}
    >
      <div className="flex flex-col gap-y-2">
        <div className="relative hidden md:block">
          <img src="UhaiMongProfilePicture.jpg" alt="Uhai Mong Profile Image" />
          <h1 className="text-2xl font-bold text-center text-white absolute bg-[var(--color-primary)] w-full -mt-8">
            Uhai Mong
          </h1>
        </div>
        {linksData.map((link) => (
          <NavLink key={link.level} className={linkStyle} to={link.path}>
            {link.icon}
            {link.level}
          </NavLink>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Sidebar;
