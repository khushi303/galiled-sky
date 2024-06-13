"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

export default function GaliledVideo() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videos = [
    "/assets/video/gaming.mp4",
    "/assets/video/gaming.mp4",
    "/assets/video/gaming.mp4",
  ];
  useEffect(() => {
    const videoElement = document.getElementById("background-video");
    videoElement.src = videos[currentVideo];
    videoElement.play();
    videoElement.addEventListener("ended", () => {
      setCurrentVideo((currentVideo + 1) % videos.length);
      videoElement.src = videos[currentVideo];
      videoElement.play();
    });
  }, [currentVideo]);
  return (
    <div className="absolute inset-0 z-[1] pointer-events-none">
      <video
        id="background-video"
        muted
        autoPlay
        playsInline
        controls={false}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
