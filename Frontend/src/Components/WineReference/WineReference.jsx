import React, { useContext } from "react";
import styled from "styled-components";
import { MaCaveAVinContext } from "../../../Context/MaCaveAVinContext";
import Color from "../../utils/Color/Color";
import Flag from "../../utils/Flag/Flag";
import Tag from "../../utils/Tag/Tag";

function WineReference({
  _id,
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
  const setWineShowed = context.WineContext.setWineShowed;
  const { search, setSearch } = context.SearchContext;


  let newTag = "http://www.localhost:3000/" + tag;

  return (
    <WineRef
      onClick={() =>
        setWineShowed({
          _id: _id,
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
          tag: newTag,
          quantity: quantity,
        })
      }>
      <div>
        <Color color={color} />
        <h3>
          {search ? name.replace(
            new RegExp(search, "gi"),
            "<span class='mise-en-valeur'>$&</span>"
          ): name}
          {biologic && "🍀"}
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
      <Tag tag={newTag} />

      <PriceAndFlag>
        <Flag country={country} />
        <div>{price}€</div>
        <Quantity>x{quantity}</Quantity>
      </PriceAndFlag>
    </WineRef>
  );
}

export default WineReference;

const WineRef = styled.div`
  width: 200px;
  height: 250px;
  background-color: #cababa;
  padding: 5px;
  position: relative;
  border-radius: 5px;
  :hover {
    background-color: lightgray;
  }
`;

const PriceAndFlag = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 5px;
  left: 10px;
  right: 10px;
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
