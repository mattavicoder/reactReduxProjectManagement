import React, { useEffect, useState } from "react";
import axios from "axios";
import { Activity } from "../models/activity";
import NavBar from "./NavBar";

function App() {
  const [activites, setActivites] = useState<Activity[]>([]);

  // useEffect(() => {
  //   console.log(activites)

  //   axios.get("http://localhost:5000/api/Activities").then(response => {
  //     console.log(response.data)
  //     setActivites(response.data);
  //   })
  // }, []);

  return (
    //     <div className="w-100 text-left hover:text-center hover:bg-yellow-700">
    //   <p className="">
    //    SAMPLE DATA TEST
    // </p>
    //       {/* <ListGroup>
    //         {
    //           activites.map(a =>
    //             <ListGroupItem key={a.id}>{a.title} </ListGroupItem>
    //           )
    //         }
    //       </ListGroup> */}
    //     </div>
    <>
      <div className="">
        <NavBar />
        <div className="bg-slate-500 h-96">Data Body</div>
      </div>
    </>
  );
}

export default App;
