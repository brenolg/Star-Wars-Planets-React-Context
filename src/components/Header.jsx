import React from 'react';
import deathStar from '../images/death-star.png';
import lambda from '../images/lambda.png';
import millennium from '../images/millennium.png';
import ships from '../images/ships.png';
import logoStarWars from '../images/star-wars-title.png';
import tieFighter from '../images/tie-fighter.png';
import xWing from '../images/x-wing.png';
import yWing from '../images/y-wing.png';
import './Header.css';

export default function Header() {
  return (
    <header>

      <img
        id="starWars"
        src={ logoStarWars }
        alt="starWars"
      />

      <img
        id="falcon"
        src={ millennium }
        alt="ship"
      />

      <img
        id="ships"
        src={ ships }
        alt="ships"
      />

      <img
        id="deathStar"
        src={ deathStar }
        alt="ship"
      />

      <img
        src={ tieFighter }
        className="tie-fighter"
        alt="tie-fighter"
      />

      <img
        src={ xWing }
        className="x-fighter"
        alt="x-wing"
      />

      <img
        src={ yWing }
        className="y-fighter"
        alt="y-wing"
      />

      <img
        src={ lambda }
        className="lambda"
        alt="y-wing"
      />

    </header>

  );
}
