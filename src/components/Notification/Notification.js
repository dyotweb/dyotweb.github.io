import React from "react";
import PropTypes from "prop-types";

export default class Notification extends React.Component {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    message: PropTypes.string.isRequired,
    type: PropTypes.string
  };

  static defaultProps = {
    type: "info"
  };

  render() {
    const { message, type, theme } = this.props;

    return (
      <React.Fragment>
        <div className={`notification-header ${type}`}>{message}</div>
        <style jsx>{`
          .notification-header {
            display: flex;
            justify-content: center;
            align-items: center;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 1000;
            width: 100%;
            height: 70px;
            animation-name: slideDown;
            animation-duration: ${theme.time.duration.default};
            background: lightblue;
          }

          .info {
            background: lightblue;
          }

          .success {
            background: lightgreen;
          }

          .error {
            background: red;
          }

          @keyframes slideDown {
            from {
              height: 0;
            }
            to {
              height: 70px;
            }
          }
        `}</style>
      </React.Fragment>
    );
  }
}
