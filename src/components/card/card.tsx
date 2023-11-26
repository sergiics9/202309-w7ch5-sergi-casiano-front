import { User } from '../../models/user';
import '../../main.scss';
import { useUsers } from '../../hooks/use.users';
import { Link } from 'react-router-dom';

type Props = {
  user: User;
};

export function Card({ user }: Props) {
  const { handleDetailsPage } = useUsers();

  return (
    <li className="card">
      <div className="card-container">
        <Link to={'/details/' + user.id} style={{ textDecoration: 'none' }}>
          <p className="user-name" onClick={() => handleDetailsPage(user)}>
            User: {user.name}
          </p>
        </Link>
      </div>
    </li>
  );
}
