import React, { useState, useEffect } from 'react';
import ApiService from '../api/apiService';
import SimpleRadarChart from '../charts/SimpleRadarChart';
import Performances from '../models/Performances';

const GetUserPerformance = ({ endpoint, id }) => {
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

  const performances = new Performances(data).toJSON();
  return (
    <div className='user__performance'>
      {(data) ? (
        <SimpleRadarChart data={performances} />
      ) : (
        <p>No data available</p>
      )}
    </div>
  )
};

export default GetUserPerformance;