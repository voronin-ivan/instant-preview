import { connect } from 'react-redux';
import { ErrorBoundary, ErrorBoundaryProps } from './ErrorBoundary';
import { RootModel } from '../../models/root';

const mapStateToProps = (state: RootModel): ErrorBoundaryProps => ({
    lang: state.lang,
});

export const ErrorBoundaryContainer = connect(mapStateToProps)(ErrorBoundary);
