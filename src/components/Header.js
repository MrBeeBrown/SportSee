import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg';

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="logo" />
        <h1>Sportsee</h1>
      </div>
      <div className="nav">
        <Link to="/">Accueil</Link>
        <p>Profil</p>
        <p>Réglage</p>
        <p>Communauté</p>
      </div>
    </header>
  );
}

export default Header;