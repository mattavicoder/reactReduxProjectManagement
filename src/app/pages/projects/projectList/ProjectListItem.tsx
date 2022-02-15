import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IProjectDetail } from "../../../interfaces/IProject";
import { useAppDispatch } from "../../../store/hook";
import { deleteProject } from "../projectSlice";

const ProjectListItem: React.FC<IProjectDetail> = ({ project }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleDelete(id: number) {
    dispatch(deleteProject(id)).finally(() => {
      toast.success("Deleted Successfully");
    });
  }

  return (
    <>
      <div className="flex gap-2 mx-3 my-7 p-3 border-2 rounded-md">
        <img
          src="projectimages/books.jpg"
          alt=""
          className="md:w-1/6 h-24 w-2/6"
        />
        <div className="flex flex-col gap-3 px-2 xl:justify-between  md:w-5/6 w-4/6">
          <div>
            <div className="flex flex-col md:flex-row  justify-between">
              <div>
                <span className="font-medium">{project.name}</span>
                <span className="font-light mt-2 md:mt-0 ml-3">
                  {project.status}
                </span>
              </div>

              <div>
                <span className="">20-12-2021</span>

                <button
                  onClick={() => navigate(`/projects/${project.id}`)}
                  className="w-28 h-8 ml-2 self-end text-center rounded-md border-2 hover:bg-amber-50"
                >
                  Detail
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-row justify-between">
              <p className="hidden md:block">
                {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, cum sed corporis a maxime dolorem, ea velit earum magnam unde distinctio rerum? Ab aperiam iste unde magnam tenetur illum nesciunt".substring(
                  0,
                  200
                )}
              </p>

              <p className="md:hidden">
                {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, cum sed corporis a maxime dolorem, ea velit earum magnam unde distinctio rerum? Ab aperiam iste unde magnam tenetur illum nesciunt".substring(
                  0,
                  30
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectListItem;
