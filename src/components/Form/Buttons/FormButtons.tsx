import React from 'react';
import ym from 'react-yandex-metrika';
import { Field } from 'redux-form';
import { Button } from '../../Button/Button';
import { Checkbox } from '../../Checkbox/Checkbox';
import { saveElementToImage } from '../../../utils/helpers';
import i18n from '../../../utils/i18n';
import { logError } from '../../../utils/logger';

interface FormButtonsProps {
    clearValues: () => void;
    hideFrame?: boolean;
}

interface FormButtonsState {
    inProgress: boolean;
    hasError: boolean;
}

export class FormButtons extends React.Component<FormButtonsProps, FormButtonsState> {
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
                label={i18n(name)}
            />
        </div>
    );

    render() {
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
                        {i18n('download')}
                    </Button>
                    <Button
                        className="form__buttons-clear"
                        theme="white"
                        onClick={this.props.clearValues}
                        big
                    >
                        {i18n('clearValues')}
                    </Button>
                </div>
                {this.state.hasError && (
                    <div className="form__buttons-error">
                        {i18n('errorDownload')}
                    </div>
                )}
                {this.renderCheckbox('hideFrame')}
                {this.renderCheckbox('hideInfo')}
            </div>
        );
    }
}
