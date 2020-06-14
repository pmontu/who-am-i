import React, { useState } from "react";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import { postImg } from "./actions";
import { CircularProgress } from "@material-ui/core/";
import { BrowserRouter as Router } from "react-router-dom";
import { usePageViews } from "./hooks";

const getEmotions = (person) =>
  Object.entries(person.faceAttributes.emotion).sort((a, b) => b[1] - a[1]);

function App(props) {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  usePageViews();

  function handleTakePhoto(dataUri) {
    setIsLoading(true);
    postImg(dataUri).then((data) => {
      setResult(data);
      setIsLoading(false);
    });
  }

  return (
    <div style={classes.root}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div style={{ flex: 1 }}>
            <Camera
              onTakePhoto={(dataUri) => {
                handleTakePhoto(dataUri);
              }}
            />
          </div>
          <div>
            {result.length > 0
              ? result.map((person, index) => {
                  const emotions = getEmotions(person);
                  return (
                    <div key={index}>
                      <table>
                        <tbody>
                          <tr>
                            <td>Age</td>
                            <td>{person.faceAttributes.age}</td>
                          </tr>
                          {emotions.map((e, index) => (
                            <tr key={index}>
                              <td>{e[0]}</td>
                              <td>{e[1]}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                })
              : "No faces dedetected."}
          </div>
        </>
      )}
    </div>
  );
}

function Loading() {
  return (
    <div style={classes.center}>
      <CircularProgress />
    </div>
  );
}

const classes = {
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    position: "fixed",
  },

  center: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
};

export default () => (
  <Router basename="/who-am-i">
    <App />
  </Router>
);
