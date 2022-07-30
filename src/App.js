import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import Tracker from './components/Tracker';

function App() {
  const [trainings, setTrainings] = useState([]);

  return (
    <div className="App">
      <Form list={trainings} setList={setTrainings} />
      <Tracker list={trainings} setList={setTrainings} />
    </div>
  );
}

export default App;
