import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Project } from "../../../models/Project";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import {
  deleteProject,
  getProjectsListAsync,
  selectAllProjects,
} from "../projectSlice";
import ProjectListItem from "./ProjectListItem";

const ProjectList: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProjectsListAsync()).finally(() => {});
  }, []);

  const projectList: Project[] = useAppSelector(selectAllProjects);

  return (
    <>
      <div className="flex bg-white">
        <div className="w-4/6 sm:w-4/6">
          {projectList &&
            projectList.map((p) => <ProjectListItem project={p} key={p.id} />)}
        </div>
      </div>
    </>
  );
};

export default ProjectList;
