import React, { useState, useEffect } from 'react';
import ApiService from '../api/apiService';
import User from '../models/User';

const GetUserScore = ({ endpoint, id }) => {
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

  const user = new User(data).userScore();
  const score = user[0].value * 100;
  const percent = (101 - (101 * score) / 100);
  return (
    <div className='user__score'>
      <svg viewBox="0 0 36 36" className="circle-svg">
        <circle className='first__circle' cx="18" cy="18" r="12" strokeDashoffset={percent}></circle>
        <circle className='second__circle' cx="18" cy="18" r="11"></circle>
      </svg>
      <div className='score__title'>
        <p>Score</p>
      </div>
      <div className='score__value'>
        <p>{score}%</p>
        <p>de votre</p>
        <p>objectif</p>
      </div>
    </div>
  );
};

export default GetUserScore;