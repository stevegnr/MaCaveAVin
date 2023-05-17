import React, { useContext, useEffect, useState, memo } from "react";
import styled from "styled-components";
import WineReference from "../WineReference/WineReference";
import WineShowed from "../WineShowed/WineShowed";
import { MaCaveAVinContext } from "../../../Context/MaCaveAVinContext";
import Loader from "../../utils/Loader/Loader";

function WinesInMyCave() {
  const [winesList, setWinesList] = useState([]);
  const [isDataLoading, setDataLoading] = useState(false);

  const context = useContext(MaCaveAVinContext);

  const wineShowed = context.WineContext.wineShowed;

  const newRef = context.NewRefContext.newRef;
  const { search, setSearch } = context.SearchContext;

  const { colorFilter, setColorFilter } = context.ColorFilterContext;

  useEffect(() => {
    async function fetchWine() {
      setDataLoading(true);
      const response = await fetch("http://localhost:3000/api/wines", {
        method: "GET",
      });
      const winesList = await response.json();
      setWinesList(winesList);
      setDataLoading(false);
    }
    fetchWine();
  }, [newRef, search]);

  const MemoizedWineReference = memo(WineReference);

  // Search
  const searchedWines = search
    ? winesList.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    : winesList;

  // Color filter
  const filteredWines = colorFilter !== 'all'
    ? searchedWines.filter((item) => 
        item.color === colorFilter
      )
    : searchedWines;


  return (
    <Main>
      <WineShowed wineShowed={wineShowed} />
      <WinesWindow>
        {!isDataLoading ? (
          filteredWines.map(
            ({
              _id,
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
              <MemoizedWineReference
                key={_id}
                _id={_id}
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
          )
        ) : (
          <LoadingContainer>
            <Loader />
          </LoadingContainer>
        )}
      </WinesWindow>
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
  position: relative;
  right: 0;
  left: 23%;
`;

const Main = styled.div`
  display: flex;
  margin: 50px 0;
`;

const LoadingContainer = styled.div`
  width: 100%;
  height: 82vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
