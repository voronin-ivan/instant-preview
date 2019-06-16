import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { reduxForm, formValueSelector } from 'redux-form';
import { Form, FormProps } from './Form';
import { reset } from '../../redux/actions/preview';
import { setData } from '../../utils/idb';
import { RootModel } from '../../models/root';
import { PreviewModel } from '../../models/preview';

type MapState = Pick<FormProps, 'lang' | 'initialValues' | 'hideFrame'>;
type MapDispatch = Pick<FormProps, 'resetPreview'>;

const formName = 'main';
const selector = formValueSelector(formName);

const mapStateToProps = (state: RootModel): MapState => ({
    lang: state.lang,
    initialValues: state.preview,
    hideFrame: selector(state, 'hideFrame'),
});

const mapDispatchToProps = (dispatch: Dispatch): MapDispatch => (
    bindActionCreators({
        resetPreview: reset,
    }, dispatch)
);

const onChange = (preview: Partial<PreviewModel>) => {
    setData('preview', preview);
};

const ReduxForm = reduxForm({
    form: formName,
    enableReinitialize: true,
    onChange,
})(Form);

export const FormContainer = connect(mapStateToProps, mapDispatchToProps)(ReduxForm);
