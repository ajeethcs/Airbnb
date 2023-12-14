import { createSlice } from '@reduxjs/toolkit';
import {
  getUserById,
  getUsersByFilter,
  createUser,
  updateUser,
  deleteUser,
} from './user.action';

const userSlice = createSlice({
  name: 'user',
  initialState: { usersList: [] },
  extraReducers: (builder) => {
    builder.addCase(getUsersByFilter.fulfilled, (state, action) => {
      if (action.payload.statusCode === 200) {
        state.usersList = action.payload.data;
      } else if (action.payload.statusCode === 401) {
        state.error = action.payload.data;
        window.location.href = '/login'
      }
    });
    builder.addCase(getUsersByFilter.pending, (state) => {
      state.loading = 1;
    });
    builder.addCase(getUsersByFilter.rejected, (state, action) => {
      state.loading = 0;
      state.error = action.error.message;
    });

    builder.addCase(getUserById.fulfilled, (state, action) => {
      state.loading = 0;
      if (action.payload.statusCode === 200) {
        state.userById = action.payload.data;
      } else if (action.payload.statusCode === 401) {
        state.error = action.payload.data;
        window.location.href = '/login'
      }
    });

    builder.addCase(createUser.fulfilled, (state, action) => {
      if (action.payload.statusCode === 200) {
        state.userCreated = true;
      } else if (action.payload.statusCode === 401) {
        state.userCreated = false;
      }
    });

    builder.addCase(updateUser.fulfilled, (state, action) => {
      if (action.payload.statusCode === 200) {
        state.userUpdated = true;
      } else if (action.payload.statusCode === 401) {
        state.userUpdated = false;
      }
    });

    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.loading = 0;
      if (action.payload.statusCode === 200) {
        state.userDeleted = true;
      } else if (action.payload.statusCode === 401) {
        state.userDeleted = false;
      }
    });
  },
});

const { reducer } = userSlice;
export default reducer;
