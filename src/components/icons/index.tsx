import File from './components/File';
import Profile from './components/Profile';

export enum IconNames {
	PERFIL = 'perfil',
	FILE = 'file'
}

type IconsProps = {
	name: IconNames;
	size: 'lg' | 'sm';
	bg?: boolean;
	selected?: boolean;
};

export default function Icons({ name, size, bg, selected }: IconsProps) {
	return (
		<>
			{(() => {
				switch (name) {
					case IconNames.PERFIL:
						return (
							<>
								{bg ? (
									<div className="px-2 py-2 bg-light-green-variant rounded-md">
										<Profile size={size} />
									</div>
								) : (
									<Profile size={size} />
								)}
							</>
						);
					case IconNames.FILE:
						return <File size={size} />;
				}
			})()}
		</>
	);
}
