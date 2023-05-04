import React from 'react'
import styled from 'styled-components'
import frenchFlag from '../../assets/flag-france.png'

function WineReference({ id, name, domain, region, year, color, price, biologic, bestAfter, country, cover }) {
  return (
    <WineRef key={id}>
      <h3>{name}</h3>
      <p>{domain}</p>
      <p>{region}</p>
      <p>{year}</p>

      <Etiquette src={cover} />

      <PriceAndFlag>
        <h3>{price}€</h3> <div>{biologic && '🍀'}</div><div>{country === 'France' && <Flag src={frenchFlag} />}</div>

      </PriceAndFlag>
    </WineRef>
  )
}

export default WineReference

const WineRef = styled.div`
width: 150px;
height: 35vh;
margin: 10px ;
position: relative;
padding: 5px;
align-content: center;
background-color: #e6d7d7;
:hover {
  background-color: #b4b1ac;
  transform: scale(1.01);
}
`

const Flag = styled.img`
height: 30px;
`

const PriceAndFlag = styled.div`
width: 90%;
display: flex;
justify-content: space-between;
align-items: center ;
position: absolute;
bottom: 0;
`

const Etiquette = styled.img`
width: 90%;
height: 35%;
border-radius: 10%;
position: absolute;
bottom: 15%;
left: 50%;
transform: translate(-50%);
`