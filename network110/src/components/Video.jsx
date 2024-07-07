import React from "react";
import Video from "../assets/videos/video.mp4";
const VideoPlayer = () => {
  return (
    <div
      style={{
        width: "100%",
        paddingTop: "50px",
      }}
      className="container">
      <video
        style={{ borderRadius: "20px" }}
        width="100%"
        controls
        autoPlay
        muted>
        <source src={Video} type="video/mp4" />
        Your browser does not support the video
        tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
