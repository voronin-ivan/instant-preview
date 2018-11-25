import React from 'react';
import classNames from 'classnames';
import { Input as ToolboxInput } from 'react-toolbox/lib/input';
import { Button } from '../Button/Button';
import { InputProps } from '../../models/input';
import i18n from '../../utils/i18n';

import './Upload.scss';

interface UploadState {
    error: '' | 'errorSize' | 'errorUnsupportedType';
    focused: boolean;
}

export class Upload extends React.PureComponent<InputProps, UploadState> {
    state: UploadState = {
        error: '',
        focused: false,
    }

    private maxFileSize = 6000000; // 6 Mb

    private allowedTypes = new Set(['image/jpeg', 'image/png']);

    componentDidUpdate(prevProps: InputProps) {
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
        const { value, name } = this.props.input;
        const { error, focused } = this.state;
        const buttonClassNames = classNames(
            'upload__button',
            { 'upload__button--focused': focused },
        );

        return (
            <div className="upload">
                <ToolboxInput
                    className="input"
                    type="text"
                    label={this.props.placeholder}
                    value={value && value.name}
                    error={error ? i18n(error) : ''}
                    disabled
                />
                {name === 'photo' && value && (
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
