import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

function App() {

  const [activites, setActivites] = useState([]);

  useEffect(() => {
    console.log(activites)

    axios.get("http://localhost:5000/api/Activities").then(response => {
      console.log(response.data)
      setActivites(response.data);
    })
  }, []);

  return (
    <div>
      <ListGroup>
        {
          activites.map((a: any) => 
            <ListGroupItem key={a.id}>{a.title} </ListGroupItem>  
          )
        }
      </ListGroup>
    </div>
  );
}

export default App;
