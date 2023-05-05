import React, { useRef, useEffect } from "react";
import JSMpeg from "jsmpeg";

const JsMpegPlayer = ({ url }) => {
  const canvasRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const player = new JSMpeg.Player(url, { canvas });

    playerRef.current = player;

    return () => {
      player.destroy();
    };
  }, [url]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "100%", backgroundColor: "black" }}
    />
  );
};

export default JsMpegPlayer;
