import React from 'react';
import classNames from 'classnames';
import { Input as ToolboxInput } from 'react-toolbox/lib/input';
import { Button } from '../Button/Button';
import { InputModel } from '../../models/input';
import i18n from '../../utils/i18n';

import './Upload.scss';

type UploadProps = InputModel & {
    showFileName?: boolean;
    showClearButton?: boolean;
};

interface UploadState {
    error: '' | 'errorSize' | 'errorUnsupportedType';
    focused: boolean;
}

export class Upload extends React.PureComponent<UploadProps, UploadState> {
    state: UploadState = {
        error: '',
        focused: false,
    }

    private maxFileSize = 6000000; // 6 Mb

    private allowedTypes = new Set(['image/jpeg', 'image/png']);

    componentDidUpdate(prevProps: UploadProps) {
        if (this.props.input.value !== prevProps.input.value) {
            // eslint-disable-next-line react/no-did-update-set-state
            this.setState({ error: '' }); // for correct "clear all"
        }
    }

    private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files[0];
        // eslint-disable-next-line no-param-reassign
        event.target.value = null; // for correct "clear all"

        if (file.size > this.maxFileSize) {
            this.setState({ error: 'errorSize' });
            return;
        }

        if (!this.allowedTypes.has(file.type)) {
            this.setState({ error: 'errorUnsupportedType' });
            return;
        }

        this.props.input.onChange(file);
    };

    private resetField = () => this.props.input.onChange(null);

    private toggleFocus = () => this.setState(prevState => ({
        focused: !prevState.focused,
    }));

    render() {
        const { input, label, showClearButton, showFileName } = this.props;
        const { value } = input;
        const { error, focused } = this.state;

        const buttonClassNames = classNames(
            'upload__button',
            { 'upload__button--focused': focused },
        );

        const uploadClassNames = classNames(
            'upload',
            { 'upload--full': showFileName },
        );

        return (
            <div className={uploadClassNames}>
                {showFileName && (
                    <ToolboxInput
                        className="input input--disabled"
                        type="text"
                        label={label}
                        value={value && value.name}
                        error={error ? i18n(error) : ''}
                        disabled
                    />
                )}
                {showClearButton && value && (
                    <Button
                        className="upload__clear"
                        onClick={this.resetField}
                        icon="clear"
                    />
                )}
                <Button
                    className={buttonClassNames}
                    theme="purple"
                    tabIndex={-1}
                >
                    <label className="upload__label">
                        <span>{i18n('upload')}</span>
                        <input
                            className="upload__input"
                            type="file"
                            accept="image/jpeg,image/png"
                            onChange={this.handleChange}
                            onFocus={this.toggleFocus}
                            onBlur={this.toggleFocus}
                        />
                    </label>
                </Button>
            </div>
        );
    }
}