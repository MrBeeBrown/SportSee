import Yoga from '../assets/yoga.svg';
import Run from '../assets/run.svg';
import Swim from '../assets/swim.svg';
import Bike from '../assets/bike.svg';

function Main() {
  return (
    <div className="main">

      <div className="activity">
        <div className="activity__icon">
          <img src={Yoga} alt="yoga" />
        </div>
        <div className="activity__icon">
          <img src={Run} alt="run" />
        </div>
        <div className="activity__icon">
          <img src={Swim} alt="swim" />
        </div>
        <div className="activity__icon">
          <img src={Bike} alt="bike" />
        </div>
      </div>
      <div className="summary">

      </div>
    </div>
  );
}

export default Main;