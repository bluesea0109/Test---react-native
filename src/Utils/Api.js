import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000';

const client = axios.create({
  baseURL: API_BASE_URL,
});

const extractErrors = (messages, data) => {
  Object.keys(data).forEach(key => {
    if (
      typeof data[key] === 'object' &&
      Object.prototype.hasOwnProperty.call(data.key, 'length')
    ) {
      data[key].forEach(item => {
        messages.push(item);
      });
    } else if (typeof data[key] === 'object') {
      return extractErrors(messages, data[key]);
    } else {
      messages.push(data[key]);
    }
    return [];
  });
};

client.interceptors.response.use(
  response => response,
  error => {
    const {response} = error;
    const generalErrorMessage = 'The request was unsuccessful.';
    let messages = [generalErrorMessage];
    switch (response && response.status) {
      case 500:
        break;
      case 400: {
        const data = response ? response.data : {};
        const extraction = extractErrors(messages, data);
        messages = extraction.messages;
        break;
      }
      case 401:
        break;
      default:
        break;
    }
  },
);

export default client;
