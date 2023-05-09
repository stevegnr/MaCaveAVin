import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <Foot>Parce que c'est parfois dur de s'y retrouver ! 🍷</Foot>
  )
}

export default Footer

const Foot = styled.div`
display: flex;
justify-content: right;
align-items: center;
height: 10vh;
background: linear-gradient(#AC1C35, #BC1124);
color: white;
font-size: 20px;
position: fixed;
bottom: 0;
left: 0;
right: 0;
`