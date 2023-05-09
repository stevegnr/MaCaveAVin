import React, { useRef, useState } from "react";
import styled from "styled-components";
import Modal from "../Modal/WineModal";

function Header() {
  const [show, setShow] = useState(false);

  return (
    <Menu >
      <Banner>
        <h1>🍷 Ma Cave à Vin</h1>
        <button onClick={() => setShow(true)}>Ajouter une référence</button>
      </Banner>
      <Modal
        title="Nouvelle référence"
        show={show}
        onClose={() => setShow(false)}
      ></Modal>
    </Menu>
  );
}

export default Header;

const Banner = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  background: linear-gradient(#ac1c35, #bc1124);
  color: white;
  border: 1px solid black;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
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

const Menu = styled.div`
  display: flex;
  justify-content: space;
`