import React from "react";
import styled from "styled-components";

function Color({ color }) {
    return <WineColor color={color} />;
}

export default Color;

const WineColor = styled.div`
  width: 100%;
  height: 20px;
  background: ${(props) => {
    switch (props.color) {
      case "red":
        return "#ac1c35";

      case "pink":
        return "#dd81a4";

      case "white":
        return "#ede239";

      default:
        return "white";
    }
  }};
`;