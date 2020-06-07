import React from 'react';
import ym from 'react-yandex-metrika';
import { withTranslation, WithTranslation } from 'react-i18next';
import { Field } from 'redux-form';
import { Button } from '../../Button/Button';
import { Checkbox } from '../../Checkbox/Checkbox';
import { saveElementToImage } from '../../../utils/helpers';
import { logError } from '../../../utils/logger';

interface FormButtonsProps extends WithTranslation {
    clearValues: () => void;
    hideFrame?: boolean;
}

interface FormButtonsState {
    inProgress: boolean;
    hasError: boolean;
}

class FormButtonsView extends React.Component<FormButtonsProps, FormButtonsState> {
    state: FormButtonsState = {
        inProgress: false,
        hasError: false,
    }

    private download = async () => {
        this.setState({
            inProgress: true,
            hasError: false,
        });

        ym('reachGoal', 'download');

        const elementId = this.props.hideFrame
            ? 'wrapper'
            : 'framedWrapper';

        try {
            await saveElementToImage(elementId);
        } catch (e) {
            this.setState({ hasError: true });

            logError(e);
        } finally {
            this.setState({ inProgress: false });
        }
    }

    private renderCheckbox = (name: string) => (
        <div className="form__buttons-checkbox">
            <Field
                name={name}
                component={Checkbox}
                label={this.props.t(name)}
            />
        </div>
    );

    render() {
        const { t } = this.props;

        return (
            <div className="form__buttons">
                <div className="form__buttons-wrapper">
                    <Button
                        className="form__buttons-download"
                        theme="purple"
                        onClick={this.download}
                        inProgress={this.state.inProgress}
                        big
                    >
                        {t('download')}
                    </Button>
                    <Button
                        className="form__buttons-clear"
                        theme="white"
                        onClick={this.props.clearValues}
                        big
                    >
                        {t('clearValues')}
                    </Button>
                </div>
                {this.state.hasError && (
                    <div className="form__buttons-error">
                        {t('errorDownload')}
                    </div>
                )}
                {this.renderCheckbox('hideFrame')}
                {this.renderCheckbox('hideInfo')}
            </div>
        );
    }
}

export const FormButtons = withTranslation()(FormButtonsView);
