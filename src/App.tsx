import React, { useState } from 'react';
import './App.css';
import { useQuery } from '@apollo/client';
import {GET_ATHLETES} from "./schemas/queries/getAthletes";
import {LeetCards} from "./components/LeetCards";

interface Athlete {
    id : number,
    firstname : string,
    middleInitial : string,
    lastname : string,
    age : number,
    country : string,
    sport : string,
    mainEvent : string,
}

function App() {
    const [athlete, setAthlete] = useState<Athlete | null>(null)
    const { loading, error } = useQuery(GET_ATHLETES, {onCompleted: (data) => {
            setAthlete(data.athletes[2])
        }});

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;


  return (
          <div className="App">
              <header className="App-header">
                  <h1 className="underline">Welcome to encoding app {athlete?.firstname || ''}</h1>
                  <LeetCards />
              </header>
          </div>

  );
}

export default App;
