import { Address } from '../models/address';
import { api } from '../api/base';
import { User } from '../models/user';

export class UserRepository {
	static async fetchOffices() {
		const res = await api.get('/users/offices');

		return res;
	}

	static async fetchProfile(id: string) {
		const res = await api.get(`/users/${id}`);

		return res;
	}

	static async updatePersonalInfo(id: string, user: Partial<User>) {
		const res = await api.patch(
			`users/${id}`,
			{
				fullName: user.fullName,
				birthDate: user.birthDate,
				email: user.credentials?.email,
				phone: user.phone,
				whatsapp: user.whatsapp,
				dateStarted: user.dateStarted,
				informations: user.informations,
				hasRegisteringPending: user.hasRegisteringPending
			},
			{
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			}
		);

		return res;
	}

	static async updateCard(
		id: string,
		user: Partial<User>,
		imageFile: File | string
	) {
		const res = await api.patch(
			`users/${id}`,
			{
				occupation: user.occupation,
				office: user.office,
				imageFile
			},
			{
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			}
		);

		return res;
	}

	static async createAddress(
		id: string,
		address: Address,
		comprovantFile: File
	) {
		const res = await api.post(
			`users/${id}/address`,
			{
				streetName: address.streetName,
				addressNumber: address.addressNumber,
				district: address.district,
				CEP: address.CEP,
				state: address.state,
				city: address.city,
				complementOrReference: address.complementOrReference,
				comprovantFile
			},
			{
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			}
		);

		return res;
	}

	static async updateAddress(
		id: string,
		address: Address,
		comprovantFile: File | string
	) {
		const res = await api.patch(
			`users/${id}/address`,
			{
				streetName: address.streetName,
				addressNumber: address.addressNumber,
				district: address.district,
				CEP: address.CEP,
				state: address.state,
				city: address.city,
				complementOrReference: address.complementOrReference,
				comprovantFile
			},
			{
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			}
		);

		return res;
	}
}
