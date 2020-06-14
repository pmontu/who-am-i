import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PRODUCTION } from "./config";
import ReactGA from "react-ga";
ReactGA.initialize("UA-169321690-1");

export function usePageViews() {
  let location = useLocation();
  useEffect(() => {
    if (PRODUCTION) {
      const url = `${location.pathname}${location.search}`;
      ReactGA.pageview(url);
    }
  }, [location]);
}

export function useIntialValue() {
  const location = useLocation();
  let initialValue = 0;
  if (location.pathname === "/") initialValue = 0;
  else if (location.pathname === "/face-capture") initialValue = 1;
  else if (location.pathname === "/result") initialValue = 1;
  else if (location.pathname === "/about") initialValue = 2;
  return initialValue;
}
