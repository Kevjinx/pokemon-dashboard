import { useState } from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import profilePic from "../../assets/images/cyndaquil.jpg";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link to={to} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const SidebarComponent = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode); // @mui, getting the colors from the theme
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const { collapseSidebar } = useProSidebar();
  const handleCollapseSidebar = () => {
    collapseSidebar();
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Box
      sx={{
        "& .ps-menu-root": {
          //!important = need to override the default background color
          backgroundColor: `${colors.primary[400]} !important`,
          height: "100vh",
        },
        "& .ps-menu-button": {
          backgroundColor: "transparent",
        },
        "& .ps-menu-button:hover": {
          backgroundColor: `${colors.blueAccent[800]} !important`,
        },
        "& .ps-menu-button.ps-active": {
          backgroundColor: `${colors.greenAccent[900]} !important`,
        },
      }}
    >
      <Sidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => handleCollapseSidebar()}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  Cyndranil
                </Typography>
                <IconButton>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={profilePic}
                  alt="user-profile"
                  width="50px"
                  height="50px"
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box
                sx={{
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  sx={{
                    fontWeight: "bold",
                    margin: "10px 0 0 0",
                  }}
                >
                  Rick Sanchez
                </Typography>
                <Typography
                  variant="h3"
                  color={colors.greenAccent[500]}
                  sx={{
                    margin: "0",
                  }}
                >
                  Dimension C-137
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />{" "}
            <Item
              title="Playground"
              to="/playground"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Login"
              to="/login"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Register"
              to="/register"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Account"
              to="/account"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Search"
              to="/search"
              selected={selected}
              setSelected={setSelected}
            />

          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SidebarComponent;
