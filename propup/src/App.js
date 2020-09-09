import React from 'react';
import './App.css';

import PersonCard from './components/mycomponents.js'

function App() {
  return (
    <div className="App">
      <PersonCard
        lastName={"Clark"}
        firstName={"John"}
        age={29}
        hair={"dark brown"}
      />
      <PersonCard
        lastName={"Clark"}
        firstName={"Ryan"}
        age={25}
        hair={"blue"}
      />
    </div>
  );
}

export default App;
