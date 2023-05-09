import React, { useContext } from "react";
import styled from "styled-components";
import { WineContext } from "../../../Context/WineContext";

function WineShowed() {
  const { showed } = useContext(WineContext);

  if (showed) {
    return (
      <WineShow>
        <h2>{showed.name}</h2>
        <p>{showed.domain}</p>
        <p>{showed.region}</p>
        <p>{showed.year}</p>
        <p>{showed.color}</p>
        <p>{showed.price}€</p>
        <p>{showed.biologic}</p>
        <p>{showed.country}</p>
        <p>{showed.bestAfter}</p>
        <p>{showed.bestBefore}</p>
        <p>{showed.tag}</p>
      </WineShow>
    );
  } else {
    return <WineShow></WineShow>;
  }
}

export default WineShowed;

const WineShow = styled.div`
  width: 22%;
  padding: 20px;
`;
