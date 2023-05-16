import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Color from "../../utils/Color/Color";
import { MaCaveAVinContext } from "../../../Context/MaCaveAVinContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faCalendarCheck,
  faArrowRightLong,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import Tag from "../../utils/Tag/Tag";
import BestWith from "../../utils/BestWith/BestWith";

function WineShowed() {
  const context = useContext(MaCaveAVinContext);
  const { newRef, setNewRef } = context.NewRefContext;
  const { showWineModal, setShowWineModal } = context.WineModalContext;
  const { wineShowed, setWineShowed } = context.WineContext;
  const { editModal, setEditModal } = context.EditModalContext;

  const [trashHover, setTrashHover] = useState(false);
  const [editHover, setEditHover] = useState(false);

  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if (wineShowed) {
      setQuantity(parseInt(wineShowed.quantity));
    }
  }, [wineShowed]);

  function editQuantity(delta) {
    if (delta === -1 && quantity === 0) {
      setQuantity(quantity);
    } else {
      setQuantity(quantity + delta);
      changeQuantity(quantity + delta);
    }
  }

  async function changeQuantity(quantity) {
    await fetch(`http://localhost:3000/api/wines/${wineShowed._id}`, {
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
    await fetch(`http://localhost:3000/api/wines/${wineShowed._id}`, {
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
    setWineShowed(null);
  }

  function handleClickEdit() {
    setEditModal(true);
    setShowWineModal(true);
  }

  if (wineShowed) {
    return (
      <WineShow>
        <Color color={wineShowed.color} />
        <WineShowTitle>
          {wineShowed.name}
          {wineShowed.biologic && "🍀"}
        </WineShowTitle>
        <WineOrigin>
          <p>{wineShowed.domain}</p>
          <p>{wineShowed.region}</p>
        </WineOrigin>
        <Tag
          tag={wineShowed.tag}
          country={wineShowed.country}
        />
        <BestWith pairing={"beef, fish, chicken, pork, vegetable, cheese"} />
        <WineShowYearAndGarde>
          <h2>{wineShowed.year}</h2>
          <p>{wineShowed.price}€</p>

          <WineShowGarde>
            <FontAwesomeIcon
              icon={faCalendarCheck}
              size="xl"
              style={{ color: "#ac1c35" }}
            />
            <p>{wineShowed.bestAfter}</p>{" "}
            <FontAwesomeIcon
              icon={faArrowRightLong}
              style={{ color: "#ac1c35" }}
            />{" "}
            <p>{wineShowed.bestBefore}</p>
          </WineShowGarde>
        </WineShowYearAndGarde>

        <WineShowMenu>
          <FontAwesomeIcon
            icon={faPenToSquare}
            beatFade={editHover}
            size="lg"
            style={{ color: "#ac1c35" }}
            onMouseOver={() => setEditHover(true)}
            onMouseLeave={() => setEditHover(false)}
            onClick={() => handleClickEdit()}
          />
          <WineShowButtons>
            <WineShowButton onClick={() => editQuantity(-1)}>-</WineShowButton>
            <p>
              <b>{quantity}</b> en stock
            </p>
            <WineShowButton onClick={() => editQuantity(1)}>+</WineShowButton>
          </WineShowButtons>
          <FontAwesomeIcon
            icon={faTrash}
            beatFade={trashHover}
            size="lg"
            style={{ color: "#ac1c35" }}
            onClick={() => deleteWine()}
            onMouseOver={() => setTrashHover(true)}
            onMouseLeave={() => setTrashHover(false)}
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
  :trashhover {
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
  position: absolute;
  bottom: 45%;
  left: 5px;
  right: 5px;
`;
