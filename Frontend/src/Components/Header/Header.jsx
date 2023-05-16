import React, { useContext } from "react";
import styled from "styled-components";
import Modal from "../Modal/WineModal";
import { MaCaveAVinContext } from "../../../Context/MaCaveAVinContext";


function Header() {
    const context = useContext(MaCaveAVinContext);
    const { showWineModal, setShowWineModal } = context.WineModalContext;

  return (
    <Menu>
      <Banner>
        <h1>🍷 Ma Cave à Vin</h1>
        <AddRef onClick={() => setShowWineModal(true)}>+</AddRef>
      </Banner>
      <Modal
        title="Nouvelle référence"
        onClose={() => setShowWineModal(false)}></Modal>
    </Menu>
  );
}

export default Header;

const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  background-color: #ac1c35;
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

const Menu = styled.div``;

const AddRef = styled.div`
  width: 30px;
  height: 30px;
  border: 5px solid white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3em;
  margin-right: 30px;
`;
