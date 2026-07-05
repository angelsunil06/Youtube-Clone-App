import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import VideoCard from "./VideoCard";

function VideoList({ videos }) {
  const location = useLocation();
  const isVideoPage = location.pathname.includes("/video/");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isVideoPage ? "column" : "row",
        flexWrap: isVideoPage ? "nowrap" : "wrap",
        justifyContent: isVideoPage ? "flex-start" : "center",
        alignItems: isVideoPage ? "stretch" : "center",
        gap: 2,
        width: "100%",
      }}
    >
      {videos?.map((video, index) => (
        <VideoCard
          key={video.id?.videoId || video.id || index}
          video={video}
          isVideoPage={isVideoPage}
        />
      ))}
    </Box>
  );
}

export default VideoList;