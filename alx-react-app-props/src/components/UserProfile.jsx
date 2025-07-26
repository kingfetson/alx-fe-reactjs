import { useContext } from 'react';
import UserContext from '../context/UserContext';

function UserProfile() {
  const users = useContext(UserContext);

  return (
    <div>
      {users.map((user, index) => (
        <div key={index} style={{
          border: '1px solid #ccc',
          borderRadius: '8px',
          padding: '15px',
          margin: '10px 0',
          backgroundColor: '#fafafa'
        }}>
          <h3>{user.name}</h3>
          <p>Age: {user.age}</p>
          <p>{user.bio}</p>
        </div>
      ))}
    </div>
  );
}

export default UserProfile;
