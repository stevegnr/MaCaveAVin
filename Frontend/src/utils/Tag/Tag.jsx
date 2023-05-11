import React from 'react'
import styled from 'styled-components';

function Tag({ tag }) {
  return (
      <Etiquette src={tag} />
  )
}

export default Tag

const Etiquette = styled.img`
  width: 90%;
  height: 35%;
  border-radius: 5px;
  left: 50%;
  bottom: 40px;
  transform: translate(-50%);
  position: absolute;
  border: 1px solid black;
`;