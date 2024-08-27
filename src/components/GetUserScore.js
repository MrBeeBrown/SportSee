import React, { useState, useEffect } from 'react';
import SimpleRadialBarChart from '../charts/SimpleRadialBarChart';
import ApiService from '../api/apiService';
import User from '../models/User';
import PropTypes from 'prop-types';

/**
 * Retrieves and displays a user's score based on the provided endpoint and id.
 *
 * @param {string} endpoint - The API endpoint to fetch user data from.
 * @param {number} id - The user's id.
 * @return {JSX.Element} The user's score component.
*/

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

  const user = new User(data).scoreToArray();

  return (
    <div className='user__score'>
      <SimpleRadialBarChart data={user} />
      <div className='user__score__text'>
        <p>Score</p>
      </div>
      <p className='user__score__number'>
        <span className='user__score__value'>{user[0].score}%</span>
        de votre<br />objectif</p>
    </div>
  );
};

GetUserScore.propTypes = {
  endpoint: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

export default GetUserScore;