import axios from 'axios';

const client = axios.create();
client.defaults.baseURL = 'http://tilup.pythonanywhere.com/';

export default client;
