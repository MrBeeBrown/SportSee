import React, { useState, useEffect } from 'react';
import ApiService from '../api/apiService';
import User from '../models/User';

/**
 * Retrieves user data from the specified endpoint and id, and displays a greeting message.
 *
 * @param {string} endpoint - The API endpoint to fetch user data from.
 * @param {string} id - The user's id.
 * @return {JSX.Element} A JSX element displaying the user's greeting message or an error/loading message.
 */
const GetUserName = ({ endpoint, id }) => {
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

  const user = new User(data).toJSON();
  return (
    <div className='user__info'>
      {(data) ? (
        <div>
          <h2>Bonjour <span className='red__text'>{user.firstName}</span></h2>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default GetUserName;