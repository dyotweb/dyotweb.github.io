import React from "react";
import PropTypes from "prop-types";

import BannerModel from "!svg-react-loader!../../images/svg-icons/banner-model.svg?name=bannerModel";

const Hero = props => {
  const { scrollToContent, theme } = props;

  return (
    <React.Fragment>
      <section className="hero">
        <div className="banner">
          <BannerModel />
        </div>
        <div className="logo-text">
          <h1>
            Website and Mobile Solutions
            <div>
              <strong>DYOT</strong>
            </div>
          </h1>
          <button onClick={scrollToContent} aria-label="Our Services">
            Read More
          </button>
        </div>
      </section>

      {/* --- STYLES --- */}
      <style jsx>{`
        .hero {
          align-items: center;
          background: ${theme.hero.background};
          color: ${theme.text.color.primaryInverse};
          display: flex;
          flex-flow: column nowrap;
          justify-content: center;
          min-height: 100vh;
          height: 100px;
          padding: ${theme.space.inset.s};
          padding-top: ${theme.header.height.homepage};
        }

        .logo-text {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-basis: 50%;
        }

        .banner {
          width: 50%;
          padding: 10px;
          flex-basis: 50%;
        }

        h1 {
          text-align: center;
          font-size: ${theme.hero.h1.size};
          margin: ${theme.space.stack.l};
          color: ${theme.hero.h1.color};
          line-height: ${theme.hero.h1.lineHeight};
          text-remove-gap: both 0 "Open Sans";

          :global(strong) {
            position: relative;

            &::after,
            &::before {
              content: "›";
              color: ${theme.text.color.attention};
              margin: 0 ${theme.space.xs} 0 0;
              text-shadow: 0 0 ${theme.space.s} ${theme.color.neutral.gray.k};
            }
            &::after {
              content: "‹";
              margin: 0 0 0 ${theme.space.xs};
            }
          }
        }

        button {
          background: ${theme.background.color.brand};
          border: 0;
          border-radius: 30px;
          font-size: ${theme.font.size.xs};
          padding: ${theme.space.s} ${theme.space.m};
          cursor: pointer;
          color: ${theme.text.color.primaryInverse};

          &:focus {
            outline-style: none;
            background: ${theme.color.brand.primary.active};
          }

          &:hover {
            background: rgb(63,152,235);
            border: 1px solid white;
          }

          :global(svg) {
            position: relative;
            top: 5px;
            fill: ${theme.color.neutral.white};
            stroke-width: 40;
            stroke: ${theme.color.neutral.white};
            animation-duration: ${theme.time.duration.long};
            animation-name: buttonIconMove;
            animation-iteration-count: infinite;
          }
        }

        @keyframes buttonIconMove {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }

        @from-width tablet {
          .hero {
          }

          h1 {
            max-width: 90%;
            font-size: ${`calc(${theme.hero.h1.size} * 1.1)`};
          }

          button {
            font-size: ${theme.font.size.m};
          }
        }

        @from-width desktop {
          .hero {
            flex-direction: row-reverse;
          }

          .logo-text {
            width: 50%;
          }

          h1 {
            max-width: 80%;
            font-size: ${`calc(${theme.hero.h1.size} * 1.1)`};
          }

          button {
            font-size: ${theme.font.size.m};
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Hero.propTypes = {
  scrollToContent: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired
};

export default Hero;
