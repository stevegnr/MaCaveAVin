import React from "react";
import styled from "styled-components";
import Flag from "../Flag/Flag";

function Tag({ tag, country, height, width }) {
  return (
    <TagAndFlag>
      {country && (
        <InsertedFlag>
          <Flag country={country} />
        </InsertedFlag>
      )}
      <Etiquette src={tag} />
    </TagAndFlag>
  );
}

export default Tag;

const Etiquette = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0px;
  z-index: -1;
`;

const InsertedFlag = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  z-index: 3;
  border-radius: 50%;
  height: 30px;
  width: 30px;
`;

const TagAndFlag = styled.div`
  width: 90%;
  height: 33%;
  border-radius: 5px;
  left: 50%;
  bottom: 40px;
  transform: translate(-50%);
  position: absolute;
  border: 3px solid white;
`;
