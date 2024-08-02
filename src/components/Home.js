import Yoga from '../assets/yoga.svg';
import Dumbbell from '../assets/dumbbell.svg';
import Swim from '../assets/swimming.svg';
import Bike from '../assets/bicycle.svg';
import GetUserData from './GetUserData';
import GetUserActivity from './GetUserActivity';
import GetUserNutrition from './GetUserNutrition';
import GetUserSession from './GetUserSession';
import GetUserPerformance from './GetUserPerformance';
import GetUserScore from './GetUserScore';
import Header from './Header';
import '../css/Home.css';

function Home() {
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
          <GetUserData endpoint="user" id="12" />
          <div className='user__activity'>

            <div className='user__graph'>
              <GetUserActivity endpoint="activity" id="12" />
              <div className='user__session'>
                <GetUserSession endpoint="averageSessions" id="12" />
                <GetUserPerformance endpoint="performance" id="12" />
                <GetUserScore endpoint="user" id="12" />
              </div>
            </div>
            <div className='nutrition__display'>
              <GetUserNutrition endpoint="user" id="12" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;