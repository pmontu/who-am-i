import React, { useState } from "react";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import { postImg } from "./actions";
import { CircularProgress } from "@material-ui/core/";
import { BrowserRouter as Router } from "react-router-dom";
import { usePageViews } from "./hooks";
import AutoSizer from "react-virtualized-auto-sizer";

function App(props) {
  const [isLoading, setIsLoading] = useState(false);
  usePageViews();

  function handleTakePhoto(dataUri) {
    setIsLoading(true);
    postImg(dataUri).then((data) => {
      // setResult(data);
      console.log(data);
      setIsLoading(false);
    });
  }

  return (
    <div style={classes.root}>
      {isLoading ? (
        <Loading />
      ) : (
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
      )}
    </div>
  );
}

function Loading() {
  return (
    <div className="center">
      <CircularProgress />
    </div>
  );
}

const classes = {
  root: {
    display: "flex",
    flex: 1,
  },
};

export default () => (
  <Router basename="/who-am-i">
    <App />
  </Router>
);
