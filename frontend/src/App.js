import React, { useState } from "react";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import { postImg } from "./actions";

function App(props) {
  const [age, setAge] = useState(null);
  async function handleTakePhoto(dataUri) {
    const res = await postImg(dataUri);
    console.log({ res });
    // setAge(res.faceAttributes.age);
  }

  return (
    <>
      <Camera
        onTakePhoto={(dataUri) => {
          handleTakePhoto(dataUri);
        }}
      />
      <h1>{age}</h1>
    </>
  );
}
export default App;
