import ReactGA from "react-ga4";

const GA_ID = process.env.REACT_APP_GA_ID!;

export const initGA = () => {
  if (GA_ID) {
    ReactGA.initialize(GA_ID);
  } else {
    console.warn("GA ID is not defined");
  }
};

export const trackPageview = (path: string) => {
  ReactGA.send({ hitType: "pageview", page: path });
};