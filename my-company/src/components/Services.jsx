import React from 'react';

function Services() {
  const services = [
    {
      title: 'Web Development',
      description: 'We create responsive and modern websites tailored to your business needs.',
    },
    {
      title: 'Mobile App Development',
      description: 'We design and develop cross-platform mobile apps that deliver great user experience.',
    },
    {
      title: 'UI/UX Design',
      description: 'We provide clean, intuitive, and user-centered design solutions for web and mobile.',
    },
    {
      title: 'SEO & Marketing',
      description: 'Boost your online presence and reach more customers through smart SEO strategies.',
    },
  ];

  return (
    <div style={{ padding: '40px', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <h2 style={{ textAlign: 'center', fontSize: '32px', color: '#2c3e50' }}>Our Services</h2>
      <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto', color: '#555', fontSize: '16px' }}>
        We offer a wide range of professional digital services to help your business thrive in the online world.
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '30px' }}>
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#fff',
              padding: '20px',
              margin: '15px',
              width: '280px',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <h3 style={{ fontSize: '22px', color: '#007BFF' }}>{service.title}</h3>
            <p style={{ fontSize: '15px', color: '#333' }}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
