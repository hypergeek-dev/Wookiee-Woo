import axios from 'axios';

const API_URL = process.env.REACT_APP_SITE_BASE_URL;

axios.defaults.baseURL = API_URL


const register = (username, email, password) => {
  return axios.post('auth/register/', {
    username,
    email,
    password
  });
};

const login = (username, password) => {
  return axios.post(API_URL + 'token/', {
    username,
    password
  });
};

const getProfile = (token) => {
  return axios.get(API_URL + 'profile/', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
};

const updateProfile = (token, data) => {
  return axios.put(API_URL + 'profile/', data, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
};

const deleteProfile = (token) => {
  return axios.delete(API_URL + 'profile/', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
};

const authService = {
  register,
  login,
  getProfile,
  updateProfile,
  deleteProfile
};

export default authService;
