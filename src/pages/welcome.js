import React from "react";
import { ThemeContext } from "../layouts";
import Article from "../components/Article";
import Welcome from "../components/Section/Welcome";

const AboutUs = () => (
  <React.Fragment>
    <ThemeContext.Consumer>
      {theme => (
        <Article theme={theme}>
          <Welcome theme={theme} />
        </Article>
      )}
    </ThemeContext.Consumer>
  </React.Fragment>
);

export default AboutUs;
