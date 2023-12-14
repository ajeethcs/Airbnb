import { createAsyncThunk } from '@reduxjs/toolkit';
import LoginService from './login.service';

interface Credentials{
    email: string,
    password: string,
    keycloakClientId: number,
}

export const createLogin = createAsyncThunk(
  "login/userLogin",
  async (credentials:Credentials) => {
    const res = await LoginService.userLogin(credentials);
    return res.data;
  }
);

export const createLogout = createAsyncThunk(
  "login/userLogout",
  async () => {
    const res = await LoginService.userLogout();
    return res.data;
  }
);
