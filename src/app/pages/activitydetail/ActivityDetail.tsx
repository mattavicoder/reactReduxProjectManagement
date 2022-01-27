import React from "react";
import { IActivity } from "../../interfaces/IActivityList";

const ActivityDetail: React.FC<IActivity> = ({ activity }: IActivity) => {
  return (
    <>
      <div className="container">
        <img
          className="rounded-md"
          src={`/categoryimages/${activity.category}.jpg`}
          alt=""
        />
        <div className="mt-3">
          <h3 className="">{activity.title}</h3>
          <span className="mt-1 text-slate-400">{activity.date}</span>

          <p className="mt-3">{activity.description}</p>
        </div>

        <div className="mt-3 flex flex-col sm:flex-row text-center justify-center">
          <button className="my-2 sm:my-0 sm:w-3/6 px-4 py-2 w-full border  border-slate-500">
            Edit
          </button>
          <button className="my-2 sm:my-0 sm:w-3/6 w-full px-4 py-2 border  border-slate-500">
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default ActivityDetail;
