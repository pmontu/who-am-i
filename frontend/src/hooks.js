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
