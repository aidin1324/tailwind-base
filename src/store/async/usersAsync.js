import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllUsers = createAsyncThunk(
  'users/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://fakestoreapi.com/users');
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchUserById = createAsyncThunk(
  'users/fetchById',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/users/${userId}`);
      if (!response.ok) {
        throw new Error('User not found');
      }
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);