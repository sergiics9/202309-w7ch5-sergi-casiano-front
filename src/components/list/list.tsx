import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useEffect } from 'react';
import { useUsers } from '../../hooks/use.users';
import { Card } from '../card/card';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Filter } from '../filter/filter';

export function List() {
  const { users } = useSelector((state: RootState) => state.usersState);
  const { loadUsers } = useUsers();

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  return (
    <>
      <Header></Header>
      <Filter></Filter>
      <ul className="users-list row list-unstyled">
        {users.map((item) => (
          <Card key={item.name} user={item}></Card>
        ))}
      </ul>
      <Footer></Footer>
    </>
  );
}
