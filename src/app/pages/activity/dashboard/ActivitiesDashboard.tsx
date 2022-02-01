import React from "react";
import { IActivityList } from "../../../interfaces/IActivityList";
import { Activity } from "../../../models/activity";
import ActivityList from "../activitylist/ActivityList";

const ActivitiesDashboard: React.FC<IActivityList> = ({
  activities,
}: IActivityList) => {
  return (
    <>
      <ActivityList activities={activities} />
    </>
  );
};

export default ActivitiesDashboard;
