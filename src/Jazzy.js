import React from "react";
import './Style.css'
import 'tachyons'
function App() {
    return (
      <div>
          <head>
        <link rel="stylesheet" href="style.css"></link>
        <title> create and delete list</title>
    </head>
    <body>
        <header className="links ba pillfl w-100 .25rem">
            <a href="google.com">Google</a>
            <a href="facebook.com">Facebook</a>
            <a href="instagram.com">Instagram</a>
            <a href="whatsapp.com">Whatsapp</a>
        </header>
        <p><h3> This App is just to mark and unmark, add and delete task on completion</h3></p><br></br>
        <p><h2>Add New Task Here</h2></p><br></br>
        <input type="text" id="collectData" placeholder="Enter New Activity Here"></input>
        <input type="submit" id="add" placeholder="Enter"></input>
        </body>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
      </div>
    );
  }
  
  export default App;
  