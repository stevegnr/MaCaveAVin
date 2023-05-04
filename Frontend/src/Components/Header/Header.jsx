import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Banner>
      <h1>🍷 Ma Cave à Vin</h1>
      
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