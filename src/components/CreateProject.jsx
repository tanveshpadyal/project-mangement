import { useState } from "react";
// import "./style.css";

const CreateProject = ({ onDataSend, componentname }) => {
  const [errorMsg, setErrorMsg] = useState(false);
  // const d = new Date();

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Ensure two-digit month
    const day = String(date.getDate()).padStart(2, "0"); // Ensure two-digit day
    return `${year}-${month}-${day}`;
  };

  const [inpData, setInpData] = useState({
    title: "New Project",
    desc: "Write short summary about your project and mention purpose and which tools you used.",
    date: formatDate(new Date()),
  });

  /**
   * The function `handleChanges` updates the state with the new value based on the input name.
   */
  function handleChanges(e) {
    const { name, value } = e.target;

    setInpData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function saveProject() {
    if (inpData.title && inpData.desc && inpData.date) {
      onDataSend(inpData);
      setErrorMsg(false);
    } else {
      setErrorMsg(true);
    }
    setInpData({ title: "", desc: "", date: "" });
  }

  // display AddProject component
  function displayAddproject() {
    componentname("addProject");
  }

  return (
    <div className="new-project p-10 w-full">
      {errorMsg && (
        <div className="error-msg text-white bg-red-600 text-lg tracking-wide w-full my-6 p-3 rounded font-semibold lg:w-3/4">
          Please fill all fields.
        </div>
      )}

      <div className="save-cancel capitalize w-full flex justify-end gap-2 lg:w-3/4">
        <button
          className="bg-transparent text-black border-2 border-black"
          onClick={displayAddproject}
        >
          cancel
        </button>
        <button onClick={saveProject}>Save</button>
      </div>
      <form className=" flex flex-col  gap-10">
        <div className="inp-group w-full  lg:w-3/4">
          <label htmlFor="title" className="text-black uppercase font-medium">
            title
          </label>
          <input
            type="text"
            name="title"
            className="w-full bg-neutral-300 h-11 border-b-2 border-b-black mt-1 text-black outline-none p-2"
            onChange={handleChanges}
            value={inpData.title}
          />
        </div>

        <div className="inp-group w-full  lg:w-3/4">
          <label htmlFor="desc" className="text-black uppercase font-medium">
            Description
          </label>
          <input
            type="text"
            name="desc"
            className="w-full bg-neutral-300 h-11 "
            onChange={handleChanges}
            value={inpData.desc}
          />
        </div>
        <div className="inp-group  w-full  lg:w-3/4">
          <label htmlFor="date" className="text-black uppercase font-medium">
            Due Date
          </label>
          <input
            type="date"
            name="date"
            className="w-full bg-neutral-300 h-11 "
            onChange={handleChanges}
            value={inpData.date}
          />
        </div>
      </form>
    </div>
  );
};

export default CreateProject;
