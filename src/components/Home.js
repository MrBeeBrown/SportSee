import { useNavigate } from 'react-router-dom';
import GetUsers from './GetUsers';
import Yoga from '../assets/yoga.svg';
import Dumbbell from '../assets/dumbbell.svg';
import Swim from '../assets/swimming.svg';
import Bike from '../assets/bicycle.svg';
import Header from './Header';
import '../css/Home.css';

/**
 * The Home function is the main entry point of the application.
 * It renders the main page with activity menu and user selection.
 * It also handles navigation to user profiles.
 *
 * @return {JSX.Element} The JSX element representing the main page.
 */
function Home() {
  const navigate = useNavigate();

  /**
 * Navigates to the user profile page based on the provided user ID.
 *
 * @param {number} id - The ID of the user to navigate to.
 * @return {void} No return value, navigates to the user profile page.
 */
  const getLocation = (id) => {
    navigate("./Profils/" + id)
  }

  return (
    <div>
      <Header />
      <div className="main">
        <div className='activity__menu'>
          <div className="activity">
            <div className="activity__icon">
              <img src={Yoga} alt="yoga" />
            </div>
            <div className="activity__icon">
              <img src={Swim} alt="Swim" />
            </div>
            <div className="activity__icon">
              <img src={Bike} alt="bike" />
            </div>
            <div className="activity__icon">
              <img src={Dumbbell} alt="Bumbbell" />
            </div>
            <div className="copyright">
              <p>Copyright, SportSee 2020</p>
            </div>
          </div>
        </div>
        <div className="user__selection">
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