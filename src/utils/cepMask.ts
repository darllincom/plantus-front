export default function maskedCep(value: string) {
	return value
		.replace(/\D/g, '')
		.replace(/^(\d{2})(\d{3})/g, '$1.$2')
		.replace(/(\d{3})(\d{3})+?$/, '$1-$2');
}
