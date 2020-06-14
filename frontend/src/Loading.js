import React from "react";
import { CircularProgress } from "@material-ui/core/";

function Loading() {
  return (
    <div className="center">
      <CircularProgress />
    </div>
  );
}

export default Loading;
