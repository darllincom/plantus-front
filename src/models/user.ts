import { Address } from './address';
import { Credentials } from './credentials';
import { Documents } from './documents';
import { Health } from './health';
import { Professional } from './professional';

export type User = {
	id?: string;
	fullName: string;
	birthDate: string;
	cpf: string;
	phone: string;
	whatsapp: string;
	dateStarted: string;
	occupation: string;
	office: string;
	informations: string;
	gender: string;
	image?: string;
	hasRegisteringPending: string;
	credentials: Credentials;
	address?: Address;
	health?: Health;
	documents?: Documents;
	professional?: Professional;
};
