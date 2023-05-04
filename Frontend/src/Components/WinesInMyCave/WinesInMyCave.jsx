import React from "react";
import styled from "styled-components";
/* import { winesList } from '../../data/wines' */
import WineReference from "../WineReference/WineReference";
import WineShowed from "../WineShowed/WineShowed";

const winesList = await fetch("http://localhost:3000/api/wines", {
  method: "GET",
}).then((winesList) => winesList.json());

function WinesInMyCave() {
  console.log(winesList[0]);
  const preview = winesList[0];

  return (
    <Main>
      <WineShowed
        key={preview.id}
        name={preview.name}
        domain={preview.domain}
        region={preview.region}
        year={preview.year}
        color={preview.color}
        price={preview.price}
        biologic={preview.biologic}
        bestAfter={preview.bestAfter}
        country={preview.country}
        cover={preview.cover}
      />
      <WinesWindow>
        {winesList.map(
          ({
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
          }) => (
            <WineReference
              key={id}
              name={name}
              domain={domain}
              region={region}
              year={year}
              color={color}
              price={price}
              biologic={biologic}
              bestAfter={bestAfter}
              country={country}
              cover={cover}
            />
          )
        )}
      </WinesWindow>
    </Main>
  );
}

export default WinesInMyCave;

const WinesWindow = styled.ul`
  height: 80vh;
  width: 75%;
  display: flex;
  flex-wrap: wrap;
  border-left: 1px solid black;
  position: fixed;
  right: 0;
`;

const Main = styled.div`
  display: flex;
`;
