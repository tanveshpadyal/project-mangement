import React, { useState } from "react";
import AddProject from "./AddProject";
import CreateProject from "./CreateProject";
import ProjectDetails from "./ProjectDetails";

const DisplayInfo = ({
  onclick,
  projectinfo,
  componentname,
  comName,
  getIndex,
  deleteproject,
  onAdd,
  task,
  deleteTask,
}) => {
  switch (comName) {
    case "addProject":
      return <AddProject componentname={componentname} />;
      break;
    case "create project":
      return (
        <CreateProject onDataSend={onclick} componentname={componentname} />
      );
      break;
    case "project details":
      return (
        <ProjectDetails
          projectinfo={projectinfo}
          getIndex={getIndex}
          deleteproject={deleteproject}
          componentname={componentname}
          onAdd={onAdd}
          task={task}
          deleteTask={deleteTask}
        />
      );
      break;
    default:
      return <AddProject componentname={componentname} />;
  }
};

export default DisplayInfo;
