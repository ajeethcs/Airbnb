import axios from 'axios';
import { bearer } from './http-auth';

export default axios.create({
  baseURL: 'https://staging.api.trillium.health',
  headers: {
    'Content-type': 'application/json',
    Authorization: `Bearer ${bearer}`,
  },
});
