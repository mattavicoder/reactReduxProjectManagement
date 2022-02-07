import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../../store/hook";
import ProjectEdit from "../projectEdit/ProjectEdit";
import { selectProjectById } from "../projectSlice";

type ParamType = {
  id: string;
};

const ProjectDetail: React.FC = () => {
  let { id } = useParams<ParamType>();
  const project = useAppSelector((state) => selectProjectById(state, id ?? 0));

  const navigate = useNavigate();

  return (
    <div className="container m-3 p-3">
      <p>
        <button
          type="button"
          onClick={() => navigate(`/projectEdit/${project?.id}`)}
          className="h-8 w-20  text-xs font-medium text-center text-black bg-green-400 rounded-lg hover:bg-gray-500-800 dark:bg-gray-600 dark:hover:bg-gray-700"
        >
          Edit
        </button>

        <button
          type="button"
          onClick={() => navigate("/projects")}
          className="h-8 w-20 ml-5  text-xs font-medium text-center text-black bg-white-700 rounded-lg hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700"
        >
          Back
        </button>
      </p>
      <div className="grid columns-2">
        <div className="col-span-2">
          <strong className="text-2xl">{project?.name}</strong>
        </div>
        <div className="col-span-2">
          <p>{project?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
