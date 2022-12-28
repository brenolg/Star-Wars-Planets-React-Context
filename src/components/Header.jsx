import logoStarWars from '../images/starWars.png';
import './Header.css';
import millennium from '../images/millennium.png';
import xWing from '../images/xWing.png';
import deathStar from '../images/deathStar.png';

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
        id="xWing"
        src={ xWing }
        alt="ship"
      />

      <img
        id="deathStar"
        src={ deathStar }
        alt="ship"
      />

    </header>

  );
}
