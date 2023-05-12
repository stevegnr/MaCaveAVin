import React from "react";
import styled from "styled-components";
import Jokes from "../../utils/Jokes/Jokes";

function Footer() {
  return <Foot><Jokes/></Foot>;
}

export default Footer;

const Foot = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  height: 50px;
  background-color: #ac1c35;
  color: white;
  font-size: 20px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding-right: 30px;
`;
