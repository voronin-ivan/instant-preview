import { reduxForm } from 'redux-form';
import { Form } from './Form';

export const FormContainer = reduxForm({
    form: 'main',
    initialValues: {},
})(Form);
