import React, { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

// const getEmotions = (person) =>
//   Object.entries(person.faceAttributes.emotion).sort((a, b) => b[1] - a[1]);

// import { postImg } from "./actions";
// setIsLoading(true);
// postImg(dataUri).then((data) => {
//   setIsLoading(false);
// });

function Emotion() {
  const location = useLocation();
  const b64_img = (location.state || {}).b64_img;
  const history = useHistory();

  useEffect(() => {
    if (!b64_img) history.push("/face-capture");
  }, [b64_img, history]);

  return (
    <div className="center">
      <img src={b64_img} alt="selfi" />
    </div>
  );
  //   return (
  //     <div>
  //       {data.length > 0
  //         ? data.map((person, index) => {
  //             const emotions = getEmotions(person);
  //             return (
  //               <div key={index}>
  //                 <table>
  //                   <tbody>
  //                     <tr>
  //                       <td>Age</td>
  //                       <td>{person.faceAttributes.age}</td>
  //                     </tr>
  //                     {emotions.map((e, index) => (
  //                       <tr key={index}>
  //                         <td>{e[0]}</td>
  //                         <td>{e[1]}</td>
  //                       </tr>
  //                     ))}
  //                   </tbody>
  //                 </table>
  //               </div>
  //             );
  //           })
  //         : "No data available."}
  //     </div>
  //   );
}

export default Emotion;
