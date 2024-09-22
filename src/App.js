import './App.css';

import { useSelector } from 'react-redux';

import Profile from './components/Profile';
import Login from './components/Login';
import ChangeColor from './components/ChangeColor'
import FormUser from './components/FormUser'
import DisplayFormData from './components/DisplayFormData'

function App() {
  const formData = useSelector((state) => state.form.value);
  return (
    <div className="App">
      <Profile />
      <Login />
      <ChangeColor />
      <FormUser />
      <DisplayFormData />
      <div style={{ marginTop: '20px' }}>
        <h2>Submitted Form Data</h2>
        <p><strong>First Name:</strong> {formData.name}</p>
        <p><strong>Last Name:</strong> {formData.lastName}</p>
        <p><strong>Is Active:</strong> {formData.isActive ? 'Yes' : 'No'}</p>
        <p><strong>Role:</strong> {formData.role}</p>
        <p><strong>Password:</strong> {formData.password ? formData.password : 'Not Set'}</p>
      </div>
    </div>
  );
}

export default App;
