"use client";
import { useEffect, useState } from "react";

export default function GaliledVideo() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const videos = [
    "/assets/video/gaming.mp4",
    "/assets/video/controlGame.mp4",
    "/assets/video/gameOver.mp4",
  ];

  useEffect(() => {
    const videoElement = document.getElementById("bg-video");
    videoElement.src = videos[currentVideo];
    videoElement.play();
    setIsFading(true); // Start fading in
    videoElement.addEventListener("ended", () => {
      setCurrentVideo((prevVideo) => (prevVideo + 1) % videos.length);
      setIsFading(false); // Reset fade-in effect for next video
    });
  }, [currentVideo]);

  useEffect(() => {
    if (isFading) {
      const timer = setTimeout(() => {
        setIsFading(false);
      }, 1000); // Duration of fade-in effect
      return () => clearTimeout(timer);
    }
  }, [isFading]);

  return (
    <div className="absolute inset-0 z-[1] pointer-events-none">
      <video
        id="bg-video"
        muted
        autoPlay
        playsInline
        controls={false}
        className={`w-full h-full object-cover ${isFading ? "fade-in" : ""}`}
      />
    </div>
  );
}
