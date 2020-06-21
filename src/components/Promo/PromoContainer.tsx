import { connect } from 'react-redux';
import { Promo, PromoProps } from './Promo';
import { ReduxStateModel } from '../../models/reduxState';

type MapState = Pick<PromoProps, 'onlineMode'>;

const mapStateToProps = ({ onlineMode }: ReduxStateModel): MapState => ({
    onlineMode,
});

export const PromoContainer = connect(mapStateToProps)(Promo);
