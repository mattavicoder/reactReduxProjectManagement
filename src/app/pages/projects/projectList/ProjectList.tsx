import React, { useEffect } from "react";
import { Project } from "../../../models/Project";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import { getProjectsListAsync, selectAllProjects } from "../projectSlice";

const ProjectList: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProjectsListAsync());
  }, []);

  const projectList: Project[] = useAppSelector(selectAllProjects);

  return (
    <>
      <div className="flex">
        <div className="w-4/6 sm:w-3/6 divide-y divide-solid">
          {projectList &&
            projectList.map((p) => (
              <div key={p.id} className="m-3 p-3">
                <div className="flex justify-between">
                  <p className="text-xl">{p.name}</p>

                  <span className="h-5 bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                    {p.status}
                  </span>
                </div>

                <div className="flex justify-between">
                  <p className="mt-3">{p.description}</p>
                  <p>
                    <button
                      type="button"
                      className="h-8 w-20  text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700"
                    >
                      View
                    </button>

                    <button className="h-8 w-20 text-xs font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700  ml-2">
                      Delete
                    </button>
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default ProjectList;
