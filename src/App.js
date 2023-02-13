
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ProSidebarProvider } from 'react-pro-sidebar';
import Topbar from './scene/global/Topbar.jsx';
import SidebarComponent from "./scene/global/Sidebar.jsx";
import Bar from "./scene/bar/";


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <ProSidebarProvider>
            <SidebarComponent isSidebar={isSidebar} />
          </ProSidebarProvider>
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<h1>Home</h1>} />
              <Route path="/about" element={<h1>About</h1>} />
              <Route path="/contact" element={<h1>Contact</h1>} />
              <Route path="/bar" element={<Bar />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
