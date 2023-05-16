import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBacon,
  faCheese,
  faCow,
  faDrumstickBite,
  faFish,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";

function BestWith({ pairing }) {
  return (
    <Pairing>
      <PairingTitle>Accords mets/vins : </PairingTitle>
      <PairingIcons>
        {pairing.includes("beef") && (
          <FontAwesomeIcon
            icon={faCow}
            size="xl"
            style={{ color: "#ac1c35" }}
          />
        )}

        {pairing.includes("fish") && (
          <FontAwesomeIcon
            icon={faFish}
            size="xl"
            style={{ color: "#ac1c35" }}
          />
        )}
        {pairing.includes("chicken") && (
          <FontAwesomeIcon
            icon={faDrumstickBite}
            size="xl"
            style={{ color: "#ac1c35" }}
          />
        )}
        {pairing.includes("pork") && (
          <FontAwesomeIcon
            icon={faBacon}
            size="xl"
            style={{ color: "#ac1c35" }}
          />
        )}
        {pairing.includes("vegetable") && (
          <FontAwesomeIcon
            icon={faSeedling}
            style={{ color: "#ac1c35" }}
            size="xl"
          />
        )}
        {pairing.includes("cheese") && (
          <FontAwesomeIcon
            icon={faCheese}
            style={{ color: "#ac1c35" }}
            size="xl"
          />)}
      </PairingIcons>
    </Pairing>
  );
}

export default BestWith;

const Pairing = styled.div`
  margin-top: 20px;
  height: 35%;
`;

const PairingIcons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin-left: 5%;
  margin-top: 5px;
`;

const PairingTitle = styled.h4`
  text-align: center;
`;
