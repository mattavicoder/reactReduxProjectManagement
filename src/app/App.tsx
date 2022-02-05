import React, { useEffect, useState } from "react";
import axios from "axios";
import { Activity } from "./models/activity";
import ActivityApi from "./api/ActivityApi";
import NavBar from "./layout/NavBar";
import ActivitiesDashboard from "./pages/activity/dashboard/ActivitiesDashboard";
import ProjectList from "./pages/projects/projectList/ProjectList";
import ProjectEdit from "./pages/projects/projectEdit/ProjectEdit";

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
    </>
  );
}

export default App;
