import React, { useEffect, useCallback } from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import InsertEmoticonRoundedIcon from "@material-ui/icons/InsertEmoticonRounded";
import GitHubIcon from "@material-ui/icons/GitHub";
import { useHistory } from "react-router-dom";
import { useIntialValue } from "./hooks";

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
