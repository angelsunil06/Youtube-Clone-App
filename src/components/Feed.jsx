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
        display: { md: "flex" },
      }}
    >
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { xs: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </Box>

      <Box
        p={2}
        sx={{
          overflowY: "auto",
          flex: 2,
          height: "90vh",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={3}
          color="white"
        >
          {selectedCategory}
          <span style={{ color: "#FC1503" }}> Videos</span>
        </Typography>

        <VideoList videos={videos} />
      </Box>
    </Box>
  );
}

export default Feed;