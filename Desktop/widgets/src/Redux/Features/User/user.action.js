import { createAsyncThunk } from '@reduxjs/toolkit';
import UserService from './user.service';

export const getUsersByFilter = createAsyncThunk(
  "user/usersByFilter",
  async (data) => {
    const res = await UserService.usersByFilter(data);
    return res.data;
  }
);

export const getUserById = createAsyncThunk(
  "user/userById",
  async (data) => {
    const res = await UserService.userById(data);
    return res.data;
  }
);

export const createUser = createAsyncThunk(
  "user/createUser",
  async (data) => {
    const res = await UserService.createUser(data);
    return res.data;
  }
);

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (data) => {
    const res = await UserService.updateUser(data);
    return res.data;
  }
);

export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (data) => {
    const res = await UserService.deleteUser(data);
    return res.data;
  }
);


