import { Box } from "@mui/material";
import VideoCard from "./VideoCard";

function VideoList({ videos }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: {
          xs: "center",
          sm: "flex-start",
        },
        gap: 3,
      }}
    >
      {videos?.map((video, index) => (
        <VideoCard
          key={video.id?.videoId || index}
          video={video}
        />
      ))}
    </Box>
  );
}

export default VideoList;