import axios from 'axios';

export const uploadService = axios.create({
	baseURL: import.meta.env.VITE_UPLOAD_SERVICE_URL
});
