import SidebarComponent from "./components/Sidebar.jsx";
import { Routes, Route } from "react-router-dom";
import Bar from "./scene/bar/";

function App() {
  return (
    <div className="App">
      <SidebarComponent />
      <main className="content">
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
          <Route path="/bar" element={<Bar />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
