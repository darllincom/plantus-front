import Edit from './components/Edit';
import Home from './components/Home';
import HomeSelected from './components/HomeSelected';
import Profile from './components/Profile';
import ProfileSelected from './components/ProfileSelected';
import Team from './components/Team';
import TeamSelected from './components/TeamSelected';
import V from './components/V';
import X from './components/X';

export enum IconNames {
	PERFIL = 'perfil',
	EDIT = 'file',
	X = 'x',
	V = 'v',
	HOME = 'home',
	EQUIPE = 'equipe'
}

type IconsProps = {
	name: IconNames;
	size: 'xl' | 'lg' | 'sm';
	bg?: boolean;
	selected?: boolean;
};

export default function Icons({ name, size, bg, selected }: IconsProps) {
	return (
		<>
			{(() => {
				switch (name) {
					case IconNames.HOME:
						return (
							<>
								{selected ? <HomeSelected size={size} /> : <Home size={size} />}
							</>
						);
          case IconNames.EQUIPE:
            return (
							<>
								{bg ? (
									<>
										{selected ? (
											<div className="px-2 py-2 bg-light-green-variant rounded-md">
												<TeamSelected size={size} />
											</div>
										) : (
											<div className="px-2 py-2 bg-light-green-variant rounded-md">
												<Team size={size} />
											</div>
										)}
									</>
								) : (
									<>
										{selected ? (
											<TeamSelected size={size} />
										) : (
											<Team size={size} />
										)}
									</>
								)}
							</>
						);
					case IconNames.PERFIL:
						return (
							<>
								{bg ? (
									<>
										{selected ? (
											<div className="px-2 py-2 bg-light-green-variant rounded-md">
												<ProfileSelected size={size} />
											</div>
										) : (
											<div className="px-2 py-2 bg-light-green-variant rounded-md">
												<Profile size={size} />
											</div>
										)}
									</>
								) : (
									<>
										{selected ? (
											<ProfileSelected size={size} />
										) : (
											<Profile size={size} />
										)}
									</>
								)}
							</>
						);
					case IconNames.EDIT:
						return (
							<>
								{bg ? (
									<div className="px-2 py-2 bg-light-green-variant rounded-full">
										<Edit size={size} />
									</div>
								) : (
									<Edit size={size} />
								)}
							</>
						);
					case IconNames.V:
						return <V size={size} />;
					case IconNames.X:
						return <X size={size} />;
				}
			})()}
		</>
	);
}
