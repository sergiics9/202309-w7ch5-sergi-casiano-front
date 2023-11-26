import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiRepo } from '../services/api.repo';
import { User } from '../models/user';

export const loadUsersThunk = createAsyncThunk<User[], ApiRepo>(
  'users/load',
  async (repo) => {
    const users = await repo.getUsers();
    return users;
  }
);

export const updateUsersThunk = createAsyncThunk<
  User,
  {
    repo: ApiRepo;
    id: User['id'];
    updateUsers: Partial<User>;
  }
>('users/update', async ({ repo, id, updateUsers }) => {
  const finalUsers = await repo.updateUser(id, updateUsers);
  return finalUsers;
});
