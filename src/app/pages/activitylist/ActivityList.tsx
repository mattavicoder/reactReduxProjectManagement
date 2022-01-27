import React from "react";
import { IActivityList } from "../../interfaces/IActivityList";
import ActivityDetail from "../activitydetail/ActivityDetail";
import ActivityEdit from "../activityEdit/ActivityEdit";

const ActivityList: React.FC<IActivityList> = ({
  activities,
}: IActivityList) => {
  return (
    <div className="flex">
      <div className="w-4/6 sm:w-3/6 divide-y divide-solid">
        {activities.map((a) => (
          <div key={a.id} className="m-3 p-3">
            <h3 className="">{a.title}</h3>
            <span className="mt-1 text-slate-400">{a.date}</span>

            <p className="mt-3">{a.description}</p>
            <p className="">
              {a.city},{a.venue}
            </p>
            <div className="mt-4 sm:flex flex-row justify-between">
              <div className="">
                <a
                  className="w-full flex text-center justify-center px-2 border border-transparent border-slate-800 text-indigo-600 bg-white hover:text-white hover:bg-indigo-600"
                  href="#"
                >
                  {a.category}
                </a>
              </div>

              <div className="sm:flex flex-row">
                <button className="my-2 mr-2 sm:my-0 w-full flex text-center justify-center px-4  border border-transparent border-slate-500 text-white bg-red-500">
                  Delete
                </button>

                <button className="my-2 sm:my-0 w-full flex text-center justify-center px-4  border border-transparent border-slate-500 text-white bg-indigo-600 hover:text-indigo-600 hover:bg-white">
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-2/6 ml-3 mt-3 flex flex-col">
        <div>
          {activities[0] && <ActivityDetail activity={activities[0]} />}
        </div>
        <div className="mt-10">
          {activities[0] && <ActivityEdit activity={activities[0]} />}
        </div>
      </div>
    </div>
  );
};

export default ActivityList;
