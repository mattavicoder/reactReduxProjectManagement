import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProjectApi from "../../api/ProjectApi";
import { IProjectState } from "../../interfaces/IProject";
import { Project } from "../../models/Project";
import { RootState } from "../../store/store";

export interface ProjectState {
  project: Project;
  status: "idle" | "loading" | "failed";
}

const initialState: IProjectState = {
  status: "idle",
  selectedProject: { id: 0, name: "", description: "", status: "" },
  projectList: [],
};

export const getProjectsListAsync = createAsyncThunk(
  "project/fetchAll",
  async () => {
    const data = await ProjectApi.list();
    return data;
  }
);

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProjectsListAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProjectsListAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.projectList = [...action.payload];
      });
  },
});

export const selectProjectList = (state: RootState) =>
  state.project.projectList;

export const selectProjectById = (state: RootState, projectId: number) =>
  state.project.projectList.find((p) => p.id == projectId);

export default projectSlice.reducer;
