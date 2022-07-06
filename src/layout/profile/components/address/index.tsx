import { useContext } from 'react';
import { ProfileContext } from '../../../../context/profile-provider';
import { Address as AddressModel } from '../../../../models/address';
import AddressForm from './address-form';
import AddressWrapper from './address-wrapper';

type AddressProps = {
	address?: AddressModel;
};

export default function Address({ address }: AddressProps) {
	const { isEdition } = useContext(ProfileContext);

	return (
		<div className="w-full min-h-[15vh]">
			{isEdition ? (
				<AddressForm address={address} />
			) : (
				<AddressWrapper address={address} />
			)}
		</div>
	);
}
