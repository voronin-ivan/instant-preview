import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import { Preview } from './Preview';
import { RootState } from '../../models/root';
import { PreviewState } from '../../models/preview';

const selector = formValueSelector('main');

const mapStateToProps = (state: RootState): PreviewState => selector(
    state,
    'login',
    'name',
    'hasActiveStory',
    'description',
);

export const PreviewContainer = connect(mapStateToProps)(Preview);
