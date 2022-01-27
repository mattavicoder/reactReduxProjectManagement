import { Activity } from "../models/activity";
import AxiosRequests from "./AxiosConfig";

const ActivityApi = {
  list: () => AxiosRequests.get<Activity[]>("activities"),
  details: (id: string) => AxiosRequests.get<Activity>(`activities/${id}`),
  create: (activity: Activity) =>
    AxiosRequests.post<void>("activities", activity),
  update: (activity: Activity) =>
    AxiosRequests.put<void>(`activities/${activity.id}`, activity),
  delete: (id: string) => AxiosRequests.del<void>(`activities/${id}`),
};

export default ActivityApi;
