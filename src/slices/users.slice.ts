import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from '../models/user';
import { loadUsersThunk, updateUsersThunk } from './users.thunk.js';

type UsersState = {
  users: User[];
  usersState: 'idle' | 'loading' | 'error';
  currentUser: User | null;
};

const initialState: UsersState = {
  users: [],
  usersState: 'idle',
  currentUser: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setCurrentUser: (
      state: UsersState,
      { payload }: PayloadAction<User | null>
    ) => {
      state.currentUser = payload;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadUsersThunk.pending, (state: UsersState) => {
      state.usersState = 'loading';
      return state;
    });
    builder.addCase(
      loadUsersThunk.fulfilled,
      (state: UsersState, { payload }: PayloadAction<User[]>) => {
        state.users = payload;
        state.usersState = 'idle';
        return state;
      }
    );
    builder.addCase(loadUsersThunk.rejected, (state: UsersState) => {
      state.usersState = 'error';
      return state;
    });
    builder.addCase(
      updateUsersThunk.fulfilled,
      (state: UsersState, { payload }: PayloadAction<User>) => {
        state.users[state.users.findIndex((item) => item.id === payload.id)] =
          payload;
        return state;
      }
    );
  },
});

export default usersSlice.reducer;

export const { setCurrentUser } = usersSlice.actions;
