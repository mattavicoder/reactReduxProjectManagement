import React, { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";
import { IProjectDetail } from "../../../interfaces/IProject";
import { Project } from "../../../models/Project";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import { saveProject, selectProjectById } from "../projectSlice";

const ProjectEdit: React.FC = () => {
  const dispatch = useAppDispatch();

  const defaultProject: Project = {
    id: 0,
    status: "",
    description: "",
    name: "",
  };
  const projectInfo =
    useAppSelector((state) => selectProjectById(state, 0)) ?? defaultProject;

  const [project, setProject] = useState<Project>(projectInfo);

  function handleDataChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  }

  function handleSubmit() {
    dispatch(saveProject(project)).finally(() =>
      toast.success("Saved Successfully")
    );
  }

  return (
    <div className="w-3/6 m-3 p-3">
      <span className="text-2xl ">
        {project.id == 0 && project.name == ""
          ? "Create New Project"
          : project.name}{" "}
      </span>
      <hr className="mt-2" />
      <p className="mt-2">
        <button
          type="button"
          onClick={handleSubmit}
          className="h-8 w-20  text-xs font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700"
        >
          Save
        </button>
      </p>
      <div className="grid grid-cols-1 gap-3 mt-5">
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="name"
            id="projectName"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={project.name}
            onChange={handleDataChange}
            required
          />
          <label
            htmlFor="projectName"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Name
          </label>
        </div>

        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="description"
            id="projectDescription"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={project.description}
            onChange={handleDataChange}
            required
          />
          <label
            htmlFor="projectDescription"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Description
          </label>
        </div>

        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="status"
            id="projectStatus"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={project.status}
            onChange={handleDataChange}
            required
          />
          <label
            htmlFor="projectStatus"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Status
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProjectEdit;
