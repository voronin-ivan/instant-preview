import { connect } from 'react-redux';
import { reduxForm, formValueSelector } from 'redux-form';
import { Form, FormProps } from './Form';
import { resetInitialValues } from '../../redux/actions/initialValues';
import { setData } from '../../utils/idb';
import { RootModel } from '../../models/root';
import { PreviewModel } from '../../models/preview';

type MapState = Pick<FormProps, 'initialValues' | 'hideFrame'>;
type MapDispatch = Pick<FormProps, 'resetInitialValues'>;

const formName = 'main';
const selector = formValueSelector(formName);

const mapStateToProps = (state: RootModel): MapState => ({
    initialValues: state.initialValues,
    hideFrame: selector(state, 'hideFrame'),
});

const mapDispatchToProps: MapDispatch = {
    resetInitialValues,
};

const onChange = (values: Partial<PreviewModel>) => {
    setData('initialValues', values);
};

const ReduxForm = reduxForm({
    form: formName,
    enableReinitialize: true,
    onChange,
})(Form);

export const FormContainer = connect(mapStateToProps, mapDispatchToProps)(ReduxForm);
