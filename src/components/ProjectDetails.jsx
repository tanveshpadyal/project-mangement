import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";

const ProjectDetails = ({ projectinfo, deleteproject, componentname }) => {
  const [list, setList] = useState([]);
  const [error, setError] = useState(false);

  const projectTask = useRef(null);

  const date = new Date(projectinfo.date);
  const options = { year: "numeric", month: "short", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  function handleTask(e) {
    e.preventDefault();
    const task = projectTask.current.value.trim();

    if (task !== "") {
      setList((prev) => [...prev, task]);
      projectTask.current.value = "";
      setError(false);
    } else {
      setError(true);
    }
  }

  useEffect(() => {
    if (projectTask.current) projectTask.current.focus();
  }, []);

  const TotalTask = list.map((value, index) => {
    return (
      <li className="text-lg p-2 bg-blue-200 rounded mb-2" key={index}>
        {value}
      </li>
    );
  });

  function deleteProject() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      customClass: {
        popup: "custom-swal-popup",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        deleteproject();
        componentname("addProject");
        Swal.fire({
          title: "Deleted!",
          text: `${projectinfo.title} has been deleted.`,
          icon: "success",
        });
      }
    });
  }

  return (
    <div className="project-details p-10 w-full max-w-full text-black">
      <div className="core-info border-b-2 border-b-gray-500 py-5 flex  items-start flex-col gap-5 w-full  lg:w-4/5">
        <h1 className="text-5xl capitalize font-sans font-semibold">
          {projectinfo.title}
        </h1>
        <p className="text-gray-600">{formattedDate.toLocaleUpperCase()}</p>
        <p className="font-medium">{projectinfo.desc}</p>

        <div className="pde-btn self-end flex items-center justify-center gap-3 mt-3">
          <button
            className="px-3 py-1 text-white text-sm hover:bg-white hover:text-black hover:border-black lg:px-5 lg:py-2 lg:text-base"
            onClick={() => componentname("addProject")}
          >
            Close
          </button>
          <button
            className=" px-3 py-1 text-sm border-2 border-red-600 bg-transparent hover:bg-red-600 hover:text-white lg:px-5 lg:py-2 lg:text-base"
            onClick={deleteProject}
          >
            Delete
          </button>
        </div>
      </div>
      <div className="project-task my-5 py-5">
        <form
          action=""
          className="flex justify-between items-center sm:justify-normal"
        >
          <input
            type="text"
            name="task"
            className={`bg-transparent border-2 border-gray-700 h-10 rounded-lg w-44 sm:w-52 p-5 lg:w-96 ${
              error ? "inperror" : undefined
            }`}
            ref={projectTask}
          />

          <button
            className="mx-3 text-white hover:bg-blue-700 px-3 py-2"
            onClick={handleTask}
          >
            Add Task
          </button>
          {error && (
            <span className="text-red-600 block">Please enter some task</span>
          )}
        </form>
        <div className="task-list bg-slate-200  p-5 my-5 w-full rounded-lg lg:w-4/5">
          <ol>{TotalTask}</ol>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
