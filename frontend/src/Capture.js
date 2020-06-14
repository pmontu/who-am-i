import React from "react";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import { useHistory } from "react-router-dom";
import AutoSizer from "react-virtualized-auto-sizer";

function Capture(props) {
  const history = useHistory();

  function handleTakePhoto(dataUri) {
    history.push("/result", { b64_img: dataUri });
  }

  return (
    <AutoSizer>
      {({ height, width }) => (
        <div style={{ width: width, height: height }}>
          <Camera
            onTakePhoto={(dataUri) => {
              handleTakePhoto(dataUri);
            }}
          />
        </div>
      )}
    </AutoSizer>
  );
}

export default Capture;
