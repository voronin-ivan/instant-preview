import { connect } from 'react-redux';
import { Features, FeaturesProps } from './Features';
import { RootModel } from '../../models/root';

const mapStateToProps = (state: RootModel): FeaturesProps => ({ lang: state.lang });

export const FeaturesContainer = connect(mapStateToProps)(Features);
