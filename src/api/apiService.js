import axios from 'axios';
import mockData from '../data/db.json'

const mockUserData = false;

const apiClient = axios.create({
  baseURL: 'http://localhost:3500',
  headers: {
    'Content-Type': 'text/plain; charset=utf-8'
  },
});

const endpoints = {
  user: 'user',
  activity: 'activity',
  averageSessions: 'average-sessions',
  performance: 'performance',
};


/**
 * Makes a GET request to the API based on the provided endpoint and id.
 *
 * @param {string} endpoint - The API endpoint to fetch data from.
 * @param {string|number} id - The user's id.
 * @return {Promise} A promise that resolves with the API response data.
 */
const ApiService = (endpoint, id) => {

  if (mockUserData) {
    return new Promise((resolve, reject) => {
      const dataSection = mockData[endpoint];

      if (!dataSection) {
        reject(new Error(`Endpoint invalide : ${endpoint}.`));
        return;
      }

      const userData = dataSection.find(
        (item) => item.data && (item.data.id === id || item.data.userId === id)
      );

      if (!userData || !userData.data) {
        reject(new Error(`Pas de données trouvées pour l'endpoint "${endpoint}" et l'id "${id}".`));
        return;
      }

      resolve(userData);
    });

  } else {
    if (!endpoints[endpoint]) {
      throw new Error(`Vous devez fournir un endpoint valide.`);
    }

    if (endpoints[endpoint] === 'user') {
      return apiClient.get(`/${endpoints[endpoint]}/${id}`);
    } else {
      return apiClient.get(`/user/${id}/${endpoints[endpoint]}`);
    }
  }
};

export default ApiService