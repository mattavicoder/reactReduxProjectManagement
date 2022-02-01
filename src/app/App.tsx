import React, { useEffect, useState } from "react";
import axios from "axios";
import { Activity } from "./models/activity";
import ActivityApi from "./api/ActivityApi";
import NavBar from "./layout/NavBar";
import ActivitiesDashboard from "./pages/dashboard/ActivitiesDashboard";

function App() {
  const [activites, setActivites] = useState<Activity[]>([]);

  useEffect(() => {
    ActivityApi.list().then((response) => {
      setActivites(response);
    });
  }, []);

  return (
    <>
      <div className="">
        <NavBar />
        <div className="container">
          <ActivitiesDashboard activities={activites} />
        </div>
      </div>
    </>
  );
}

export default App;
