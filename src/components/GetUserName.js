import React, { useState, useEffect } from 'react';
import ApiService from '../api/apiService';
import User from '../models/User';

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
      {(data && data.length > 0) ? (
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