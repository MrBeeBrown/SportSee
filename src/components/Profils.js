import { useParams } from 'react-router-dom';
import GetUserName from './GetUserName';
import GetUserActivity from './GetUserActivity';
import GetUserSession from './GetUserSession';
import GetUserPerformance from './GetUserPerformance';
import GetUserScore from './GetUserScore';
import GetUserNutrition from './GetUserNutrition';
import Header from './Header';
import Menu from './Menu';
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
        <Menu />
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