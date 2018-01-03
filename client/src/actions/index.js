// index file for actions
import axios from 'axios';
import { FETCH_USER } from './types';

const fetchUser = () => {
	axios.get('/api/current_user');

};
