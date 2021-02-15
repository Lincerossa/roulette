import React from "react";
import sizeMe from "react-sizeme";
import Confetti from "react-confetti";

export default sizeMe({
  monitorHeight: true,
  monitorWidth: true
})(
  class GG extends React.PureComponent {
    render() {
      return (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
        >
          <Confetti  />
        </div>
      );
    }
  }
);