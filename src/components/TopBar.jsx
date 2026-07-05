import {
  AppBar,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import YouTubeIcon from "@mui/icons-material/YouTube";

function TopBar() {
  return (
    <AppBar
      position="sticky"
      sx={{
        background: "#0f0f0f",
        boxShadow: "0 2px 10px rgba(0,0,0,0.5)",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          height: "70px",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
          }}
        >
          <YouTubeIcon
            sx={{
              color: "#FF0000",
              fontSize: 40,
              mr: 1,
            }}
          />

          <Typography
            variant="h5"
            sx={{
              color: "white",
              fontWeight: "bold",
              letterSpacing: "0.5px",
            }}
          >
            YouTube
          </Typography>
        </Link>

        {/* Search */}
        <Box
          sx={{
            width: {
              xs: "55%",
              sm: "50%",
              md: "40%",
            },
          }}
        >
          <SearchBar />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;