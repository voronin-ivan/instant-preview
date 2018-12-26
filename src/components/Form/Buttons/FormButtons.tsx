import React from 'react';
import ym from 'react-yandex-metrika';
import { Button } from '../../Button/Button';
import { Checkbox } from '../../Checkbox/Checkbox';
import { saveElementToImage } from '../../../utils/helpers';
import i18n from '../../../utils/i18n';

interface FormButtonsProps {
    clearValues: () => void;
}

interface FormButtonsState {
    inProgress: boolean;
    framedWrapper: boolean;
}

export class FormButtons extends React.Component<FormButtonsProps, FormButtonsState> {
    state: FormButtonsState = {
        inProgress: false,
        framedWrapper: false,
    }

    private toggleFrame = () => {
        this.setState(prevState => ({
            framedWrapper: !prevState.framedWrapper,
        }));
    }

    private download = async () => {
        const elementId = this.state.framedWrapper
            ? 'framedWrapper'
            : 'wrapper';

        ym('reachGoal', 'download');

        this.setState({ inProgress: true });
        await saveElementToImage(elementId);
        this.setState({ inProgress: false });
    }

    render() {
        return (
            <div className="form__buttons">
                <div>
                    <Button
                        className="form__button-download"
                        theme="purple"
                        onClick={this.download}
                        inProgress={this.state.inProgress}
                        big
                    >
                        {i18n('download')}
                    </Button>
                    <Checkbox
                        label={i18n('withFrame')}
                        input={{
                            value: this.state.framedWrapper,
                            onChange: this.toggleFrame,
                        }}
                    />
                </div>
                <Button
                    className="form__button-clear"
                    theme="white"
                    onClick={this.props.clearValues}
                    big
                >
                    {i18n('clearValues')}
                </Button>
            </div>
        );
    }
}
