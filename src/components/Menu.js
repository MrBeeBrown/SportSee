import Yoga from '../assets/yoga.svg';
import Dumbbell from '../assets/dumbbell.svg';
import Swim from '../assets/swimming.svg';
import Bike from '../assets/bicycle.svg';


function Menu() {
  return (
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
  );
}

export default Menu;