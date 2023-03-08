const axios = require('axios');

export default axios.create({
  baseURL: 'http://127.0.0.1:3000',
  timeout: 1000,
  header: {
    // 'Access-Control-Allow-Origin': '*',
  },
});
