import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { reduxForm } from 'redux-form';
import { Form } from './Form';
import { reset } from '../../redux/actions/preview';
import { setData } from '../../utils/idb';
import { RootModel } from '../../models/root';
import { PreviewModel } from '../../models/preview';

const mapStateToProps = (state: RootModel) => ({
    lang: state.lang,
    initialValues: state.preview,
});

const mapDispatchToProps = (dispatch: Dispatch) => (
    bindActionCreators({
        resetPreview: reset,
    }, dispatch)
);

const onChange = (preview: Partial<PreviewModel>) => {
    setData('preview', preview);
};

const ReduxForm = reduxForm({
    form: 'main',
    enableReinitialize: true,
    onChange,
})(Form);

export const FormContainer = connect(mapStateToProps, mapDispatchToProps)(ReduxForm);
