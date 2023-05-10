import React from "react";
import styled, { keyframes } from "styled-components";

function Loader() {
  return <Loading />;
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
  animation: ${rotate} 0.5s infinite linear;
  height: 50px;
  width: 50px;
`;
