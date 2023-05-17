import React, { useContext, useState } from "react";
import styled from "styled-components";
import Modal from "../Modal/WineModal";
import { MaCaveAVinContext } from "../../../Context/MaCaveAVinContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const context = useContext(MaCaveAVinContext);
  const { showWineModal, setShowWineModal } = context.WineModalContext;
  const { search, setSearch } = context.SearchContext;
  const [shake, setShake] = useState(false);
  const { colorFilter, setColorFilter } = context.ColorFilterContext;

  return (
    <Menu>
      <Banner>
        <h1>🍷 Ma Cave à Vin</h1>
        <BannerMenu>
          <AddRef onClick={() => setShowWineModal(true)}>+</AddRef>
          <Search>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              shake={shake}
              style={{ color: "#ffffff" }}
              size="lg"
            />
            <SearchField
              type="text"
              placeholder="Rechercher..."
              onFocus={() => setShake(true)}
              onBlur={() => setShake(false)}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Filter onChange={(e) => setColorFilter(e.target.value)}>
              <option value="all">Sélectionner couleur</option>
              <option value="white">Blanc</option>
              <option value="pink">Rosé</option>
              <option value="red">Rouge</option>
            </Filter>
          </Search>
        </BannerMenu>
      </Banner>
      <Modal
        title="Nouvelle référence"
        onClose={() => setShowWineModal(false)}></Modal>
    </Menu>
  );
}

export default Header;

const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 110px;
  height: 50px;
  background-color: #ac1c35;
  color: white;
  border: 1px solid black;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const BannerMenu = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  gap: 40px;
`;

const WineModal = styled.div`
  display: none;
  /* Hidden by default */
  position: fixed;
  /* Stay in place */
  z-index: 1;
  /* Sit on top */
  left: 0;
  top: 0;
  width: 100%;
  /* Full width */
  height: 100%;
  /* Full height */
  overflow: auto;
  /* Enable scroll if needed */
  background-color: rgb(0, 0, 0);
  /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4);
  /* Black w/ opacity */
`;

const Menu = styled.div``;

const AddRef = styled.div`
  width: 30px;
  height: 30px;
  border: 5px solid white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3em;
  margin-right: 30px;
`;

const Search = styled.div`
  display: flex;
  gap: 5px;
`;

const SearchField = styled.input`
  border: 1px solid white;
  border-radius: 5px;
  `;

const Filter = styled.select`
border: 1px solid white;
  border-radius: 5px;
`;
