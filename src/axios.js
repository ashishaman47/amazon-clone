import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://us-central1-clone-d3a1a.cloudfunctions.net/api',
  // 'http://localhost:5001/clone-d3a1a/us-central1/api', //the API URL (client function) local sys
});

export default instance;

// hosted cloud function URL
// https://us-central1-clone-d3a1a.cloudfunctions.net/api