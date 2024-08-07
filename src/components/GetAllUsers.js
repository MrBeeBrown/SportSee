import React, { useState, useEffect } from 'react';
import ApiService from '../api/apiService';
import User from '../models/User';

const GetAllUsers = ({ endpoint, id }) => {
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
    <div>
      {(data && data.length > 0) ? (
        <div>
          <p>{user.firstName}</p>
          <p>{user.lastName}</p>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default GetAllUsers;