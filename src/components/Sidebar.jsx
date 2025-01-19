import React, { useRef, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";

const Sidebar = ({ projectname, componentname, listItem }) => {
  const menu = useRef(null);
  const [toggle, setToggle] = useState(true);

  function handleComponent(index) {
    listItem(index);
    componentname("project details");
  }

  function createProject() {
    componentname("create project");
  }

  const projectList = projectname.map((values, index) => {
    return (
      <li
        className="text-blue-500 text-lg w-full p-3 mb-2 rounded-sm cursor-pointer"
        key={index + values}
        onClick={() => handleComponent(index)}
      >
        {values}
      </li>
    );
  });

  function toggleMenu() {
    setToggle((prev) => !prev);
  }

  return (
    <div className="navbar md:w-1/2 lg:w-1/3">
      <div
        ref={menu}
        className={`sidebar rounded-tr-3xl bg-black fixed left-0 top-0 p-8 flex flex-col gap-10 justify-start items-start h-screen w-3/4 md:w-1/3  lg:w-1/4 ${
          toggle && "toggle"
        }`}
      >
        <p className="text-xl font-semibold lg:text-4xl">Your Projects</p>
        <button className="flex items-center gap-2" onClick={createProject}>
          <CiCirclePlus size={25} /> Add Project
        </button>
        <div className="project-list w-full">
          <h1 className="text-xl font-medium tracking-wider border-b-2  border-gray-700 font-sans pb-5 lg:text-2xl">
            Project List {projectname.length}
          </h1>

          <ul>{projectList}</ul>
        </div>
      </div>
      <IoMenu className="menu" onClick={toggleMenu} />
    </div>
  );
};

export default Sidebar;
