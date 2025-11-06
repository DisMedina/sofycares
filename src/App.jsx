import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import maintenance from "./assets/img/maintenance.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <div className="img-maintenance">
          <img src={maintenance} alt="maintenance-img" />
        </div>
        <div></div>
      </div>
    </>
  );
}

export default App;
