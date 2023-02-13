import { Route, Routes } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import { ProSidebarProvider } from "react-pro-sidebar";
import Topbar from "./scene/global/Topbar";
import Dashboard from "./scene/dashboard";
import Sidebar from "./scene/global/Sidebar";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {/* reset css to default */}
        <CssBaseline />
        <div className="app">
          <ProSidebarProvider>
            <Sidebar />
          </ProSidebarProvider>
          <Box className="content" sx={{ width: "100%" }}>
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </Box>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;