function Home() {
  return (
    <div
      style={{
        maxWidth: '900px',
        margin: '40px auto',
        padding: '30px',
        backgroundColor: '#eaf4fc',
        borderRadius: '12px',
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.7',
        color: '#222',
        boxShadow: '0 6px 12px rgba(224, 39, 39, 0.1)',
        textAlign: 'center'
      }}
    >
      <h1 style={{ color: '#007ACC', marginBottom: '20px' }}>Welcome to My Company</h1>

      <p style={{ fontSize: '18px' }}>
        We're thrilled to have you here! At <strong>My Company</strong>, we blend innovation with excellence to
        deliver top-tier web and mobile solutions for businesses of all sizes.
      </p>

      <p style={{ marginTop: '20px' }}>
        Whether you're looking for a sleek website, a powerful app, or a full-stack solution — our team is here
        to make it happen. Explore our <a href="/services" style={{ color: '#007ACC', textDecoration: 'underline' }}>Services</a>, learn more <a href="/about" style={{ color: '#007ACC', textDecoration: 'underline' }}>About Us</a>,
        or <a href="/contact" style={{ color: '#007ACC', textDecoration: 'underline' }}>Get in Touch</a> to start your project.
      </p>

      <div
        style={{
          marginTop: '30px',
          padding: '15px',
          backgroundColor: '#ffffff',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
        }}
      >
        <h3 style={{ color: '#007ACC' }}>Why Choose Us?</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>🚀 Fast & Reliable Delivery</li>
          <li>🎨 Modern & Intuitive Design</li>
          <li>🛠️ Customized Solutions</li>
          <li>🤝 Dedicated Support</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
