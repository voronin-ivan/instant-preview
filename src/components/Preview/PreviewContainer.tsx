import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import { Preview, PreviewProps } from './Preview';
import { RootModel } from '../../models/root';

const selector = formValueSelector('main');

const mapStateToProps = (state: RootModel): PreviewProps => ({
    lang: state.lang,
    preview: selector(
        state,
        'login',
        'photoLink',
    ),
});

export const PreviewContainer = connect(mapStateToProps)(Preview);
