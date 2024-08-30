import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import ApiService from '../api/apiService';
import '../css/Home.css';

function UserInfos() {

  const params = useParams();
  const id = parseInt(params.id);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const endpoint = "user"

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

  const JsonDisplay = ({ data }) => {
    return (
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    );
  }

  return (
    <div>
      <JsonDisplay data={data} />
    </div>
  );
}

export default UserInfos;