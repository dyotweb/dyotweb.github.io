import React from "react";
import PropTypes from "prop-types";

const Headline = props => {
  const {
    title,
    description,
    children,
    theme
  } = props;
  return (
    <React.Fragment>
      {title ? (
        <h1>
          {title}
          <span className="underline" />
          {description ? <span className="description">{description}</span> : null}
        </h1>
      ) : <h1>{children}</h1>}

      {/* --- STYLES --- */}
      <style jsx>{`
        h1 {
          font-size: ${theme.font.size.xxl};
          margin: ${theme.space.stack.l};
          animation-name: headlineEntry;
          animation-duration: ${theme.time.duration.long};
          text-align: center;

          .underline {
            :before {
              content: "";
              display: block;
              width: 100px;
              height: 3px;
              bottom: 0;
              left: 0;
              border-top: lightblue solid 4px;
              right: 0;
              text-align: center;
              margin: 8px auto;
            }
          }

          .description {
            font-size: medium;
            padding: 4px 0px;
            font-style: italic;
          }

          :global(span) {
            font-weight: ${theme.font.weight.standard};
            display: block;
            font-size: 0.5em;
            letter-spacing: 0;
            margin: ${theme.space.stack.xs};
          }

          :global(svg) {
            height: 0.75em;
            fill: ${theme.color.brand.primary};
          }
        }

        @keyframes headlineEntry {
          from {
            opacity: 0.5;
          }
          to {
            opacity: 1;
          }
        }

        @from-width tablet {
          h1 {
            font-size: ${`calc(${theme.font.size.xl} * 1.2)`};
          }
        }

        @from-width desktop {
          h1 {
            font-size: ${`calc(${theme.font.size.xl} * 1.4)`};
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Headline.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  theme: PropTypes.object.isRequired
};

export default Headline;
