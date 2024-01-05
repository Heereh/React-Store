import { useParams } from 'react-router-dom';
import { Button } from '@nextui-org/react';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../redux/user/userslice.js';

const UserProfiler = () => {
	const { username } = useParams();
	const dispatch = useDispatch();

	return (
		<div>
			Biervenido de vuelta {username}
			<Button
				onClick={() => {
					dispatch(setCurrentUser(null));
				}}>
				Cerrar
			</Button>
		</div>
	);
};

export default UserProfiler;
