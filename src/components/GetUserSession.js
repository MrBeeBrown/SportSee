import React, { useState, useEffect } from 'react';
import ApiService from '../api/apiService';
import SimpleLineChart from '../charts/SimpleLineChart';
import AverageSessions from '../models/AverageSessions';

/**
 * Retrieves user session data from the API and renders a line chart of average sessions.
 *
 * @param {string} endpoint - The API endpoint to fetch data from.
 * @param {number} id - The user ID to fetch data for.
 * @return {JSX.Element} A line chart of average sessions or an error/loading message.
 */
const GetUserSession = ({ endpoint, id }) => {
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

  const averageSessions = new AverageSessions(data).toJSON();
  return (
    <div className='user__week__session'>
      {(data) ? (
        <SimpleLineChart data={averageSessions} />
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default GetUserSession;