import React from "react";
import projectIcon from "../assets/blueprint.png";

const AddProject = ({ createproject, componentname }) => {
  // display createproject component
  function createProject() {
    componentname("create project");
  }

  return (
    <div className="add-project p-10 w-full max-w-full h-screen text-black flex justify-center items-center flex-col gap-5">
      <img
        src={projectIcon}
        alt="paper image"
        width={90}
        className="mb-5 z-0"
      />
      <h2 className="text-2xl font-bold">No Project Selected</h2>
      <p className="text-gray-700 font-medium">
        Select a project or get started with a new one
      </p>
      <button
        className="text-white border-2  hover:bg-black"
        onClick={createProject}
      >
        Create new project
      </button>
    </div>
  );
};

export default AddProject;
