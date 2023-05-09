import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import WineReference from "../WineReference/WineReference";
import WineShowed from "../WineShowed/WineShowed";
import { WineContext } from "../../../Context/WineContext";

function WinesInMyCave() {
  const [winesList, setWinesList] = useState([]);
  const [isDataLoading, setDataLoading] = useState(false);

  const { showed } = useContext(WineContext);

  const [newRef, setNewRef] = useState(false);

  useEffect(() => {
    async function fetchWine() {
      setDataLoading(true);
      const response = await fetch("http://localhost:3000/api/wines", {
        method: "GET",
      });
      const winesList = await response.json();
      setWinesList(winesList);
      setDataLoading(false);
      setNewRef(false);
    }
    fetchWine();
  }, [newRef]);

  return (
    <Main>
      <WineShowed showed={showed} />
      {isDataLoading ? (
        <div>
          <p>Chargement...</p>
        </div>
      ) : (
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
              bestBefore,
              bestAfter,
              country,
              tag,
              quantity,
            }) => (
              <WineReference
                id={id}
                name={name}
                domain={domain}
                region={region}
                year={year}
                color={color}
                price={price}
                biologic={biologic}
                bestBefore={bestBefore}
                bestAfter={bestAfter}
                country={country}
                tag={tag}
                quantity={quantity}
              />
            )
          )}
        </WinesWindow>
      )}
    </Main>
  );
}

export default WinesInMyCave;

const WinesWindow = styled.div`
  width: 75%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 10px;
`;

const Main = styled.div`
  display: flex;
  margin-top: 50px;
`;
