import React, { useEffect } from "react";
import { Project } from "../../../models/Project";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import { getProjectsListAsync, selectProjectList } from "../projectSlice";

const ProjectList: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProjectsListAsync());
  }, []);

  const projectList: Project[] = useAppSelector(selectProjectList);

  return (
    <>
      <div className="flex">
        <div className="w-4/6 sm:w-3/6 divide-y divide-solid">
          {console.log(projectList)}
          {projectList &&
            projectList.map((p) => (
              <div key={p.id} className="m-3 p-3">
                <h3>{p.name}</h3>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default ProjectList;
