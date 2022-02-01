import { Project } from "../models/Project";
import AxiosRequests from "./AxiosConfig";

const ProjectApi = {
  list: () => AxiosRequests.get<Project[]>("project"),
  details: (id: number) => AxiosRequests.get<Project>(`project/${id}`),
  create: (project: Project) => AxiosRequests.post<void>("project", project),
  update: (project: Project) =>
    AxiosRequests.put<void>(`project/${project.id}`, project),
  delete: (id: number) => AxiosRequests.del<void>(`project/${id}`),
};

export default ProjectApi;
