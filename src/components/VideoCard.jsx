import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Avatar,
  Stack,
} from "@mui/material";
import { Link } from "react-router-dom";

function VideoCard({ video }) {
  if (!video?.snippet) return null;

  const videoId = video.id?.videoId || video.id;

  return (
    <Card
      sx={{
        width: {
          xs: "100%",
          sm: "320px",
          md: "340px",
        },
        background: "transparent",
        boxShadow: "none",
        cursor: "pointer",
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-5px)",
        },
      }}
    >
      <Link to={`/video/${videoId}`}>
        <CardMedia
          component="img"
          image={video.snippet.thumbnails.high.url}
          alt={video.snippet.title}
          sx={{
            width: "100%",
            height: "190px",
            borderRadius: "16px",
            transition: "0.3s",
            "&:hover": {
              opacity: 0.9,
            },
          }}
        />
      </Link>

      <CardContent
        sx={{
          px: 0,
          py: 1.5,
        }}
      >
        <Stack direction="row" spacing={2}>
          <Avatar
            sx={{
              bgcolor: "#ff0000",
              width: 42,
              height: 42,
              fontWeight: "bold",
            }}
          >
            {video.snippet.channelTitle.charAt(0)}
          </Avatar>

          <Stack spacing={0.5}>
            <Typography
              sx={{
                color: "#fff",
                fontWeight: 600,
                fontSize: "15px",
                lineHeight: 1.4,
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {video.snippet.title}
            </Typography>

            <Typography
              sx={{
                color: "#aaa",
                fontSize: "14px",
              }}
            >
              {video.snippet.channelTitle}
            </Typography>

            <Typography
              sx={{
                color: "#777",
                fontSize: "13px",
              }}
            >
              YouTube Clone
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default VideoCard;