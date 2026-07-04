import { useState } from "react";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!searchTerm) return;

    navigate(`/search/${searchTerm}`);
    setSearchTerm("");
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        display: "flex",
        alignItems: "center",
        pl: 2,
        width: 350,
      }}
    >
      <input
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(e.target.value)
        }
        style={{
          border: "none",
          outline: "none",
          width: "100%",
          fontSize: "16px",
        }}
      />

      <IconButton type="submit">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;