import { useParams } from 'react-router-dom';
import GetUserName from './GetUserName';
import GetUserActivity from './GetUserActivity';
import GetUserSession from './GetUserSession';
import GetUserPerformance from './GetUserPerformance';
import GetUserScore from './GetUserScore';
import GetUserNutrition from './GetUserNutrition';
import Yoga from '../assets/yoga.svg';
import Dumbbell from '../assets/dumbbell.svg';
import Swim from '../assets/swimming.svg';
import Bike from '../assets/bicycle.svg';
import Header from './Header';
import '../css/Home.css';

/**
 * A React component that renders the profile page of a user.
 * 
 * It fetches and displays the user's activity, sessions, performance, score, and nutrition data.
 * 
 * @return {JSX.Element} The JSX element representing the header and the main page with the user datas and graphics.
 */
function Profils() {

  const params = useParams();
  const id = parseInt(params.id);

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
        <div className="summary">
          <GetUserName endpoint="user" id={id} />
          <div className='user__activity'>

            <div className='user__graph'>
              <GetUserActivity endpoint="activity" id={id} />
              <div className='user__session'>
                <GetUserSession endpoint="averageSessions" id={id} />
                <GetUserPerformance endpoint="performance" id={id} />
                <GetUserScore endpoint="user" id={id} />
              </div>
            </div>
            <div className='nutrition__display'>
              <GetUserNutrition endpoint="user" id={id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profils;