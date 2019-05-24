import React from "react";
import PropTypes from "prop-types";

import Headline from "../Article/Headline";
import Bodytext from "../Article/Bodytext";

const Page = props => {
  const {
    page: {
      html,
      frontmatter: { title }
    },
    theme
  } = props;

  const anchorTitle = title.toLowerCase().replace(/\s/g, "-");

  return (
    <React.Fragment>
      <section name={anchorTitle}>
        <header>
          <Headline title={title} theme={theme} />
        </header>
        <Bodytext html={html} theme={theme} />
      </section>
    </React.Fragment>
  );
};

Page.propTypes = {
  page: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default Page;
