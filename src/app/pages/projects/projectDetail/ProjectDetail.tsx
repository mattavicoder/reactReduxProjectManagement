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
    <div className="container w-4/6 m-3 p-3 bg-white">
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
          className="h-8 w-20 ml-5  text-xs font-medium text-center text-black rounded-lg bg-teal-300 "
        >
          Back
        </button>
      </p>
      <div className="mt-2">
        <figure className="relative">
          <img
            className="w-full h-96 rounded-md opacity-90"
            src="/projectimages/books.jpg"
            alt=""
          />
          <div className="text-white absolute top-0 left-0 px-3 py-72 flex flex-col gap-3">
            <span className="text-3xl font-bold">
              Gaming
              <span className="text-xl font-light ml-3">Ubisoft</span>
            </span>

            <span>20-12-2021</span>
          </div>
        </figure>
        <div className="mt-2 font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          vitae beatae, dicta quaerat repellendus ab ullam enim maxime quam nemo
          aliquid, tempora tempore aliquam dolores perferendis sint ut numquam
          dolore.
        </div>
      </div>

      <div className="mt-2">
        <div className="text-center pt-2 rounded-md bg-teal-600 h-10 font-bold">
          Chat about this Gaming
        </div>

        <div className="mt-2">
          <div className="flex flex-row">
            <figure className="w-12 h-20 rounded-sm">
              <img src="/projectimages/emptyperson.png" alt="" />
            </figure>
            <div className="ml-2 flex flex-col">
              <span className="text-base font-bold">
                UserName
                <span className="ml-2 font-normal">Today at 2:33PM</span>
              </span>

              <span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </span>
              <a href="#" className="w-20 h-6 text-left mt-1">
                Reply
              </a>
            </div>
          </div>
        </div>

        <div className="mt-2">
          <div className="flex flex-row">
            <figure className="w-12 h-20 rounded-sm">
              <img src="/projectimages/emptyperson.png" alt="" />
            </figure>
            <div className="ml-2 flex flex-col">
              <span className="text-base font-bold">
                UserName
                <span className="ml-2 font-normal">Today at 2:33PM</span>
              </span>

              <span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </span>
              <a href="#" className="w-20 h-6 text-left mt-1">
                Reply
              </a>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <textarea
            className="w-full h-auto border-2 border-solid border-slate-300"
            name=""
            id=""
            rows={4}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
