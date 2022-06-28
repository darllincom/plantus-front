import { Route, Routes } from 'react-router-dom';
import NotFound from '../pages/notfound';
import SignIn from '../templates/signin';

export default function PublicRoutes() {
	return (
		<Routes>
			<Route path="/" element={<SignIn />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}
