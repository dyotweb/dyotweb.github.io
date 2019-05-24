import React from "react";
import { ThemeContext } from "../layouts";
import Article from "../components/Article";
import Services from "../components/Section/Services";

const ServicesPage = () => (
  <React.Fragment>
    <ThemeContext.Consumer>
      {theme => (
        <Article theme={theme}>
          <Services theme={theme} />
        </Article>
      )}
    </ThemeContext.Consumer>
  </React.Fragment>
);

export default ServicesPage;
