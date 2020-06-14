import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="center" style={{ padding: 20 }}>
    <p>
      This project is a proof of concept to integrate face recognition machine
      learning service that is provided by a cloud service such as azure with
      our application.
    </p>
    <p>
      This application estimates your age and emotions using azure face api.{" "}
      <Link to="/face-capture">Click here to try.</Link>
    </p>
  </div>
);
