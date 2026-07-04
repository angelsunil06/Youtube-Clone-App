import {
  AppBar,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function TopBar() {
  return (
    <AppBar
      position="sticky"
      sx={{
        background: "#202020",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            color="red"
          >
            YouTube Clone
          </Typography>
        </Link>

        <Box>
          <SearchBar />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;