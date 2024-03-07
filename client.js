const axios = require('axios');

const clientID = ' 1328237384523747';
const clientSecret = '3eeb7149c763e674a67c272e33b28d7c';

// Example API request using Axios
axios.get('https://api.instagram.com/v1/users/self/', {
  params: {
    access_token: `${clientID}|${clientSecret}`
  }
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
