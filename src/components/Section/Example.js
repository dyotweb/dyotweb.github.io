import PropTypes from "prop-types";
import React from "react";
import Headline from "../Article/Headline";
import websiteExample1 from "../../images/jpg/website-example-1.jpg";
import websiteExample2 from "../../images/jpg/website-example-2.jpg";
import websiteExample3 from "../../images/jpg/website-example-3.jpg";
import websiteExample4 from "../../images/jpg/website-example-4.jpg";
import websiteExample5 from "../../images/jpg/website-example-5.jpg";
import websiteExample6 from "../../images/jpg/website-example-6.jpg";

const ImageCard = ({ src, ...rest }) => (
  <div {...rest}>
    <img src={src} style={{ width: "100%", height: "100%" }} />
  </div>
);

ImageCard.propTypes = {
  src: PropTypes.string.isRequired
};

export default class Example extends React.Component {
  static propTypes = {
    theme: PropTypes.object.isRequired
  };

  render() {
    const { theme } = this.props;

    return (
      <React.Fragment>
        <section>
          <header>
            <Headline
              title="Professional Websites"
              description="They speak for themselves."
              theme={theme}
            />
          </header>
          <div className="content-container">
            <div className="details-container">
              <div className="card-wrapper">
                <ImageCard src={websiteExample1} />
              </div>
              <div className="card-wrapper">
                <ImageCard src={websiteExample2} />
              </div>
              <div className="card-wrapper">
                <ImageCard src={websiteExample3} />
              </div>
              <div className="card-wrapper">
                <ImageCard src={websiteExample4} />
              </div>
              <div className="card-wrapper">
                <ImageCard src={websiteExample5} />
              </div>
              <div className="card-wrapper">
                <ImageCard src={websiteExample6} />
              </div>
            </div>
          </div>
        </section>
        <style jsx>{`
          section {
            padding-top: 40px;
            animation-name: onEntry;
            animation-duration: ${theme.time.duration.long};
          }

          .content-container {
            padding: 0px 40px;
            width: 100%;
            .content-description {
              text-align: center;
            }
          }

          .details-container {
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            padding: 40px 0px;
          }

          .card-wrapper {
            padding: 20px;
            flex-basis: 100%;
            height: 275px;
            width: 100%;
            :hover {
              box-shadow: 0px 0px 30px rgba(73, 78, 92, 0.15);
              transform: translateY(-10px);
              transition: 0.5s;
            }
          }

          @from-width tablet {
            .card-wrapper {
              flex-basis: 50%;
            }
            .details-container {
              flex-direction: row;
            }
          }

          @from-width desktop {
            .card-wrapper {
              flex-basis: 33%;
            }
            .details-container {
              flex-direction: row;
            }
          }
          @keyframes onEntry {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}</style>
      </React.Fragment>
    );
  }
}
