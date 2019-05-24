import React from "react";
import PropTypes from "prop-types";

export default class ServiceCard extends React.Component {
  render() {
    const { icon, title, description, className = "" } = this.props;

    return (
      <React.Fragment>
        <div className={`service-card ${className}`}>
          <div className="service-card-header-image">{icon ? <img src={icon} /> : null}</div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <style jsx>{`
          .service-card {
            padding: 30px;
            border: 1px solid #dedede;
            text-align: center;
            height: 100%;
            width: 100%;
            :hover {
              box-shadow: 0px 0px 30px rgba(73, 78, 92, 0.15);
              transform: translateY(-10px);
              transition: 0.5s;
            }
            h2 {
              padding-bottom: 10px;
            }
            p {
              line-height: 24px;
              font-weight: lighter;
            }

            img {
              width: 80px;
              height: 80px;
            }
          }
        `}</style>
      </React.Fragment>
    );
  }
}
