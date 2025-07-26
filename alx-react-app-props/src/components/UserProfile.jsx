function UserProfile({ name, age, bio }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '15px',
      margin: '10px 0',
      backgroundColor: '#fafafa'
    }}>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>{bio}</p>
    </div>
  );
}

export default UserProfile;
