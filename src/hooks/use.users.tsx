import { useCallback, useMemo } from 'react';
import { ApiRepo } from '../services/api.repo';
import { useDispatch } from 'react-redux';
import { loadUsersThunk, updateUsersThunk } from '../slices/users.thunk';
import { AppDispatch } from '../store/store';
import { User } from '../models/user';
import { setCurrentUser } from '../slices/users.slice';

export function useUsers() {
  const dispatch = useDispatch<AppDispatch>();

  const repo = useMemo(() => new ApiRepo(), []);

  const loadUsers = useCallback(async () => {
    try {
      dispatch(loadUsersThunk(repo));
    } catch (error) {
      // console.log((error as Error).message);
    }
  }, [repo]);

  const updateUser = async (id: User['id'], user: Partial<User>) => {
    try {
      dispatch(updateUsersThunk({ id, repo, updateUsers: user }));
    } catch (error) {
      // console.log((error as Error).message);
    }
  };

  const handleDetailsPage = async (user: User) => {
    dispatch(setCurrentUser(user));
  };

  return {
    loadUsers,
    updateUser,
    handleDetailsPage,
  };
}
