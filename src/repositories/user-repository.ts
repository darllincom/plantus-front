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

	static async updatePersonalInfo(id: string, user: User, imageFile: File | string) {
		const formData = new FormData()

    formData.append('fullName', user.fullName)
    formData.append('birthDate', user.birthDate)
    formData.append('email', user.credentials?.email)
    formData.append('phone', user.phone)
    formData.append('whatsapp', user.whatsapp)
    formData.append('dateStarted', user.dateStarted)
    formData.append('informations', user.informations)
    formData.append('hasRegisteringPending', user.hasRegisteringPending)
    formData.append('occupation', user.occupation)
    formData.append('office', user.office)
    formData.append('imageFile', imageFile)
    
    const res = await api.patch(
			`users/${id}`,
			formData,
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
