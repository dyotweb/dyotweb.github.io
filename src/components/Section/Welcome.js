import PropTypes from "prop-types";
import React from "react";
import Headline from "../Article/Headline";
import aboutLogSrc from "../../images/png/about-logo.png";
import Checkmark from "!svg-react-loader!../../images/svg-icons/checkmark.svg?name=checkmark";

export default class Welcome extends React.Component {
  static propTypes = {
    theme: PropTypes.object.isRequired
  };

  render() {
    const { theme } = this.props;

    const title = `We appreciate you visiting us here at DYOT!
      Our mission is to help your business grow with technology.
      In todays times, customers are using technology to find, compare and review local businesses constantly.
      How a business looks online says a lot about its quality.
      Increase your potential clients by having a professional website tailored to your needs. Lets Grow Together.
    `;

    return (
      <React.Fragment>
        <section>
          <header>
            <Headline title="Welcome" description="Our mission is to help your business grow with technology" theme={theme} />
          </header>
          <div className="content-container">
            <p>
              We appreciate you visiting us here at <strong>DYOT</strong>! Customer's today are using technology to find, compare and review local businesses constantly.
              How a business looks online says a lot about its quality. We want to help you take advantage of technology.
            </p>
            <div className="details-container">
              <div>
                <img src={aboutLogSrc} />
              </div>
              <div>
                <strong>Increase your business potential by</strong>
                <ul className="welcome-list">
                  <li>
                    <Checkmark />
                    Having a professional website.
                  </li>
                  <li>
                    <Checkmark />
                    Increasing your website's visibility in search engine such as Google, Bing, and Yahoo.
                  </li>
                  <li>
                    <Checkmark />
                    Knowing how your user interacts with your website through our detailed analytical reports.
                  </li>
                </ul>
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
          }

          .details-container {
            display: flex;
            padding: 40px 0px;
            div {
              width: 50%;
            }
            img {
              width: 100%;
            }
          }

          ul {
            padding: 30px 0px 0px 0px;
            li {
              padding-bottom: 20px;
              list-style: none;
            }

            :global(svg) {
              width: 16px;
              height: 16px;
              margin-right: 10px;
            }
          }
           @from-width tablet {
            .details-container img {
              height: 100%;
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
