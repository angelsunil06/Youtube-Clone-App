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
      .then((data) => {
        setVideoDetail(data.items?.[0]);
      })
      .catch((err) => console.error(err));

    fetchFromAPI(
      `search?part=snippet&relatedToVideoId=${id}&type=video&maxResults=15`
    )
      .then((data) => {
        setVideos(data.items || []);
      })
      .catch((err) => console.error(err));
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
        background: "#0f0f0f",
        display: { xs: "block", md: "flex" },
        p: 2,
        gap: 3,
      }}
    >
      <Box flex={2}>
        <iframe
          width="100%"
          height="500"
          src={`https://www.youtube.com/embed/${id}`}
          title={videoDetail.snippet.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ borderRadius: "10px" }}
        ></iframe>

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
          👁 {videoDetail.statistics?.viewCount
            ? Number(videoDetail.statistics.viewCount).toLocaleString()
            : "0"}{" "}
          Views
        </Typography>

        <Typography color="gray">
          👍 {videoDetail.statistics?.likeCount
            ? Number(videoDetail.statistics.likeCount).toLocaleString()
            : "Hidden"}{" "}
          Likes
        </Typography>
      </Box>

      <Box flex={1}>
        <VideoList videos={videos} />
      </Box>
    </Box>
  );
}

export default VideoDetail;