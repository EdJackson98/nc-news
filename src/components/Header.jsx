import { useContext } from 'react';
import { UserContext } from '../contexts/user-context';

const Header1 = () => {
  const {user, setUser} = useContext(UserContext)
    return (
  <div className="Header1">
      <p>Logged in as: {user}</p>
  </div>
    );
}

export default Header1;