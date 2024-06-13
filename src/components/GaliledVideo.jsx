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
    if (currentVideo > 0) {
      // Check if it's not the first video
      setIsFading(true); // Start fading in before changing the video
      setTimeout(() => {
        videoElement.src = videos[currentVideo];
        videoElement.play();
        setIsFading(false); // End fading in after the video starts
      }, 200); // Duration of fade-in effect
    } else {
      videoElement.src = videos[currentVideo];
      videoElement.play();
    }

    const handleVideoEnd = () => {
      setCurrentVideo((prevVideo) => (prevVideo + 1) % videos.length);
    };

    videoElement.addEventListener("ended", handleVideoEnd);

    // Cleanup function to remove the event listener
    return () => {
      videoElement.removeEventListener("ended", handleVideoEnd);
    };
  }, [currentVideo]);

  return (
    <div className="absolute inset-0 z-[1] pointer-events-none">
      <video
        id="bg-video"
        muted
        autoPlay
        playsInline
        controls={false}
        className={`w-full h-full object-cover transition-opacity duration-1000 ${
          isFading ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
}
