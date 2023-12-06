import { useParams } from 'react-router-dom';

const UserProfiler = () => {
  const { username } = useParams();

  return <div>Biervenido de vuelta {username}</div>;
};

export default UserProfiler;
