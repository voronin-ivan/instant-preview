import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import { Preview, PreviewProps } from './Preview';
import { RootState } from '../../models/root';

const selector = formValueSelector('main');

const mapStateToProps = (state: RootState): PreviewProps => ({
    lang: state.lang,
    preview: selector(
        state,
        'login',
        'name',
        'hasActiveStory',
        'description',
    ),
});

export const PreviewContainer = connect(mapStateToProps)(Preview);
