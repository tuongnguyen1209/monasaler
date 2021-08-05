import React, { useRef, useState } from "react";
import useUserMedia from "../../Hooks/use_openCamera";
import { WrapCamera } from "./ScanPageStyle";
import { ReactComponent as Focus } from "../../assets/img/focus.svg";
import { Link } from "react-router-dom";

const CAPTURE_OPTIONS = {
  audio: false,
  video: { facingMode: "environment" },
};
const ScanPage = () => {
  const canvasRef = useRef();
  const videoRef = useRef();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const mediaStream = useUserMedia(CAPTURE_OPTIONS);
  if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
    videoRef.current.srcObject = mediaStream;
  }

  const handleCanPlay = () => {
    setIsVideoPlaying(true);
    videoRef.current.play();
  };

  return (
    <WrapCamera>
      <div className="wrapVideo">
        <video
          ref={videoRef}
          onCanPlay={handleCanPlay}
          autoPlay
          playsInline
        ></video>
      </div>

      <div className="container">
        <p>Vui lòng quét mã vạch trên sản phẩm hoặc mã QR</p>
        <div className="image">
          <svg className="svg">
            <Focus />
          </svg>
          <div className="line"></div>
        </div>
        <Link to="/">
          <button className="btn">Quay lại</button>
        </Link>
      </div>
    </WrapCamera>
  );
};

export default ScanPage;
