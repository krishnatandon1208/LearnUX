import React from 'react';
import './App.css';

const userData = "https://jsonplaceholder.typicode.com/todos";

function App() {

  let userDetails = `${userData}${'/1'}`;
  alert(userDetails);

  return (
    <div className="App">
      <div>
  <p>{userDetails}</p>

        <h1>{userDetails.userId}</h1>
        <h2>{userDetails.title}</h2>
        <h2>{userDetails.completed}</h2>
      </div>
    </div>
  );
}

export default App;
