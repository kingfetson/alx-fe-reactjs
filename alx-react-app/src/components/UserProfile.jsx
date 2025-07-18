const UserProfile = (props) => {
  return (
    <div style={styles.card}>
      <h2>{props.name}</h2>
      <p><strong>Age:</strong> {props.age}</p>
      <p><strong>Bio:</strong> {props.bio}</p>
    </div>
  );
};

// Optional: basic inline styling
const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "20px",
    maxWidth: "300px",
    margin: "20px auto",
    backgroundColor: "#f9f9f9",
    textAlign: "center"
  }
};

export default UserProfile;
