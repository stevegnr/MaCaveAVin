import React from "react";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWineBottle } from "@fortawesome/free-solid-svg-icons";

function Loader() {
  return (
    <Loading>
      <FontAwesomeIcon
        icon={faWineBottle}
        rotation={90}
        size="2xl"
      />
    </Loading>
  );
}

export default Loader;

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
 
    to {
    transform: rotate(360deg);
    }
`;

const Loading = styled.div`
  padding: 10px;
  border: 10px solid #ac1c35;
  border-bottom-color: transparent;
  border-radius: 50%;
  animation: ${rotate} 1s infinite linear;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
