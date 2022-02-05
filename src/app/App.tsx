import React, { useEffect, useState } from "react";
import axios from "axios";
import { Activity } from "./models/activity";
import ActivityApi from "./api/ActivityApi";
import NavBar from "./layout/NavBar";
import ActivitiesDashboard from "./pages/activity/dashboard/ActivitiesDashboard";
import ProjectList from "./pages/projects/projectList/ProjectList";
import ProjectEdit from "./pages/projects/projectEdit/ProjectEdit";
import { ToastContainer } from "react-toastify";

function App() {
  const [activites, setActivites] = useState<Activity[]>([]);

  return (
    <>
      <div className="">
        <NavBar />
        <div className="container">
          {/* <ActivitiesDashboard activities={activites} /> */}
          <ProjectList />
          <ProjectEdit />
        </div>
      </div>

      <ToastContainer autoClose={2000} />
    </>
  );
}

export default App;
