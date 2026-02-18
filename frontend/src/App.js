import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("/api/message")
      .then(res => res.json())
      .then(data => setMsg(data.message));
  }, []);

  return (
    <div>
      <h1>Fullstack CI/CD Project</h1>
      <h2>{msg}</h2>
    </div>
  );
}

export default App;
