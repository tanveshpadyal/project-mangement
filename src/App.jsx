import { useState } from "react";
import Sidebar from "./components/Sidebar";
import DisplayInfo from "./components/DisplayInfo";

const App = () => {
  const [projectName, setProjectName] = useState([]);
  const [projectInfo, setProjectInfo] = useState([]);
  const [task, setTask] = useState([]);
  const [componentName, setComponentName] = useState("");
  const [getIndex, setIndex] = useState(0);

  function showData({ title, desc, date }) {
    setProjectName((prev) => [...prev, title]);

    const projectDetails = { title: title, desc: desc, date: date };
    setProjectInfo((prev) => [...prev, projectDetails]);
  }

  function DisplayComponents(comName) {
    setComponentName(comName);
  }

  function listItem(index) {
    setIndex(index);
  }

  function deleteProject() {
    setProjectInfo((prev) => prev.filter((_, i) => i !== getIndex));
    setProjectName((prev) => prev.filter((_, i) => i !== getIndex));
    setTask((prev) => prev.filter((task) => task.taskId !== getIndex));
  }

  const specTask = task.filter((value) => value.taskId === getIndex);

  function addTask(taskname) {
    setTask((prev) => [...prev, { taskId: getIndex, taskname }]);
  }

  function deleteTask(index) {
    setTask((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <div className="myproject flex flex-col md:flex-row">
      <Sidebar
        projectname={projectName}
        listItem={listItem}
        componentname={DisplayComponents}
      />
      <DisplayInfo
        onclick={showData}
        projectinfo={projectInfo[getIndex]}
        componentname={DisplayComponents}
        comName={componentName}
        deleteproject={deleteProject}
        task={specTask}
        onAdd={addTask}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default App;
