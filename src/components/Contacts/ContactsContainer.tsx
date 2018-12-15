import { connect } from 'react-redux';
import { Contacts, ContactsProps } from './Contacts';
import { RootModel } from '../../models/root';

const mapStateToProps = (state: RootModel): Partial<ContactsProps> => ({
    lang: state.lang,
});

export const ContactsContainer = connect(mapStateToProps)(Contacts);
