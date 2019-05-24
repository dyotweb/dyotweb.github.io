import PropTypes from "prop-types";
import React from "react";
import Headline from "../Article/Headline";
import Contact from "../../components/Contact";

export default class ContactSection extends React.Component {
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
              title="Contact Us"
              description="We look forward to hearing from you!"
              theme={theme}
            />
          </header>
          <div className="content-container">
            <Contact />
          </div>
        </section>
        <style jsx>{`
          section {
            padding-top: ${theme.space.l};
            padding-bottom: ${theme.space.l};
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
