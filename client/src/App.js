import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [fetchedData, setData] = useState([]);

  useEffect(() => {
    const data = async () => {
      const response = await fetch("http://localhost:5000/json");
      const results = await response.json();
      setData(results);
    };
    data();
  }, []);

  return <div className="App">{fetchedData}</div>;
}

export default App;
