import { connect } from 'react-redux';
import { Promo, PromoProps } from './Promo';
import { RootModel } from '../../models/root';

const mapStateToProps = (state: RootModel): PromoProps => ({ lang: state.lang });

export const PromoContainer = connect(mapStateToProps)(Promo);
