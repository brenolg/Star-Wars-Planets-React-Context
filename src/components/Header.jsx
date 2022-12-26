import logoStarWars from '../images/logoStarWars.svg';
import './FilterName.css';

export default function Header() {
  return (
    <header>
      <h1>Star wars</h1>

      <img
        id="starWars"
        src={ logoStarWars }
        alt="starWars"
      />

    </header>

  );
}
