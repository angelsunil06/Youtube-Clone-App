import { Stack, Typography } from "@mui/material";
import { categories } from "../utils/constants";

function Sidebar({ selectedCategory, setSelectedCategory }) {
  return (
    <Stack
      direction="column"
      sx={{
        width: { xs: "100%", md: "220px" },
        height: "calc(100vh - 70px)",
        background: "#0f0f0f",
        borderRight: "1px solid #272727",
        px: 1.5,
        py: 2,
        overflowY: "auto",
      }}
    >
      {categories.map((category) => (
        <Stack
          key={category.name}
          direction="row"
          alignItems="center"
          spacing={2}
          onClick={() => setSelectedCategory(category.name)}
          sx={{
            cursor: "pointer",
            px: 2,
            py: 1.4,
            borderRadius: "12px",
            mb: 0.8,
            transition: "0.3s",
            backgroundColor:
              selectedCategory === category.name ? "#272727" : "transparent",
            "&:hover": {
              backgroundColor: "#272727",
            },
          }}
        >
          <Typography
            sx={{
              color:
                selectedCategory === category.name ? "#ff0000" : "#ffffff",
              display: "flex",
              alignItems: "center",
              fontSize: "22px",
            }}
          >
            {category.icon}
          </Typography>

          <Typography
            sx={{
              color: "#ffffff",
              fontWeight: selectedCategory === category.name ? 600 : 400,
              fontSize: "15px",
            }}
          >
            {category.name}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
}

export default Sidebar;