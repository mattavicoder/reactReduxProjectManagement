import React, { useEffect, useState } from "react";
import axios from "axios";
import { Activity } from "./models/activity";
import ActivityApi from "./api/ActivityApi";
import NavBar from "./layout/NavBar";
import ActivitiesDashboard from "./pages/activity/dashboard/ActivitiesDashboard";
import ProjectList from "./pages/projects/projectList/ProjectList";

function App() {
  const [activites, setActivites] = useState<Activity[]>([]);

  // useEffect(() => {
  //   ActivityApi.list().then((response) => {
  //     console.log(response);
  //     setActivites(response);
  //   });
  // }, []);

  return (
    <>
      <div className="">
        <NavBar />
        <div className="container">
          {/* <ActivitiesDashboard activities={activites} /> */}
          <ProjectList />
        </div>
      </div>
    </>
  );
}

export default App;
