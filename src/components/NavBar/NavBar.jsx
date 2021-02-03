import { Link, NavLink } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav class="grey darken-3">
      <NavLink to="/orders">Order History</NavLink>
      &nbsp; 🍷 &nbsp;
      <NavLink  to="/orders/new">New Order</NavLink>
      &nbsp; 🍷 &nbsp;
      {user && <span>Welcome, {user.name}</span>}
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}

