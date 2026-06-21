"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayback = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      void audio.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <div
        style={{
          marginTop: 10,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          id="play_music"
          type="button"
          onClick={togglePlayback}
          aria-label={isPlaying ? "Pause music" : "Play music"}
          style={{
            cursor: "pointer",
            width: 50,
            height: 50,
            borderRadius: "50%",
            outline: "none",
            border: "1px solid white",
            backgroundColor: "#C78665",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            id="pause"
            src="/img/icon/1.svg"
            alt="pause"
            width={40}
            height={40}
            style={{
              display: isPlaying ? "block" : "none",
              width: "80%",
              height: "80%",
            }}
          />
          <Image
            id="play"
            src="/img/icon/2.svg"
            alt="play"
            width={40}
            height={40}
            style={{
              display: isPlaying ? "none" : "block",
              width: "80%",
              height: "80%",
            }}
          />
        </button>
      </div>
      <audio ref={audioRef} id="audio" src="/songs/love-is-in-the-air.mp3" preload="none" />
    </>
  );
}
