import { Modal } from 'react-bootstrap';
import { useTranslations } from 'next-intl';
import AddressForm from './address-form';
import { DropDownOptionType } from '@/types';

const AddressModal = (props: {
  onSuccess: () => void;
  show: boolean;
  countriesName: DropDownOptionType[];
  countries: DropDownOptionType[];
  editData: any | null;
  handleClose: () => void;
}) => {
  const { show, handleClose, editData, countries, countriesName, onSuccess } = props;
  const t = useTranslations();

  return (
    <Modal show={show} onHide={handleClose} animation={false} centered>
      <div className="modal-block-main">
        <div className="modal-block-top">
          <div className="modal-left-top">
            <h5>{t('COMMON.ADDRESS_TEXT')}</h5>
          </div>
        </div>
        <div className="d-flex" style={{ justifyContent: 'center', userSelect: 'none' }}>
          <div className="d-flex gap-3">
            <AddressForm
              countries={countries}
              onSuccess={onSuccess}
              countriesName={countriesName}
              editData={editData}
              onClose={handleClose}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddressModal;
