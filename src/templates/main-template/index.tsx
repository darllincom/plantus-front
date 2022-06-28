import Sidebar from '../../components/sidebar';
import Footer from '../../components/footer';
import Welcome from '../../layout/welcome';
import ContentBar from '../../components/content-bar';
import Profile from '../../layout/profile';
import { Route, Routes } from 'react-router-dom';
import { ProfileProvider } from '../../context/profile-provider';
import Team from '../../layout/team';
import CreateUser from '../../layout/create-user';

export default function MainTemplate() {
	return (
		<div
			className="
        container relative
        flex items-start justify-start flex-row
        bg-dark-white 
        max-w-none mx-auto min-h-screen
      "
		>
			<Sidebar />
			<main className="container fixed right-0 h-screen flex flex-row justify-between w-5/6 max-w-none lg:w-[90%]">
				<section className="w-9/12 px-6 overflow-auto">
					<Routes>
						<Route path="" element={<Welcome />} />
						<Route
							path="/perfil/:id"
							element={
								<ProfileProvider>
									<Profile />
								</ProfileProvider>
							}
						/>
            <Route path='/perfil/adicionar' element={<CreateUser />} />
            <Route path='/equipe' element={<Team />} />
					</Routes>
				</section>
				<ContentBar />
			</main>
			<Footer />
		</div>
	);
}
