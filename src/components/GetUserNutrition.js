import React, { useState, useEffect } from 'react';
import ApiService from '../api/apiService';
import energy from '../assets/energy.svg';
import apple from '../assets/apple.svg';
import chicken from '../assets/chicken.svg';
import cheeseburger from '../assets/cheeseburger.svg';

const GetUserNutrition = ({ endpoint, id }) => {
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

  return (
    <div className='user__nutrition'>
      {(data && data.length > 0) ? (
        <div className='nutrition__card'>
          <div className='calories card'>
            <div className='energy__icons icons'>
              <img src={energy} alt="energy" />
            </div>
            <div className='calories__data'>
              <p className='nutrition__value'>{data[0].keyData.calorieCount.toLocaleString('en-US')}KCal</p>
              <p className='nutrition__text'>Calories</p>
            </div>
          </div>
          <div className='proteines card'>
            <div className='proteines__icons icons'>
              <img src={chicken} alt="chicken" />
            </div>
            <div className='proteines__data'>
              <p className='nutrition__value'>{data[0].keyData.proteinCount}g</p>
              <p className='nutrition__text'>Proteines</p>
            </div>
          </div>
          <div className='glucides card'>
            <div className='glucides__icons icons'>
              <img src={apple} alt="apple" />
            </div>
            <div className='glucides__data'>
              <p className='nutrition__value'>{data[0].keyData.carbohydrateCount}g</p>
              <p className='nutrition__text'>Glucides</p>
            </div>
          </div>
          <div className='lipides card'>
            <div className='lipides__icons icons'>
              <img src={cheeseburger} alt="cheeseburger" />
            </div>
            <div className='lipides__data'>
              <p className='nutrition__value'>{data[0].keyData.lipidCount}g</p>
              <p className='nutrition__text'>Lipides</p>
            </div>
          </div>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default GetUserNutrition;