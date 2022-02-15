import React from "react";

const ProjectChat: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default ProjectChat;
