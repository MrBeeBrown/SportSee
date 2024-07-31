import axios from 'axios';

// Configuration d'Axios (vous pouvez configurer l'URL de base ici si nécessaire)
const apiClient = axios.create({
  baseURL: 'http://localhost:3500',
  headers: {
    'Content-Type': 'application/json',
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
  if (!id || (id !== '12' && id !== '18')) {
    throw new Error(`Vous devez fournir un identifiant.`);
  }

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