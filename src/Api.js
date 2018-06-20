import axios from 'axios';

const Api = {
  fetch(url) {
    return new Promise((resolve, reject) => {
      axios.get(url).then(function (response) {
        console.log('axios response', response);
        if (response.statusText === 'OK') {
          resolve(response.data);
        } else {
          reject(response);
        }
      }).catch(function (error) {
        reject(error);
      });
    });
  }
};

export default Api;