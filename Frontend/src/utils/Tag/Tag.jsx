import React from "react";
import styled from "styled-components";
import Flag from "../Flag/Flag";

function Tag({ tag, country }) {
  return (
    <TagAndFlag>
        {country && <InsertedFlag country={country} />}
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

const InsertedFlag = styled(Flag)`
  position: relative;
  top: 0;
  left: 30px;
  z-index: 3;
`;

const TagAndFlag = styled.div`
  background-color: blue;
  width: 90%;
  height: 35%;
  border-radius: 5px;
  left: 50%;
  bottom: 40px;
  transform: translate(-50%);
  position: absolute;
  border: 1px solid black;

`;
