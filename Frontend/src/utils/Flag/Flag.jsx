import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";

import spain from "./flags/flag-spain.png";
import italy from "./flags/flag-italy.png";
import france from "./flags/flag-france.png";
import usa from "./flags/flag-usa.png";
import argentina from "./flags/flag-argentina.png";
import chile from "./flags/flag-chile.png";
import australia from "./flags/flag-australia.png";
import germany from "./flags/flag-germany.png";
import china from "./flags/flag-china.png";
import portugal from "./flags/flag-portugal.png";
import russia from "./flags/flag-russia.png";
import romania from "./flags/flag-romania.png";
import southAfrica from "./flags/flag-southAfrica.png";
import greece from "./flags/flag-greece.png";
import hungary from "./flags/flag-hungary.png";
import newZealand from "./flags/flag-newZealand.png";
import austria from "./flags/flag-austria.png";
import switzerland from "./flags/flag-switzerland.png";
import moldova from "./flags/flag-moldova.png";
import brasil from "./flags/flag-brasil.png";

function Flag({ country }) {
  let flagSrc;

  switch (country) {
    case "spain":
      flagSrc = spain;
      break;
    case "italy":
      flagSrc = italy;
      break;
    case "france":
      flagSrc = france;
      break;
    case "usa":
      flagSrc = usa;
      break;
    case "argentina":
      flagSrc = argentina;
      break;
    case "chile":
      flagSrc = chile;
      break;
    case "australia":
      flagSrc = australia;
      break;
    case "germany":
      flagSrc = germany;
      break;
    case "china":
      flagSrc = china;
      break;
    case "portugal":
      flagSrc = portugal;
      break;
    case "russia":
      flagSrc = russia;
      break;
    case "romania":
      flagSrc = romania;
      break;
    case "southAfrica":
      flagSrc = southAfrica;
      break;
    case "greece":
      flagSrc = greece;
      break;
    case "hungary":
      flagSrc = hungary;
      break;
    case "newZealand":
      flagSrc = newZealand;
      break;
    case "austria":
      flagSrc = austria;
      break;
    case "switzerland":
      flagSrc = switzerland;
      break;
    case "moldova":
      flagSrc = moldova;
      break;
    case "brasil":
      flagSrc = brasil;
      break;
    default:
      flagSrc = "other";
      break;
    }
  if (country === "other") {
    return (
      <FontAwesomeIcon
        icon={faQuestion}
        flip
        size="lg"
      />
    );
  } else
    return (
      <StyledFlag
        src={flagSrc}
        alt={country}
      />
    );
}

export default Flag;

const StyledFlag = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50%;
`;
