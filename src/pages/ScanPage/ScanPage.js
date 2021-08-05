import React, { useRef, useState } from "react";
import useUserMedia from "../../Hooks/use_openCamera";
import { WrapCamera } from "./ScanPageStyle";
import { ReactComponent as Focus } from "../../assets/img/focus.svg";
import { Link } from "react-router-dom";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

const CAPTURE_OPTIONS = {
  audio: false,
  video: { facingMode: "environment" },
};
const ScanPage = () => {
  const canvasRef = useRef();
  const videoRef = useRef();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [data, setData] = useState("Not Found");

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
        <BarcodeScannerComponent
          width="100%"
          height="100%"
          onUpdate={(err, result) => {
            if (result) setData(result.text);
            else setData("Not Found");
          }}
        />
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
