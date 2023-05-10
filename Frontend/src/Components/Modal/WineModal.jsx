import React, { useContext, useState } from "react";
import styled from "styled-components";
import { MaCaveAVinContext } from "../../../Context/MaCaveAVinContext";

function WineModal({ title, show, onClose }) {
  if (!show) {
    return null;
  }

  const [name, setName] = useState("");
  const [year, setYear] = useState(2022);
  const [color, setColor] = useState("red");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [domain, setDomain] = useState("");
  const [region, setRegion] = useState("");
  const [country, setCountry] = useState("France");
  const [biologic, setBiologic] = useState(false);
  const [bestBefore, setBestBefore] = useState(year + 1);
  const [bestAfter, setBestAfter] = useState(year + 2);

  const context = useContext(MaCaveAVinContext);
  const { newRef, setNewRef } = context.NewRefContext;

  function onSubmit() {
    const formData = {
      name: name,
      year: year,
      color: color,
      quantity: quantity,
      price: price,
      domain: domain,
      region: region,
      country: country,
      biologic: biologic,
      bestBefore: bestBefore,
      bestAfter: bestAfter,
    };
    onClose();

    fetch("http://localhost:3000/api/wines", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
    setNewRef(!newRef);
  }

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>
            <h3>{title}</h3>
          </ModalTitle>
        </ModalHeader>
        <ModalBody>
          <form>
            <fieldset>
              <legend>Détails</legend>
              <ModalDiv>
                <label htmlFor="name">
                  Nom du vin :
                  <input
                    value={name}
                    type="text"
                    name="name"
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
                <label htmlFor="year">
                  Année :
                  <input
                    type="number"
                    min="1900"
                    max="2024"
                    step="1"
                    defaultValue={year}
                    onChange={(e) => setYear(e.target.value)}
                  />
                </label>
              </ModalDiv>
              <ModalDiv>
                <label htmlFor="color">
                  Couleur :
                  <select
                    name="color"
                    id="color"
                    onChange={(e) => setColor(e.target.value)}
                    defaultValue={color}>
                    <option value="red">Rouge</option>
                    <option value="white">Blanc</option>
                    <option value="pink">Rosé</option>
                  </select>
                </label>
                <label htmlFor="quantity">
                  Quantité :
                  <input
                    type="number"
                    min={1}
                    max={999}
                    defaultValue={quantity}
                    step={1}
                    name="quantity"
                    id="quantity"
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </label>
                <label htmlFor="price">
                  Prix unitaire :
                  <input
                    type="number"
                    name="price"
                    id="price"
                    min="0"
                    step="0.01"
                    defaultValue={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </label>
              </ModalDiv>
            </fieldset>
            <fieldset>
              <legend>Origine</legend>
              <ModalDiv>
                <label htmlFor="domain">
                  Domaine :
                  <input
                    type="text"
                    name="domain"
                    id="domain"
                    onChange={(e) => setDomain(e.target.value)}
                    defaultValue={domain}
                  />
                </label>
                <label htmlFor="region">
                  Région :
                  <input
                    type="text"
                    name="region"
                    id="region"
                    onChange={(e) => setRegion(e.target.value)}
                    defaultValue={region}
                  />
                </label>
              </ModalDiv>
              <ModalDiv>
                <label htmlFor="country">
                  Pays :
                  <input
                    type="text"
                    name="country"
                    id="country"
                    onChange={(e) => setCountry(e.target.value)}
                    defaultValue={country}
                  />
                </label>
                <label htmlFor="biologic">
                  Bio ?
                  <label htmlFor="bio">
                    Oui
                    <input
                      type="radio"
                      name="bio"
                      id="bio"
                      onChange={(e) => setBiologic(true)}
                    />
                  </label>
                  <label htmlFor="notbio">
                    Non
                    <input
                      type="radio"
                      name="bio"
                      id="notbio"
                      defaultChecked
                      onChange={(e) => setBiologic(false)}
                    />
                  </label>
                </label>
              </ModalDiv>
            </fieldset>
            <fieldset>
              <legend>Garde</legend>
              <ModalDiv>
                <label htmlFor="bestAfter">
                  A garder minimum jusqu'à (année) :{" "}
                </label>
                <input
                  type="number"
                  min={0}
                  step={1}
                  name="bestAfter"
                  id="bestAfter"
                  onChange={(e) => setBestBefore(e.target.value)}
                  defaultValue={+year + 1}
                />
              </ModalDiv>
              <ModalDiv>
                <label htmlFor="bestBefore">
                  A garder maximum jusqu'à (année) :{" "}
                </label>
                <input
                  type="number"
                  min={0}
                  step={1}
                  name="bestBefore"
                  id="bestBefore"
                  onChange={(e) => setBestAfter(e.target.value)}
                  defaultValue={+year + 2}
                />
              </ModalDiv>
            </fieldset>
          </form>
        </ModalBody>
        <ModalFooter>
          <ModalButton onClick={onSubmit}>Ajouter</ModalButton>
          <ModalButton onClick={onClose}>Annuler</ModalButton>
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  );
}

export default WineModal;

const ModalOverlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
`;

const ModalContent = styled.div`
  width: 500px;
  background-color: white;
`;

const ModalHeader = styled.div`
  padding: 10px;
  opacity: 1;
`;
const ModalFooter = styled(ModalHeader)`
  display: flex;
  justify-content: space-around;
`;

const ModalTitle = styled.div`
  margin: 0;
  text-align: center;
`;

const ModalBody = styled.div`
  padding: 10px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`;

const ModalButton = styled.div``;

const ModalDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
