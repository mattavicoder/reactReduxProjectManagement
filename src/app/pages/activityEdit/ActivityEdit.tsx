import React, { ChangeEvent, useState } from "react";
import ActivityApi from "../../api/ActivityApi";
import { IActivity } from "../../interfaces/IActivityList";

const ActivityEdit: React.FC<IActivity> = ({ activity }) => {
  const [getActivity, setActivity] = useState(activity);

  function handleDataChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setActivity({ ...getActivity, [name]: value });
  }

  function handleSubmit() {
    ActivityApi.update(getActivity).then(() => {
      alert("saved");
    });
  }

  return (
    <>
      <div className="grid grid-cols-1">
        <div>
          <input
            type="text"
            className="w-3/6 sm:w-8/12 p-2 border border-gray-600 rounded-md mb-3"
            placeholder="title"
            name="title"
            value={getActivity.title}
            onChange={handleDataChange}
          />
        </div>

        <div>
          <input
            type="text"
            className="w-3/6 sm:w-8/12 p-2 border border-gray-600 rounded-md mb-3"
            name="description"
            placeholder="description"
            value={getActivity.description}
            onChange={handleDataChange}
          />
        </div>

        <div>
          <input
            type="text"
            className="w-3/6 sm:w-8/12 p-2 border border-gray-600 rounded-md mb-3"
            name="city"
            placeholder="city"
            value={getActivity.city}
            onChange={handleDataChange}
          />
        </div>

        <div>
          <input
            type="text"
            className="w-3/6 sm:w-8/12 p-2 border border-gray-600 rounded-md mb-3"
            name="venue"
            placeholder="venue"
            value={getActivity.venue}
            onChange={handleDataChange}
          />
        </div>

        <div>
          <input
            type="text"
            className="w-3/6 sm:w-8/12 p-2 border border-gray-600 rounded-md mb-3"
            name="category"
            placeholder="category"
            value={getActivity.category}
            onChange={handleDataChange}
          />
        </div>

        <div className="mt-3 flex flex-col sm:flex-row text-center justify-center">
          <button className="my-2 sm:my-0 sm:w-3/6 w-full px-4 py-2 border  border-slate-500">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="my-2 ml-0 sm:ml-2 sm:my-0 sm:w-3/6 w-full px-4 py-2 bg-green-400 text-white"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default ActivityEdit;
