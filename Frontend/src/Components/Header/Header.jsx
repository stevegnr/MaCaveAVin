import React from 'react'
import styled from 'styled-components'

async function ajout() {
  await fetch("http://localhost:3000/api/wines", {method: "POST"}).then((add) => add.json())
}

function Header() {
  return (
    <Banner>
      <h1>🍷 Ma Cave à Vin</h1>
      <div onClick={() => ajout()}>Ajouter le test</div>
      <div>Supprimer le test</div>
    </Banner>
  );
}

export default Header

const Banner = styled.div`
display: flex;
align-items: center;
height: 10vh;
background: linear-gradient(#AC1C35, #BC1124);
color: white;
border: 1px solid black;
`