"use client";
import { useEffect, useState } from "react";

export default function GaliledVideo() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videos = [
    "/assets/video/gaming.mp4",
    "/assets/video/controlGame.mp4",
    "/assets/video/gameOver.mp4",
  ];
  useEffect(() => {
    const videoElement = document.getElementById("bg-video");
    const nextVideo = (currentVideo + 1) % videos.length;
    videoElement.src = videos[currentVideo];
    videoElement.play();
    const handleVideoEnd = () => {
      setCurrentVideo(nextVideo);
    };
    videoElement.addEventListener("ended", handleVideoEnd);
    if (videos[nextVideo]) {
      const nextVideoElement = document.createElement("video");
      nextVideoElement.src = videos[nextVideo];
      nextVideoElement.preload = "auto";
    }
    return () => {
      videoElement.removeEventListener("ended", handleVideoEnd);
    };
  }, [currentVideo]);
  return (
    <div className="absolute inset-0 z-[4] pointer-events-none">
      <video
        id="bg-video"
        muted
        autoPlay
        playsInline
        controls={false}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
