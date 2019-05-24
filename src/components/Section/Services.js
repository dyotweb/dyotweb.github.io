import PropTypes from "prop-types";
import React from "react";
import Headline from "../Article/Headline";
import ServiceCard from "../ServiceCard";
import websiteIconSrc from "../../images/png/website-icon2.png";

export default class Welcome extends React.Component {
  static propTypes = {
    theme: PropTypes.object.isRequired
  };

  render() {
    const { theme } = this.props;

    return (
      <React.Fragment>
        <section>
          <header>
            <Headline title="Our Services" theme={theme} />
          </header>
          <div className="content-container">
            <p>
              Whether its designing, developing or optimizing websites, we are able to help you build your websites. Take advantage of our offerred services!
            </p>
            <div className="details-container">
              <div className="service-card-wrapper">
                <ServiceCard
                  className="my-card"
                  icon={websiteIconSrc}
                  title="Web"
                  description="Have professional, quality and secure website built for your business that will have your potential customers clicking and surfing through your website with ease!"
                />
              </div>
              <div className="service-card-wrapper">
                <ServiceCard
                  className="my-card"
                  icon={websiteIconSrc}
                  title="Mobile"
                  description="Whether it's to expand your business or creating a new business on mobile platform, our specialized team will be able to help you with all your mobile app ideas easily and seamlessly."
                />
              </div>
              <div className="service-card-wrapper">
                <ServiceCard
                  className="my-card"
                  icon={websiteIconSrc}
                  title="Analytics"
                  description="How your customer interacts with your application is important and will tell you lot about their interest! Use our reporting solution to have your web or mobile application track customers and get custom reports."
                />
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
          }

          .details-container {
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            padding: 40px 0px;
            justify-content: center;
          }

          .service-card-wrapper {
            padding: 20px;
            flex-basis: 100%;
          }

          @from-width tablet {
            .service-card-wrapper {
              flex-basis: 50%;
            }
            .details-container {
              flex-direction: row;
            }
          }

          @from-width desktop {
            .service-card-wrapper {
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
