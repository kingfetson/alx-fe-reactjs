function About() {
  return (
    <div
      style={{
        maxWidth: '800px',
        margin: '40px auto',
        padding: '20px',
        backgroundColor: '#f4f4f4',
        borderRadius: '10px',
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.6',
        color: '#333',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
      }}
    >
      <h2 style={{ textAlign: 'center', color: '#007BFF' }}>About Us</h2>

      <p>
        Welcome to <strong>My Company</strong> – your trusted partner in innovation and digital solutions. 
        We specialize in crafting high-quality web and mobile applications tailored to meet your unique business needs.
      </p>

      <p>
        Founded in 2021, our team is made up of experienced developers, designers, and strategists passionate about delivering impactful digital experiences.
        We believe in combining technology with creativity to bring ideas to life.
      </p>

      <h3 style={{ marginTop: '30px', color: '#007BFF' }}>Our Mission</h3>
      <p>
        To empower businesses and individuals by creating user-centric digital products that drive value and success.
      </p>

      <h3 style={{ marginTop: '30px', color: '#007BFF' }}>What We Do</h3>
      <ul style={{ paddingLeft: '20px' }}>
        <li>✅ Web Application Development</li>
        <li>✅ Mobile App Development</li>
        <li>✅ UI/UX Design</li>
        <li>✅ API Integration & Backend Systems</li>
        <li>✅ IT Consulting & Support</li>
      </ul>

      <h3 style={{ marginTop: '30px', color: '#007BFF' }}>Why Choose Us</h3>
      <p>
        We are committed to quality, innovation, and client satisfaction. Our agile approach ensures you're involved at every step of the project, from concept to delivery.
      </p>

      <p style={{ marginTop: '40px', fontStyle: 'italic', textAlign: 'center' }}>
        "Driven by passion, powered by technology."
      </p>
    </div>
  );
}

export default About;
