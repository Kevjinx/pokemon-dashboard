import { Route, Routes } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import { ProSidebarProvider } from "react-pro-sidebar";
import Topbar from "./scene/global/Topbar";
import Dashboard from "./scene/dashboard";
import Sidebar from "./scene/global/Sidebar";
import Bar from "./scene/bar";
import Playground from "./scene/playground";
import PokemonDashboard from "./scene/pokemonDashboard";
import Account from "./scene/account";
import AuthComponent from './components/AuthComponent';


const App = () => {
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
              <Route path="/bar" element={<Bar />} />
              <Route path="/playground" element={<Playground />} />
              <Route path="/pokemon/:pokemonId" element={<PokemonDashboard />} />
              <Route path="/account" element={<Account />} />
              <Route path="/auth" element={<AuthComponent />} />
              <Route path="*" element={<h1>404</h1>} />
            </Routes>
          </Box>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
