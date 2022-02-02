import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import ProjectApi from "../../api/ProjectApi";
import { IProjectState } from "../../interfaces/IProject";
import { Project } from "../../models/Project";
import { RootState } from "../../store/store";

export interface ProjectState {
  project: Project;
  status: "idle" | "loading" | "failed";
}

const projectsAdapter = createEntityAdapter({
  sortComparer: (a: Project, b: Project) =>
    b.id.toString().localeCompare(a.id.toString()),
});

const initialState = projectsAdapter.getInitialState({
  status: "idle",
  error: null,
});

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
        projectsAdapter.upsertMany(state, action.payload);
      });
  },
});

export const {
  selectAll: selectAllProjects,
  selectById: selectProjectById,
  selectIds: selectProjectIds,
  // Pass in a selector that returns the projects slice of state
} = projectsAdapter.getSelectors((state: RootState) => state.project);

export default projectSlice.reducer;
