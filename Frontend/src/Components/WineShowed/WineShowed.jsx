import React, { useContext } from "react";
import styled from "styled-components";
import Color from "../Color/Color";
import { MaCaveAVinContext } from "../../../Context/MaCaveAVinContext";

function WineShowed() {
  const context = useContext(MaCaveAVinContext)
  const showed  = context.WineContext.showed

  if (showed) {
    return (
      <WineShow>
        <Color color={showed.color} />
        <h2>{showed.name}</h2>
        <p>{showed.domain}</p>
        <p>{showed.region}</p>
        <p>{showed.year}</p>
        <p>{showed.quantity} en stock.</p>
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
  margin: 10px;
  border: 1px solid black;
  padding: 5px;
`;
