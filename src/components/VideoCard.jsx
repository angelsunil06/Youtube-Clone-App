import {
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

function VideoCard({ video, isVideoPage }) {
  if (!video?.snippet) return null;

  const videoId = video.id?.videoId || video.id;

  return (
    <Card
      sx={{
        display: isVideoPage ? "flex" : "block",
        width: isVideoPage ? "100%" : 330,
        backgroundColor: "#181818",
        borderRadius: 3,
        boxShadow: "none",
        transition: "0.3s",
        "&:hover": {
          transform: "scale(1.02)",
        },
      }}
    >
      <Link
        to={`/video/${videoId}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <CardMedia
          component="img"
          image={video.snippet.thumbnails.high.url}
          alt={video.snippet.title}
          sx={{
            width: isVideoPage ? 180 : "100%",
            height: isVideoPage ? 100 : 180,
          }}
        />

        <CardContent sx={{ flex: 1 }}>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            color="white"
            noWrap
          >
            {video.snippet.title}
          </Typography>

          <Typography
            variant="body2"
            color="gray"
            noWrap
          >
            {video.snippet.channelTitle}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
}

export default VideoCard;