import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { submitForm } from "../features/Form"; // Correct action imported

function FormUser() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isActive, setIsActive] = useState(true);
  const [role, setRole] = useState('admin');

  const handleSubmit = () => {
    const formData = {
      name,
      lastName,
      isActive,
      role,
      password: null
    };

    dispatch(submitForm(formData)); // Dispatch with form data
  };

  return (
    <div style={{ marginTop: '60px' }}>
      <input
        type="text"
        placeholder="First Name"
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={(event) => setLastName(event.target.value)}
      />
      <input
        type="checkbox"
        checked={isActive}
        onChange={(event) => setIsActive(event.target.checked)}
      />
      <input
        type="text"
        placeholder="Role"
        onChange={(event) => setRole(event.target.value)}
      />
      <button onClick={handleSubmit}>
        Submit Form
      </button>
    </div>
  );
}

export default FormUser;
