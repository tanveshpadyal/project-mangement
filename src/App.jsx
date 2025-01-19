import { useState } from "react";
import Sidebar from "./components/Sidebar";
import DisplayInfo from "./components/DisplayInfo";

const App = () => {
  const [projectName, setProjectName] = useState([]);
  const [projectInfo, setProjectInfo] = useState([]);
  const [componentName, setComponentName] = useState("");
  const [getIndex, setIndex] = useState(0);

  function showData({ title, desc, date }) {
    setProjectName((prev) => [...prev, title]);

    const projectDetails = { title: title, desc: desc, date: date };
    setProjectInfo((prev) => [...prev, projectDetails]);
  }

  // display components conditionally in <DisplayInfo/> component
  function DisplayComponents(comName) {
    setComponentName(comName);
  }

  function listItem(index) {
    setIndex(index);
  }

  function deleteProject() {
    // projectInfo.splice(getIndex, 1);
    console.log(projectInfo);
    setProjectInfo((prev) => prev.splice(getIndex, 1));
    setProjectName((prev) => prev.splice(getIndex, 1));
    console.log(projectInfo);
  }

  return (
    <>
      <div className="myproject flex  flex-col md:flex-row">
        {/* passing project name */}
        <Sidebar
          projectname={projectName}
          listItem={listItem}
          componentname={DisplayComponents}
        />
        {/* getting project title via props */}
        <DisplayInfo
          onclick={showData}
          projectinfo={projectInfo[getIndex]}
          componentname={DisplayComponents}
          comName={componentName}
          deleteproject={deleteProject}
        />
      </div>
    </>
  );
};

export default App;
