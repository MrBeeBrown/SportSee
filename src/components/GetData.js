import React, { useState, useEffect } from 'react';
import ApiService from '../api/apiService';
import BiaxialBarChart from '../charts/BiaxialBarChart';
import SimpleLineChart from '../charts/SimpleLineChart';
import SimpleRadarChart from '../charts/SimpleRadarChart';
import SimplePieChart from '../charts/SimplePieChart';
import User from '../models/User';
import AverageSessions from '../models/AverageSessions';
import Performances from '../models/Performances';
import Activity from '../models/Activity';
import energy from '../assets/energy.svg';
import apple from '../assets/apple.svg';
import chicken from '../assets/chicken.svg';
import cheeseburger from '../assets/cheeseburger.svg';

const GetData = ({ endpoint, id, type }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    ApiService(endpoint, id)
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [endpoint, id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (endpoint === 'user' && type === 'all') {
    return (
      <div>
        {(data && data.length > 0) ? (
          data.map((user) => (
            <div>
              <p>{user.userInfos.firstName}</p>
              <p>{user.userInfos.lastName}</p>
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    );
  }

  if (endpoint === 'user' && type === 'false') {
    const user = new User(data).toJSON();
    return (
      <div className='user__info'>
        {(data && data.length > 0) ? (
          <div>
            <h2>Bonjour <span className='red__text'>{user.firstName}</span></h2>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          </div>
        ) : (
          <p>No data available</p>
        )}
      </div>
    );
  }

  if (endpoint === 'user' && type === 'score') {
    const user = new User(data).userScore();
    return (
      <div className='user__score'>
        {(data && data.length > 0) ? (
          <SimplePieChart data={user} />
        ) : (
          <p>No data available</p>
        )}
      </div>
    );
  }

  if (endpoint === 'averageSessions' && type === 'false') {
    const averageSessions = new AverageSessions(data).toJSON();
    return (
      <div className='user__week__session'>
        {(data && data.length > 0) ? (
          <SimpleLineChart data={averageSessions} />
        ) : (
          <p>No data available</p>
        )}
      </div>
    );
  }

  if (endpoint === 'performance' && type === 'false') {
    const performances = new Performances(data).toJSON();
    return (
      <div className='user__performance'>
        {(data && data.length > 0) ? (
          <SimpleRadarChart data={performances} />
        ) : (
          <p>No data available</p>
        )}
      </div>
    )
  }

  if (endpoint === 'activity' && type === 'false') {
    const activity = new Activity(data).toJSON();
    return (
      <div className='user__week__activity'>
        {(data && data.length > 0) ? (
          <BiaxialBarChart data={activity} />
        ) : (
          <p>No data available</p>
        )}
      </div>
    )
  }

  if (endpoint === 'user' && type === 'nutrition') {
    const user = new User(data).toJSON();
    return (
      <div className='user__nutrition'>
        {(data && data.length > 0) ? (
          <div className='nutrition__card'>
            <div className='calories card'>
              <div className='energy__icons icons'>
                <img src={energy} alt="energy" />
              </div>
              <div className='calories__data'>
                <p className='nutrition__value'>{user.calorieCount.toLocaleString('en-US')}KCal</p>
                <p className='nutrition__text'>Calories</p>
              </div>
            </div>
            <div className='proteines card'>
              <div className='proteines__icons icons'>
                <img src={chicken} alt="chicken" />
              </div>
              <div className='proteines__data'>
                <p className='nutrition__value'>{user.proteinCount}g</p>
                <p className='nutrition__text'>Proteines</p>
              </div>
            </div>
            <div className='glucides card'>
              <div className='glucides__icons icons'>
                <img src={apple} alt="apple" />
              </div>
              <div className='glucides__data'>
                <p className='nutrition__value'>{user.carbohydrateCount}g</p>
                <p className='nutrition__text'>Glucides</p>
              </div>
            </div>
            <div className='lipides card'>
              <div className='lipides__icons icons'>
                <img src={cheeseburger} alt="cheeseburger" />
              </div>
              <div className='lipides__data'>
                <p className='nutrition__value'>{user.lipidCount}g</p>
                <p className='nutrition__text'>Lipides</p>
              </div>
            </div>
          </div>
        ) : (
          <p>No data available</p>
        )}
      </div>
    )
  }
};

export default GetData;