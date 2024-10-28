import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import ApiService from '../api/apiService';
import '../css/Home.css';

/**
 * Retrieves and displays the data from the provided endpoint and id as a JSON string.
 *
 * @param {string} endpoint - The API endpoint to fetch data from.
 * @return {JSX.Element} A JSX element displaying the retrieved data in a JSON string.
 */
function JsonDataDisplay({ endpoint }) {

  const params = useParams();
  const id = parseInt(params.id);

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

/**
 * Displays the provided data as a formatted JSON string.
 *
 * @param {object} data - The data to be displayed as a JSON string.
 * @return {JSX.Element} A preformatted text element displaying the JSON string.
 */
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

export default JsonDataDisplay;