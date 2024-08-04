import { useParams } from 'react-router-dom';
import Yoga from '../assets/yoga.svg';
import Dumbbell from '../assets/dumbbell.svg';
import Swim from '../assets/swimming.svg';
import Bike from '../assets/bicycle.svg';
import GetData from './GetData';
import Header from './Header';
import '../css/Home.css';

function Home() {

  const params = useParams();
  const id = params.id;

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
          <GetData endpoint="user" id={id} type="false" />
          <div className='user__activity'>

            <div className='user__graph'>
              <GetData endpoint="activity" id={id} type="false" />
              <div className='user__session'>
                <GetData endpoint="averageSessions" id={id} type="false" />
                <GetData endpoint="performance" id={id} type="false" />
                <GetData endpoint="user" id={id} type="score" />
              </div>
            </div>
            <div className='nutrition__display'>
              <GetData endpoint="user" id={id} type="nutrition" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;