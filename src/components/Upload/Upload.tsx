import React from 'react';
import { Input as ToolboxInput } from 'react-toolbox/lib/input';
import { Button as ToolboxButton } from 'react-toolbox/lib/button';
import { InputProps } from '../../models/input';
import i18n from '../../utils/i18n';

import './Upload.scss';

interface UploadState {
    error: string;
}

export class Upload extends React.Component<InputProps, UploadState> {
    state = { error: '' }

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

    render() {
        const { value } = this.props.input;
        const { error } = this.state;

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
                <ToolboxButton
                    className="upload__button"
                    ripple={false}
                    icon="+"
                    floating
                    mini
                >
                    <label className="upload__label">
                        <input
                            className="upload__input"
                            type="file"
                            accept="image/jpeg,image/png"
                            onChange={this.handleChange}
                        />
                    </label>
                </ToolboxButton>
                <ToolboxButton
                    className="upload__button"
                    ripple={false}
                    onClick={this.resetField}
                    icon="-"
                    floating
                    mini
                />
            </div>
        );
    }
}
