import React from 'react';
import { Button } from '../../Button/Button';
import { Checkbox } from '../../Checkbox/Checkbox';
import { saveElementToImage } from '../../../utils/helpers';
import i18n from '../../../utils/i18n';

interface FormButtonsProps {
    clearValues: () => void;
}

interface FormButtonsState {
    framedWrapper: boolean;
}

export class FormButtons extends React.Component<FormButtonsProps, FormButtonsState> {
    state: FormButtonsState = {
        framedWrapper: true,
    }

    private toggleFrame = () => {
        this.setState(prevState => ({
            framedWrapper: !prevState.framedWrapper,
        }));
    }

    private download = () => {
        const element = this.state.framedWrapper
            ? 'framedWrapper'
            : 'wrapper';

        saveElementToImage(document.getElementById(element)); // fck refs :D
    }

    render() {
        return (
            <div className="form__buttons">
                <div>
                    <Button
                        className="form__button-download"
                        theme="purple"
                        onClick={this.download}
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
                >
                    {i18n('clearValues')}
                </Button>
            </div>
        );
    }
}
