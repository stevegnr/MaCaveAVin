import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Color from "../../utils/Color/Color";
import { MaCaveAVinContext } from "../../../Context/MaCaveAVinContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import Flag from "../../utils/Flag/Flag";
import Tag from "../../utils/Tag/Tag";

function WineShowed() {
  const context = useContext(MaCaveAVinContext);
  const { showed, setShowed } = context.WineContext;
  const { newRef, setNewRef } = context.NewRefContext;

  const [hover, setHover] = useState(false)

  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if (showed) {
      setQuantity(parseInt(showed.quantity));
    }
  }, [showed]);

  function editQuantity(delta) {
    if (delta === -1 && quantity === 0) {
      setQuantity(quantity);
    } else {
      setQuantity(quantity + delta);
      changeQuantity(quantity + delta);
    }
  }

  async function changeQuantity(quantity) {
    await fetch(`http://localhost:3000/api/wines/${showed._id}`, {
      method: "PUT",
      body: JSON.stringify({ quantity }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
    setNewRef(!newRef);
  }

  async function deleteWine() {
    await fetch(`http://localhost:3000/api/wines/${showed._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .catch((error) => {
        console.error("There was a problem with the delete operation:", error);
      });
    setNewRef(!newRef);
    setShowed(null);
  }

  if (showed) {
    return (
      <WineShow>
        <Color color={showed.color} />
        <WineShowTitle>
          {showed.name}
          {showed.biologic && "🍀"}
        </WineShowTitle>
        <WineOrigin>
          <p>{showed.domain}</p>
          <p>{showed.region}</p>
        </WineOrigin>
        <Tag tag={showed.tag} />
        <Flag country={showed.country}/>
        <WineShowYearAndGarde>
          <h2>{showed.year}</h2>
          <WineShowGarde>
            <FontAwesomeIcon
              icon={faCalendarCheck}
              size="xl"
              style={{ color: "#ac1c35" }}
            />
            <p>{showed.bestAfter}</p> - <p>{showed.bestBefore}</p>
          </WineShowGarde>
        </WineShowYearAndGarde>

        <WineShowMenu>
          <p>{showed.price}€</p>
          <WineShowButtons>
            <WineShowButton onClick={() => editQuantity(-1)}>-</WineShowButton>
            <p>
              <b>{quantity}</b> en stock
            </p>
            <WineShowButton onClick={() => editQuantity(1)}>+</WineShowButton>
          </WineShowButtons>
          <FontAwesomeIcon
            icon={faTrash}
            beatFade={hover}
            size="lg"
            style={{ color: "#ac1c35" }}
            onClick={() => deleteWine()}
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          />
        </WineShowMenu>
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
  border-radius: 5px;
  padding: 5px;
  position: fixed;
  height: 80%;
  z-index: 1;
  bottom: 50px;
  top: 50px;
`;

const WineShowTitle = styled.h2`
  text-align: center;
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

const WineShowMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 10px;
  right: 10px;
`;

const WineShowGarde = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  align-items: center;
`;

const WineShowYearAndGarde = styled.div`
  display: flex;
  justify-content: space-between;
`;