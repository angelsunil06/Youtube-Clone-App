import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import VideoList from "./VideoList";

function SearchFeed() {
  const { searchTerm } = useParams();

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(
      `search?part=snippet&q=${searchTerm}&maxResults=24`
    ).then((data) => {
      setVideos(data?.items || []);
    });
  }, [searchTerm]);

  return (
    <Box p={3}>
      <Typography
        variant="h4"
        color="white"
        mb={3}
      >
        Search Results for{" "}
        <span style={{ color: "#FC1503" }}>
          {searchTerm}
        </span>
      </Typography>

      <VideoList videos={videos} />
    </Box>
  );
}

export default SearchFeed;