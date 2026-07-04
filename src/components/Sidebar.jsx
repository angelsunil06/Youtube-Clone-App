import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

function Sidebar({ selectedCategory, setSelectedCategory }) {
  return (
    <Stack
      direction="column"
      sx={{
        height: "90vh",
        overflowY: "auto",
        borderRight: "1px solid #3d3d3d",
        p: 2,
        background: "#0f0f0f",
      }}
    >
      {categories.map((category) => (
        <button
          key={category.name}
          onClick={() => setSelectedCategory(category.name)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "12px",
            marginBottom: "10px",
            border: "none",
            borderRadius: "20px",
            cursor: "pointer",
            background:
              selectedCategory === category.name ? "#ff0000" : "#202020",
            color: "#fff",
            fontSize: "15px",
          }}
        >
          {category.icon}
          {category.name}
        </button>
      ))}
    </Stack>
  );
}

export default Sidebar;