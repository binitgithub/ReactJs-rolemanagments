import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Lead from "./pages/Lead";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/lead" element={<Lead/>} />
      </Routes>
    </Router>
   
  );
}

export default App;
