import axios from 'axios';

const client = axios.create();
client.defaults.baseURL = 'https://tilup-release-v1.herokuapp.com/';

export default client;
