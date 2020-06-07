import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';
import { Preview, PreviewProps } from './Preview';
import { RootModel } from '../../models/root';

const mapStateToProps = (state: RootModel): PreviewProps => ({
    preview: getFormValues('main')(state),
});

export const PreviewContainer = connect(mapStateToProps)(Preview);
