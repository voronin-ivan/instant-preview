import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';
import { Preview, PreviewProps } from './Preview';
import { ReduxStateModel } from '../../models/reduxState';

const mapStateToProps = (state: ReduxStateModel): PreviewProps => ({
    preview: getFormValues('main')(state),
});

export const PreviewContainer = connect(mapStateToProps)(Preview);
