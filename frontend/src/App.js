import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    axios.get("/api/message")
      .then(res => setMsg(res.data.message));
  }, []);

  return (
    <div>
      <h1>Fullstack CI/CD Project</h1>
      <h2>{msg}</h2>
    </div>
  );
}

export default App;
