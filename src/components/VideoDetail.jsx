import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

  if (!videoDetail) {
    return (
      <Typography color="white" p={3}>
        Loading...
      </Typography>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "95vh",
        backgroundColor: "#0f0f0f",
        display: { xs: "block", lg: "flex" },
        p: 2,
      }}
    >
      <Box flex={2}>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            paddingTop: "56.25%",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            title={videoDetail.snippet.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "none",
            }}
          />
        </Box>

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
          👁{" "}
          {Number(videoDetail.statistics?.viewCount || 0).toLocaleString()}{" "}
          Views
        </Typography>

        <Typography color="gray">
          👍{" "}
          {Number(videoDetail.statistics?.likeCount || 0).toLocaleString()}{" "}
          Likes
        </Typography>
      </Box>

      <Box
        px={2}
        py={{ md: 1 }}
        flex={1}
      >
        <VideoList videos={videos} />
      </Box>
    </Box>
  );
}

export default VideoDetail;