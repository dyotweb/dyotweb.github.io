import React from "react";

const Success = () => (
  <React.Fragment>
    <div className="success">
      <h1>We appreciate your message. Our staff will email you back shortly.</h1>
    </div>
    <style jsx>{`
      .success {
        min-height: 80vh;
        display: flex;
        justify-content: center;
        align-items: center;
        animation-name: onEntry;
        animation-duration: 1s;
        flow-direction: column;
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

export default Success;
