import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { postImg } from "./actions";
import Loading from "./Loading";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const getEmotions = (person) =>
  Object.entries(person.faceAttributes.emotion)
    .map((e) => [e[0], Math.round(e[1] * 100, 0)])
    .filter((e) => e[1] !== 0)
    .sort((a, b) => b[1] - a[1]);

function Emotion() {
  const location = useLocation();
  const b64_img = (location.state || {}).b64_img;
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!b64_img) history.push("/face-capture");
    else {
      setIsLoading(true);
      postImg(b64_img).then((data) => {
        setIsLoading(false);
        setData(data);
      });
    }
  }, [b64_img, history]);

  return (
    <div
      className="center"
      style={{
        flex: 1,
        display: "flex",
      }}
    >
      {isLoading ? (
        <Loading />
      ) : data.length > 0 ? (
        <>
          {data.map((person, index) => {
            const emotions = getEmotions(person);
            const age = person.faceAttributes.age;
            return (
              <div key={index} style={classes.emotionBar}>
                <div style={{ display: "flex" }} className="values">
                  <Value value={age} text={`${age} years`} key="age" />
                  {emotions.map((e, index) => (
                    <Value value={e[1]} text={e[0]} key={index} />
                  ))}
                </div>
              </div>
            );
          })}
        </>
      ) : (
        "No data available."
      )}
      <img src={b64_img} alt="selfi" />
    </div>
  );
}

function Value({ value, text }) {
  return (
    <div
      style={{
        padding: "20px 20px 20px 20px",
        width: "125px",
      }}
    >
      <CircularProgressbar value={value} text={text} />
    </div>
  );
}

const classes = {
  emotionBar: {
    flex: 1,
    display: "flex",
    overflowX: "scroll",
    width: "100%",
    justifyContent: "center",
  },
};

export default Emotion;
