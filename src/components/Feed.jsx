import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

import Sidebar from "./Sidebar";
import VideoList from "./VideoList";
import { fetchFromAPI } from "../utils/fetchFromAPI";

function Feed() {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(
      `search?part=snippet&q=${selectedCategory}&maxResults=24`
    ).then((data) => {
      setVideos(data?.items || []);
    });
  }, [selectedCategory]);

  return (
    <Box
      sx={{
        display: "flex",
        background: "#0f0f0f",
        minHeight: "calc(100vh - 70px)",
      }}
    >
      {/* Sidebar */}
      <Box
        sx={{
          flex: { md: "0 0 220px" },
          borderRight: "1px solid #272727",
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </Box>

      {/* Videos */}
      <Box
        sx={{
          flex: 1,
          px: 3,
          py: 2,
          overflowY: "auto",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#fff",
            fontWeight: "bold",
            mb: 3,
            fontSize: {
              xs: "1.8rem",
              md: "2.2rem",
            },
          }}
        >
          {selectedCategory}
          <span style={{ color: "#ff0000" }}> Videos</span>
        </Typography>

        <VideoList videos={videos} />
      </Box>
    </Box>
  );
}

export default Feed;