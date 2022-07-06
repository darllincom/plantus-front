type PopupProps = {
  showPopup: boolean
  errorsPopup: string[]
}

export default function Popup({ errorsPopup, showPopup }: PopupProps) {
	return (
		<div
			className={`absolute w-1/2 top-[25%] left-[25%] p-7 bg-white z-50 rounded-lg shadow-lg transition-all duration-500 ${
				showPopup ? 'block' : 'hidden'
			}`}
		>
			<div className="w-full text-center">
				<h1 className="text-xl font-semibold text-red-500">
					Oops... Algo deu errado
				</h1>
			</div>
			<div className="w-full mt-5 text-justify">
				<p>Os erros foram: </p>
				<p>{errorsPopup.map((err) => `${err}, `)}</p>
			</div>
			<div className="w-full flex items-center justify-center mt-5 ">
				<button
					className="px-6 py-2 rounded-lg bg-light-green text-lg font-semibold text-dark-green"
				>
					Entendi
				</button>
			</div>
		</div>
	);
}
