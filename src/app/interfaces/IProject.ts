import { Project } from "../models/Project";

export interface IProjectList {
  projectList: Project[];
}

export interface IProjectDetail {
  project: Project;
}

export interface IProjectState {
  projectList: Project[];
  selectedProject: Project;
  status: "idle" | "loading" | "failed";
}
