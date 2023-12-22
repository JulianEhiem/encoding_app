import React, { useState } from 'react';
import './App.css';
import { useQuery } from '@apollo/client';
import {GET_ATHLETES} from "./schemas/queries/getAthletes";

interface Athlete {
    name: string;
    sex: string;
    specialty: string;
}

function App() {
    const [athlete, setAthlete] = useState<Athlete | null>(null)
    const { loading, error } = useQuery(GET_ATHLETES, {onCompleted: (data) => {
            setAthlete(data.athletes[0])
        }});

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;


  return (
          <div className="App">
              <header className="App-header">
                  <h1 className="underline">Welcome to encoding app {athlete?.name || ''}</h1>
              </header>
          </div>

  );
}

export default App;
