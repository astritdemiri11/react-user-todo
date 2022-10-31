import PropTypes from 'prop-types';

import Card from '../UI/Card';
import classes from './UsersList.module.css';

const UsersList = ({ users }) => (
  <Card className={classes.users}>
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name}
          &nbsp;(
          {user.age}
          &nbsp; years old)
        </li>
      ))}
    </ul>
  </Card>
);

UsersList.propTypes = {
  users: PropTypes.arrayOf(Object).isRequired,
};

export default UsersList;
