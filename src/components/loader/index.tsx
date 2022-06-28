import Spinner from '../spinner';

export default function Loader() {
	return (
		<div className="w-full h-full flex items-center content-center justify-center transition-all">
			<Spinner />{' '}
			<h1 className="text-2xl text-base-green font-semibold">Carregando...</h1>
		</div>
	);
}
