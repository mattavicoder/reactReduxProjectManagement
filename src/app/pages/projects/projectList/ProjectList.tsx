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

const ProjectList: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProjectsListAsync()).finally(() => {});
  }, []);

  const projectList: Project[] = useAppSelector(selectAllProjects);

  function handleDelete(id: number) {
    dispatch(deleteProject(id)).finally(() => {
      toast.success("Deleted Successfully");
    });
  }

  return (
    <>
      <div className="flex bg-white">
        <div className="w-4/6 sm:w-4/6">
          {projectList &&
            projectList.map((p) => (
              <div
                key={p.id}
                className="flex gap-2 mx-3 my-7 p-3 border-2 rounded-md"
              >
                <img
                  src="projectimages/books.jpg"
                  alt=""
                  className="md:w-1/6 h-24 w-2/6"
                />
                <div className="flex flex-col gap-3 px-2 xl:justify-between  md:w-5/6 w-4/6">
                  <div>
                    <div className="flex flex-col md:flex-row  justify-between">
                      <div>
                        <span className="font-medium">Gaming</span>
                        <span className="font-light mt-2 md:mt-0 ml-3">
                          Ubisoft
                        </span>
                      </div>
                      <span className="hidden md:block">20-12-2021</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-row justify-between">
                      <p className="hidden md:block md:w-5/6">
                        {"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti dolores incidunt fugit consectetur dolorem obcaecati harum nesciunt voluptatibus aliquid, non autem quo minus quibusdam iure labore quas cupiditate ipsa? Ullam!".substring(
                          0,
                          100
                        )}
                      </p>
                      <span className="md:hidden self-end">20-12-2021</span>

                      <button
                        onClick={() => navigate("/projects/0")}
                        className="md:w-1/6 mt-2 w-24 h-8 ml-2 self-end text-center rounded-md border-2 hover:bg-amber-50"
                      >
                        Detail
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default ProjectList;
