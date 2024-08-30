import React, { useState, useEffect } from 'react';
import ApiService from '../api/apiService';
import User from '../models/User';
import PropTypes from 'prop-types';

/**
 * Retrieves user data from the specified endpoint and id.
 *
 * @param {string} endpoint - The API endpoint to fetch user data from.
 * @param {string} id - The user's id.
 * @return {JSX.Element} A JSX element displaying the user's name or an error message.
 */
const GetUsers = ({ endpoint, id }) => {
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
    (data) ? (
      <div>
        <p className='user_name'>{user.firstName} {user.lastName}</p>
      </div>
    ) : (
      <p>No data available</p>
    )
  );
};

GetUsers.propTypes = {
  endpoint: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

export default GetUsers;