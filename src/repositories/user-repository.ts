import { Address } from '../models/address';
import { api } from '../api/base';

export class UserRepository {
	static async fetchProfile(id: string) {
		const res = await api.get(`/users/${id}`);

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
