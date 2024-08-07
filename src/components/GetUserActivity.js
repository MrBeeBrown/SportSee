import React, { useState, useEffect } from 'react';
import ApiService from '../api/apiService';
import BiaxialBarChart from '../charts/BiaxialBarChart';
import Activity from '../models/Activity';

const GetUserActivity = ({ endpoint, id }) => {
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
};

export default GetUserActivity;