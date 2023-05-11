import React from 'react'
import france from "./flags/flag-france.png"
import styled from 'styled-components'

function Flag() {
  return (
      <StyledFlag src={france} alt="texte" />
  )
}

export default Flag

const StyledFlag = styled.img`
    height: 30px;
`