import React from "react";
import styled from "styled-components";
import frenchFlag from "../../assets/flag-france.png";

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
  country,
  cover,
  quantity,
}) {
  // Remplace la string 'true' ou 'false' par le boolean équivalent
  biologic = biologic === "true";

  return (
    <WineRef key={id}>
      <div>
        <Color/>
        <h3>
          {name} {biologic && "🍀"}
        </h3>
      </div>

      <p>{domain}</p>
      <p>{region}</p>
      <p>{year}</p>

      <Etiquette src={cover} />

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
  /* background-color: ${(props) =>
    props.color === "red" ? "red" : "white"}; */
  padding: 5px;
  position: relative;
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

const Color = styled.div`
  width: 100%;
  height: 20px;
  background: red;
`