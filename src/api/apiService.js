import axios from 'axios';

// Configuration d'Axios (vous pouvez configurer l'URL de base ici si nécessaire)
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

// Fonction générique pour obtenir des données
const ApiService = (endpoint, id) => {

  if (!endpoints[endpoint]) {
    throw new Error(`Vous devez fournir un endpoint valide.`);
  }

  if (endpoints[endpoint] === 'user') {
    return apiClient.get(`/${endpoints[endpoint]}/${id}`);
  } else {
    return apiClient.get(`/user/${id}/${endpoints[endpoint]}`);
  }

};

export default ApiService