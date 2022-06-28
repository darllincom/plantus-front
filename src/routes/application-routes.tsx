import { Route, Routes } from 'react-router-dom';
import Main from '../pages/main';
import NotFound from '../pages/notfound';

export default function ApplicationRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Main />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}
