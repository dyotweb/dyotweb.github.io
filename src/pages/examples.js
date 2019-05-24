import React from "react";
import { ThemeContext } from "../layouts";
import Article from "../components/Article";
import Example from "../components/Section/Example";

const ServicesPage = () => (
  <React.Fragment>
    <ThemeContext.Consumer>
      {theme => (
        <Article theme={theme}>
          <Example theme={theme} />
        </Article>
      )}
    </ThemeContext.Consumer>
  </React.Fragment>
);

export default ServicesPage;
