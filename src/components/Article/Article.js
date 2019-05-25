import React from "react";
import PropTypes from "prop-types";

const Article = props => {
  const { children, theme } = props;

  return (
    <React.Fragment>
      <article className="article">{children}</article>

      {/* --- STYLES --- */}
      <style jsx>{`
        .article {
          padding-top: 0px;
          margin: 0 auto;
        }

        @from-width desktop {
          .article {
            padding-top: ${`calc(${theme.space.inset.l} * 1.5)`};
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Article.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.object.isRequired
};

export default Article;
