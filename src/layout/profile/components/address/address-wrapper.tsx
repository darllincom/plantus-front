import { Address as AddressModel } from '../../../../models/address';
import AddressInfo from './address-info';
import NoInfo from '../../no-info';

type AddressWrapperProps = {
	address?: AddressModel;
};

export default function AddressWrapper({ address }: AddressWrapperProps) {
  return (
    <>
      { address ? (
        <AddressInfo address={address} />
      ) : (
        <NoInfo name='Endereço' />
      )}
    </>
  )
}