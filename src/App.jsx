import { Routes, Route } from "react-router-dom";

import TopBar from "./components/TopBar";
import Feed from "./components/Feed";
import SearchFeed from "./components/SearchFeed";
import VideoDetail from "./components/VideoDetail";
import ChannelDetail from "./components/ChannelDetail";

function App() {
  return (
    <>
      <TopBar />

      <Routes>
        <Route path="/" element={<Feed />} />

        <Route
          path="/search/:searchTerm"
          element={<SearchFeed />}
        />

        <Route
          path="/video/:id"
          element={<VideoDetail />}
        />

        <Route
          path="/channel/:id"
          element={<ChannelDetail />}
        />
      </Routes>
    </>
  );
}

export default App;