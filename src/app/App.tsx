import React, { useEffect, useState } from "react";
import axios from "axios";
import { Activity } from "./models/activity";
import ActivityApi from "./api/ActivityApi";
import NavBar from "./layout/NavBar";
import ActivitiesDashboard from "./pages/activity/dashboard/ActivitiesDashboard";
import ProjectList from "./pages/projects/projectList/ProjectList";
import ProjectEdit from "./pages/projects/projectEdit/ProjectEdit";
import { ToastContainer } from "react-toastify";
import { Route, Routes, useLocation } from "react-router";
import HomePage from "./layout/HomePage";
import ProjectDetail from "./pages/projects/projectDetail/ProjectDetail";

function App() {
  return (
    <>
      <div className="">
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectList />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/projectEdit/:id" element={<ProjectEdit />} />
            <Route path="/createProject" element={<ProjectEdit />} />
          </Routes>
        </div>
      </div>

      <ToastContainer autoClose={2000} />
    </>
  );
}

export default App;
