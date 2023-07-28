import React from 'react';
import deathStar from '../images/deathStar.png';
import millennium from '../images/millennium.png';
import logoStarWars from '../images/starWars.png';
import tieFighter from '../images/tie-fighter.png';
import xWing from '../images/xWing.png';
import './Header.css';

export default function Header() {
  return (
    <header>
      <img src={ tieFighter } className="tie-fighter" alt="tie-fighter" />

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
        src={ xWing }
        alt="ship"
        style={ {

          ...animationProps,
        } }
      />

      <img
        id="deathStar"
        src={ deathStar }
        alt="ship"
      />

    </header>

  );
}
