import React, { useRef, useState } from "react";
import styled from "styled-components";
import Modal from "../Modal/WineModal";

function Header() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Banner>
        <h1>🍷 Ma Cave à Vin</h1>
        <button onClick={() => setShow(true)}>Show Modal</button>
      </Banner>
      <Modal
        title="My Modal"
        show={show}
        onClose={() => setShow(false)}
      ><p>This is my modal body</p></Modal>
    </>
  );
}

export default Header;

const Banner = styled.div`
  display: flex;
  align-items: center;
  height: 10vh;
  background: linear-gradient(#ac1c35, #bc1124);
  color: white;
  border: 1px solid black;
`;

const WineModal = styled.div`
  display: none;
  /* Hidden by default */
  position: fixed;
  /* Stay in place */
  z-index: 1;
  /* Sit on top */
  left: 0;
  top: 0;
  width: 100%;
  /* Full width */
  height: 100%;
  /* Full height */
  overflow: auto;
  /* Enable scroll if needed */
  background-color: rgb(0, 0, 0);
  /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4);
  /* Black w/ opacity */
`;
