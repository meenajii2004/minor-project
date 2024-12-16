import React from "react";
import { IconButton, AppBar, Toolbar, Typography } from "@mui/material";
import { IoMenu } from "react-icons/io5"; // Menu icon for the hamburger menu

const Header = ({ toggleSidebar }) => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        {/* Menu Button */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleSidebar}
          sx={{
            marginRight: 2,
          }}
        >
          <IoMenu size={30} />
        </IconButton>
        {/* Header Title */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          StayScape
        </Typography>

        {/* <Button
          component={Link}
          to="/login"
          variant="outlined"
          color="inherit"
          sx={{
            color: "#fff",
            borderColor: "#fff",
            "&:hover": {
              borderColor: "#ccc",
            },
          }}
        >
          Login / Signup
        </Button> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
