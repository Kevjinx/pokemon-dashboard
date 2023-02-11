import SidebarComponent from "./components/global/Sidebar.jsx";
import { Routes, Route } from "react-router-dom";
import { MyResponsiveBar } from "./charts/BarChart.jsx";
import { barData } from "./data/testBarChart.js";

function App() {
  return (
    <div className="App">
      <SidebarComponent />
      <main className="content">
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
          <Route path="/bar" element={<MyResponsiveBar data={barData} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
