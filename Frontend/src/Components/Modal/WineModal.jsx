import React, { useContext, useState } from "react";
import styled from "styled-components";
import { MaCaveAVinContext } from "../../../Context/MaCaveAVinContext";

function WineModal({ onClose }) {
  const context = useContext(MaCaveAVinContext);
  const { wineShowed, setWineShowed } = context.WineContext;
  const { newRef, setNewRef } = context.NewRefContext;
  const { showWineModal, setShowWineModal } = context.WineModalContext;
  const { editModal, setEditModal } = context.EditModalContext;

  if (!showWineModal) {
    return null;
  }

  const [name, setName] = useState(editModal ? wineShowed.name : "");
  const [year, setYear] = useState(editModal ? wineShowed.year : 2022);
  const [color, setColor] = useState(editModal ? wineShowed.color : "red");
  const [quantity, setQuantity] = useState(editModal ? wineShowed.quantity : 1);
  const [price, setPrice] = useState(editModal ? wineShowed.price : 0);
  const [domain, setDomain] = useState(editModal ? wineShowed.domain : "");
  const [region, setRegion] = useState(editModal ? wineShowed.region : "");
  const [country, setCountry] = useState(
    editModal ? wineShowed.country : "france"
  );
  const [biologic, setBiologic] = useState(
    editModal ? wineShowed.biologic : false
  );
  const [bestBefore, setBestBefore] = useState(
    editModal ? wineShowed.bestBefore : year + 1
  );
  const [bestAfter, setBestAfter] = useState(
    editModal ? wineShowed.bestAfter : year + 2
  );
  const [image, setImage] = useState(editModal ? wineShowed.image : null);

  async function onSubmit() {
    const formData = new FormData();

    formData.append("name", name);
    console.log(name);
    formData.append("year", year);
    formData.append("color", color);
    formData.append("quantity", quantity);
    formData.append("price", price);
    formData.append("domain", domain);
    formData.append("region", region);
    formData.append("country", country);
    formData.append("biologic", biologic);
    formData.append("bestBefore", bestBefore);
    formData.append("bestAfter", bestAfter);
    formData.append("tag", image);
    onClose();
    for (const [key, value] of formData.entries()) {
      console.log(key + ": " + value);
    }

    if (editModal) {
      await fetch(`http://localhost:3000/api/wines/edit/${wineShowed._id}`, {
        method: "PUT",
        body: formData,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .catch((error) => {
          console.error("There was a problem with the edit operation:", error);
        });
      setEditModal(!editModal);
    } else {
      await fetch("http://localhost:3000/api/wines", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .catch((error) => {
          console.error("There was a problem with the post operation:", error);
        });
    }

    setNewRef(!newRef);
  }

  return (
    <ModalOverlay onClick={() => setShowWineModal(false)}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>
            <h3>
              {editModal
                ? `Modifier : ${wineShowed.name}`
                : "Nouvelle référence"}
            </h3>
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
                    id="name"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
                <label htmlFor="year">
                  Année :
                  <input
                    type="number"
                    id="year"
                    name="year"
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
              <ModalDiv>
                <input
                  type="file"
                  name="tag"
                  id="tag"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files[0])}
                />
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
                  <select
                    name="country"
                    id="country"
                    onChange={(e) => setCountry(e.target.value)}
                    defaultValue={"france"}>
                    <option value="">Sélectionner un pays</option>
                    <option value="southAfrica">Afrique du Sud</option>
                    <option value="germany">Allemagne</option>
                    <option value="argentina">Argentine</option>
                    <option value="australia">Australie</option>
                    <option value="austria">Autriche</option>
                    <option value="brasil">Brésil</option>
                    <option value="china">Chine</option>
                    <option value="chile">Chili</option>
                    <option value="spain">Espagne</option>
                    <option value="usa">États-Unis</option>
                    <option value="france">France</option>
                    <option value="greece">Grèce</option>
                    <option value="hungary">Hongrie</option>
                    <option value="italy">Italie</option>
                    <option value="moldova">Moldavie</option>
                    <option value="newZealand">Nouvelle-Zélande</option>
                    <option value="portugal">Portugal</option>
                    <option value="romania">Roumanie</option>
                    <option value="russia">Russie</option>
                    <option value="switzerland">Suisse</option>
                  </select>
                </label>
                Bio ?
                <label htmlFor="bio">
                  Oui 🍀
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
          <ModalButton onClick={onSubmit}>
            {editModal ? "Modifier" : "Ajouter"}
          </ModalButton>
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

const ModalButton = styled.div`
  height: 30px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgrey;
  border: 1px solid lightgrey;
  border-radius: 5px;
  :hover {
    background-color: white;
  }
`;

const ModalDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
