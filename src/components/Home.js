import React from 'react';
import { useNavigate } from 'react-router-dom';
import GetUsers from './GetUsers';
import Header from './Header';
import Menu from './Menu';
import '../css/Home.css';

/**
 * The Home function is the main entry point of the application.
 * It renders the main page with activity menu and user selection.
 * It also handles navigation to user profiles.
 *
 */
function Home() {
  const navigate = useNavigate();

  /**
  * Navigates to the user profile page based on the provided user ID.
  *
  * @param {number} id - The ID of the user to navigate to.
  * @return {JSX.Element} The JSX element representing the header and the main section with the user selection.
  */
  const getLocation = (id) => {
    navigate("./Profils/" + id)
  }

  return (
    <div>
      <Header />
      <div className="main">
        <Menu />
        <div className="user__selection">
          <div className='user__selection__text'>
            <p>Choisissez un profil</p>
          </div>
          <div className='all__user__info'>
            <div className='users' onClick={() => getLocation(12)}>
              <GetUsers endpoint={'user'} id={12} />
            </div>
            <div className='users' onClick={() => getLocation(18)}>
              <GetUsers endpoint={'user'} id={18} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;