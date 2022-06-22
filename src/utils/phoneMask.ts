export default function phoneMask(value: string) {
	return value
		.replace(/\D/g, '')
		.replace(/^(\d{2})(\d{1})/g, '($1) $2 ')
		.replace(/(\d{4})(\d{4})+?$/g, '$1-$2');
}
