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

export const saveProject = createAsyncThunk(
  "project/save",
  async (project: Project) => {
    await ProjectApi.create(project);
    return project;
  }
);

export const deleteProject = createAsyncThunk(
  "project/delete",
  async (id: number) => {
    await ProjectApi.delete(id);
    return id;
  }
);

export const getProjectDetail = createAsyncThunk(
  "project/getById",
  async (id: number) => {
    let data = await ProjectApi.details(id);
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
      })
      .addCase(saveProject.fulfilled, (state, action) => {
        projectsAdapter.addOne(state, action.payload);
      })
      .addCase(deleteProject.fulfilled, (state, action) => {
        projectsAdapter.removeOne(state, action.payload);
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
