function WelcomeMessage({ username }) {
  return (
    <div style={{
      backgroundColor: '#e6f7ff',
      border: '1px solid #b3e0ff',
      padding: '15px',
      borderRadius: '6px',
      margin: '10px 0',
      textAlign: 'center'
    }}>
      <h2>Welcome, {username}!</h2>
      <p>Glad to have you back 🚀</p>
    </div>
  );
}

export default WelcomeMessage;
