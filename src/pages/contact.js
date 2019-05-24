import React from "react";
import { ThemeContext } from "../layouts";
import Article from "../components/Article";
import Contact from "../components/Section/Contact";

const ContactPage = () => (
  <React.Fragment>
    <ThemeContext.Consumer>
      {theme => (
        <Article theme={theme}>
          <Contact theme={theme} />
        </Article>
      )}
    </ThemeContext.Consumer>
  </React.Fragment>
);

export default ContactPage;
