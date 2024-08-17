import React, { useState, useEffect } from 'react';
import ApiService from '../api/apiService';
import PropTypes from 'prop-types';
import BiaxialBarChart from '../charts/BiaxialBarChart';
import Activity from '../models/Activity';

/**
 * Retrieves user activity data from the API and renders a biaxial bar chart of the activity.
 *
 * @param {string} endpoint - The API endpoint to fetch data from.
 * @param {number} id - The user ID to fetch data for.
 * @return {JSX.Element} A biaxial bar chart of user activity or an error/loading message.
 */
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
      {(data) ? (
        <BiaxialBarChart data={activity} />
      ) : (
        <p>No data available</p>
      )}
    </div>
  )
};

GetUserActivity.propTypes = {
  endpoint: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

export default GetUserActivity;