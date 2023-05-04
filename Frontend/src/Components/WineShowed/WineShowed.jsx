import React from "react";
import styled from "styled-components";

function WineShowed({
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
}) {
  return (
    <WineShow>
      <h2>{name}</h2>
      <p>{domain}</p>
      <p>{region}</p>
      <p>{year}</p>
      <p>{color}</p>
      <p>{price}€</p>
      <p>{biologic}</p>
      <p>{country}</p>
    </WineShow>
  );
}

export default WineShowed;

const WineShow = styled.div`
  width: 22.4%;
  height: 80vh;
`;
