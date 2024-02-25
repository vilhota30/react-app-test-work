import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const setAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
  
  const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
    'auth/register',
    async (credentials, { rejectWithValue }) => {
      try {
        const response = await axios.post('api/auth/register', credentials);
        return response.data;
      } catch (error) {
        const { code } = error.response.data;
        if (code === 11000)
          return rejectWithValue({
            message: 'User with this email already exist',
          });
        toast.error('Email Already Exist! Please enter unique email');
  
        return rejectWithValue(error.message);
      }
    },
);


  export const login = createAsyncThunk(
    'auth/login',
    async (credentials, { rejectWithValue }) => {
      try {
        const response = await axios.post('api/auth/login', credentials);
  
        setAuthHeader(response.data.accessToken);
  
        if (response.status === 200) {
          console.groupCollapsed('Login successful');
          console.log('Login successful:', response);
          console.groupEnd();
        }
  
        return response.data;
      } catch (error) {
        toast.error('Incorrect data. Check your input and try again.');
        return rejectWithValue(error.message);
      }
    },
);

export const logout = createAsyncThunk(
    'auth/logout',
    async (token, { rejectWithValue }) => {
      try {
        setAuthHeader(token);
        await axios.post('api/auth/logout');
        clearAuthHeader();
      } catch (error) {
        return rejectWithValue(error.message);
      }
    },
);

export const update = createAsyncThunk(
  'auth/update',
  async ({ token, editedUserFormData }, { rejectWithValue }) => {
    try {
      setAuthHeader(token);
      const response = await axios.patch(
        'api/auth/current',
        editedUserFormData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        },
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

