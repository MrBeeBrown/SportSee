import React, { useState, useEffect } from 'react';
import ApiService from '../api/apiService';
import SimplePieChart from '../charts/SimplePieChart';
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
  return (
    <div className='user__score'>
      {(data && data.length > 0) ? (
        <SimplePieChart data={user} />
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default GetUserScore;