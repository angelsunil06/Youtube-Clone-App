import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Box, Typography } from "@mui/material";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import VideoList from "./VideoList";

function VideoDetail() {
  const { id } = useParams();

  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items?.[0]));

    fetchFromAPI(
      `search?part=snippet&relatedToVideoId=${id}&type=video&maxResults=15`
    ).then((data) => setVideos(data.items || []));
  }, [id]);

  if (!videoDetail) return <Typography color="white">Loading...</Typography>;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        background: "#0f0f0f",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          flex: 3,
          p: 3,
        }}
      >
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          controls
          width="100%"
          height="70vh"
        />

        <Typography
          variant="h5"
          color="white"
          mt={2}
          fontWeight="bold"
        >
          {videoDetail.snippet.title}
        </Typography>

        <Typography color="gray" mt={1}>
          {videoDetail.snippet.channelTitle}
        </Typography>

        <Typography color="gray" mt={1}>
          👁 {Number(videoDetail.statistics.viewCount).toLocaleString()} Views
        </Typography>

        <Typography color="gray">
          👍 {Number(videoDetail.statistics.likeCount).toLocaleString()} Likes
        </Typography>
      </Box>

      <Box
        sx={{
          flex: 1,
          p: 2,
        }}
      >
        <VideoList videos={videos} />
      </Box>
    </Box>
  );
}

export default VideoDetail;