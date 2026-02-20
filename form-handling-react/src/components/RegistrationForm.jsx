import { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic Validation
    if (!formData.username || !formData.email || !formData.password) {
      setError('All fields are required!');
      return;
    }
    setError('');
    console.log('Form Submitted (Controlled):', formData);
    alert('Registration Successful!');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
      <h2>Manual Controlled Form</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
      
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;