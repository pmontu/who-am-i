import React, { useEffect, useCallback } from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import InsertEmoticonRoundedIcon from "@material-ui/icons/InsertEmoticonRounded";
import GitHubIcon from "@material-ui/icons/GitHub";
import { useHistory, useLocation } from "react-router-dom";

export default function CenteredTabs() {
  const history = useHistory();
  const selectedLocation = useIntialValue();
  const [value, setValue] = React.useState(selectedLocation);

  const changeLocation = useCallback(
    (newValue) => {
      if (newValue === 0) history.push("/");
      else if (newValue === 1) history.push("/face-capture");
      else if (newValue === 2) history.push("/about");
    },
    [history]
  );

  useEffect(() => {
    setValue(selectedLocation);
  }, [selectedLocation]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    changeLocation(newValue);
  };

  return (
    <Paper>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab icon={<HomeRoundedIcon />} />
        <Tab icon={<InsertEmoticonRoundedIcon />} />
        <Tab icon={<GitHubIcon />} />
      </Tabs>
    </Paper>
  );
}

function useIntialValue() {
  const location = useLocation();
  let val = 0;
  if (location.pathname === "/") val = 0;
  else if (location.pathname === "/face-capture") val = 1;
  else if (location.pathname === "/result") val = 1;
  else if (location.pathname === "/about") val = 2;
  return val;
}
