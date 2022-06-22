export default function dateMask(value: string) {
	return value
		.replace(/\D/g, '')
		.replace(/^(\d{2})(\d{2})/g, '$1/$2')
		.replace(/(\d{2})(\d{4})+?$/, '$1/$2');
}
