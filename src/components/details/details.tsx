import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Link } from 'react-router-dom';

export function Details() {
  const { currentUser } = useSelector((state: RootState) => state.usersState);

  return (
    <li className="card">
      <div className="details-container">
        <p className="user-name">
          ID: <span className="results">{currentUser?.id}</span>
        </p>
        <p className="user-name">
          Name: <span className="results">{currentUser?.name}</span>
        </p>
        <p className="user-name">
          Surname: <span className="results">{currentUser?.surname}</span>
        </p>
        <p className="user-name">
          Age: <span className="results">{currentUser?.age}</span>
        </p>
        <p className="user-name">
          Friends: <span className="results">{currentUser?.friends}</span>
        </p>
        <p className="user-name">
          Opps: <span className="results">{currentUser?.opps}</span>
        </p>
      </div>
      <Link to={'/'}>
        <button className="details-goback">Home</button>
      </Link>
    </li>
  );
}
