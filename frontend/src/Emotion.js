import React from "react";

const getEmotions = (person) =>
  Object.entries(person.faceAttributes.emotion).sort((a, b) => b[1] - a[1]);

function Emotion({ data }) {
  return (
    <div>
      {data.length > 0
        ? data.map((person, index) => {
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
        : "No data available."}
    </div>
  );
}

export default Emotion;
