import React from 'react';
import ym from 'react-yandex-metrika';
import { Field } from 'redux-form';
import { Button } from '../../Button/Button';
import { Checkbox } from '../../Checkbox/Checkbox';
import { saveElementToImage } from '../../../utils/helpers';
import i18n from '../../../utils/i18n';

interface FormButtonsProps {
    clearValues: () => void;
    hideFrame?: boolean;
}

interface FormButtonsState {
    inProgress: boolean;
}

export class FormButtons extends React.Component<FormButtonsProps, FormButtonsState> {
    state: FormButtonsState = {
        inProgress: false,
    }

    private download = async () => {
        this.setState({ inProgress: true });

        ym('reachGoal', 'download');

        const elementId = this.props.hideFrame
            ? 'wrapper'
            : 'framedWrapper';

        await saveElementToImage(elementId);
        this.setState({ inProgress: false });
    }

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
                <div className="form__buttons-checkbox">
                    <Field
                        name="hideFrame"
                        component={Checkbox}
                        label={i18n('hideFrame')}
                    />
                </div>
                <div className="form__buttons-checkbox">
                    <Field
                        name="hideInfo"
                        component={Checkbox}
                        label={i18n('hideInfo')}
                    />
                </div>
            </div>
        );
    }
}
