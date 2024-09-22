import React from 'react';
import { useSelector } from 'react-redux';

function DisplayFormData() {
  const formData = useSelector((state) => state.form.value);

  if (!formData) {
    return <p>No form data submitted yet.</p>;
  }

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Submitted Form Data</h2>
      <p><strong>First Name:</strong> {formData.name}</p>
      <p><strong>Last Name:</strong> {formData.lastName}</p>
      <p><strong>Is Active:</strong> {formData.isActive ? 'Yes' : 'No'}</p>
      <p><strong>Role:</strong> {formData.role}</p>
      <p><strong>Password:</strong> {formData.password ? formData.password : 'Not Set'}</p>
    </div>
  );
}

export default DisplayFormData;
