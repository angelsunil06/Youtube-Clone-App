import {
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

function VideoCard({ video }) {
  if (!video?.snippet) return null;

  return (
    <Card
      sx={{
        width: 330,
        backgroundColor: "#181818",
        boxShadow: "none",
        borderRadius: 3,
      }}
    >
      <Link to={`/video/${video.id.videoId}`}>
        <CardMedia
          component="img"
          image={video.snippet.thumbnails.high.url}
          alt={video.snippet.title}
          sx={{
            width: "100%",
            height: 180,
          }}
        />
      </Link>

      <CardContent>
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
    </Card>
  );
}

export default VideoCard;