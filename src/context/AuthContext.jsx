import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();
const initialValues = {
  username: '',
  password: '',
};
// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('user'));
  const [form, setForm] = useState(initialValues);
  const [user, setUser] = useState(isAuth ? localStorage.getItem(`user`) : '');

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.username.trim() || !form.password.trim()) {
      alert('Completa los datos');
      return;
    }

    setUser(form.username);
    setForm(initialValues);
    setIsAuth(true);

    localStorage.setItem('user', form.username);
    navigate(`/user/${form.username}`);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/Login');
    setIsAuth(false);
    setUser('');
  };

  const data = {
    isAuth,
    form,
    user,
    handleChange,
    handleSubmit,
    handleLogout,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
export { AuthProvider };
export default AuthContext;
