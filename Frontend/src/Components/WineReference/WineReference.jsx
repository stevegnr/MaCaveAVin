import React, { useContext } from "react";
import styled from "styled-components";
import frenchFlag from "../../assets/flag-france.png";
import { MaCaveAVinContext } from "../../../Context/MaCaveAVinContext";
import Color from "../Color/Color";

function WineReference({
  id,
  name,
  domain,
  region,
  year,
  color,
  price,
  biologic,
  bestAfter,
  bestBefore,
  country,
  tag,
  quantity,
}) {
  // Remplace la string 'true' ou 'false' par le boolean équivalent
  biologic = biologic === "true";
  const context = useContext(MaCaveAVinContext);
  const setShowed  = context.WineContext.setShowed;

  return (
    <WineRef
      key={id}
      onClick={() =>
        setShowed({
          id: id,
          name: name,
          domain: domain,
          region: region,
          year: year,
          color: color,
          price: price,
          biologic: biologic,
          bestAfter: bestAfter,
          bestBefore: bestBefore,
          country: country,
          tag: tag,
          quantity: quantity,
        })
      }>
      <div>
        <Color color={color} />
        <h3>
          {name} {biologic && "🍀"}
        </h3>
      </div>

      <p>{domain}</p>
      <p>{region}</p>
      <Year>
        <p>{year}</p>
        <p>
          {bestAfter} - {bestBefore}
        </p>
      </Year>

      <Etiquette src={tag} />

      <PriceAndFlag>
        <div>{country === "France" && <Flag src={frenchFlag} />}</div>
        <div>{price}€</div>
        <Quantity>x {quantity}</Quantity>
      </PriceAndFlag>
    </WineRef>
  );
}

export default WineReference;

const WineRef = styled.div`
  border: 1px solid black;
  width: 200px;
  height: 250px;
  background-color: #cababa;
  padding: 5px;
  position: relative;
  :hover {
    background-color: lightgray;
  }
`;

const Flag = styled.img`
  height: 30px;
`;

const PriceAndFlag = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
`;

const Etiquette = styled.img`
  width: 90%;
  height: 35%;
  border-radius: 5px;
  left: 50%;
  bottom: 40px;
  transform: translate(-50%);
  position: absolute;
  border: 1px solid black;
`;

const Quantity = styled.div`
  border-radius: 50%;
  border: 1px solid black;
  background-color: white;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

const Year = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 135px;
`;
