import React, { useContext, useState } from "react";
import styled from "styled-components";
import Color from "../Color/Color";
import { MaCaveAVinContext } from "../../../Context/MaCaveAVinContext";

function WineShowed() {
  const context = useContext(MaCaveAVinContext);
  const showed = context.WineContext.showed;

  if (showed) {
    const [quantity, setQuantity] = useState(parseInt(showed.quantity));

    function editQuantity(delta) {
      if (delta === -1 && quantity === 0) {
        setQuantity(quantity);
      } else setQuantity(quantity + delta);
    }
    return (
      <WineShow>
        <Color color={showed.color} />
        <WineShowTitle>
          <h2>
            {showed.name}
            {showed.biologic && "🍀"}
          </h2>
          <h2>{showed.year}</h2>
        </WineShowTitle>
        <WineOrigin>
          <p>{showed.domain}</p>
          <p>{showed.region}</p>
        </WineOrigin>
        <p>{showed.country}</p>
        <p>{showed.price}€</p>
        <p>{showed.bestAfter}</p>
        <p>{showed.bestBefore}</p>
        <p>{showed.tag}</p>
        <WineShowButtons>
          <WineShowButton onClick={() => editQuantity(-1)}>-</WineShowButton>
          <p>
            <b>{quantity}</b> en stock
          </p>
          <WineShowButton onClick={() => editQuantity(+1)}>+</WineShowButton>
        </WineShowButtons>
      </WineShow>
    );
  } else {
    return <WineShow></WineShow>;
  }
}

export default WineShowed;

const WineShow = styled.div`
  width: 21%;
  margin: 10px;
  border: 1px solid black;
  padding: 5px;
  position: fixed;
  height: 80%;
  z-index: 1;
  bottom: 50px;
  top: 50px;
`;

const WineShowTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const WineOrigin = styled.div`
  display: flex;
  justify-content: space-between;
`;

const WineShowButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  position: relative;
  bottom: 5px;
`;

const WineShowButton = styled.div`
  width: 25px;
  height: 25px;
  background-color: #ac1c35;
  border: 2px solid #ac1c35;
  border-radius: 5px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  :hover {
    background-color: white;
    color: #ac1c35;
  }
`;
