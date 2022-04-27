import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
