import React from 'react';
import classNames from 'classnames';
import { Input as ToolboxInput } from 'react-toolbox/lib/input';
import { withTranslation, WithTranslation } from 'react-i18next';
import { Button } from '../Button/Button';
import { Crop } from '../Crop/Crop';
import { InputModel } from '../../models/input';
import { fileToUrl } from '../../utils/helpers';

import './Upload.scss';

interface UploadProps extends InputModel, WithTranslation {
    showFileName?: boolean;
    showClearButton?: boolean;
}

interface UploadState {
    error: '' | 'errorSize' | 'errorUnsupportedType';
    src: string,
    fileName: string;
    focused: boolean;
    showCrop: boolean;
}

class UploadView extends React.PureComponent<UploadProps, UploadState> {
    state: UploadState = {
        error: '',
        src: '',
        fileName: '',
        focused: false,
        showCrop: false,
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

        this.setState({
            src: fileToUrl(file),
            fileName: file.name,
            showCrop: true,
        });
    };

    private hideCrop = () => this.setState({ showCrop: false });

    private onSuccessCrop = (content: File) => {
        this.props.input.onChange({
            content,
            title: this.state.fileName,
        });

        this.hideCrop();
    }

    private resetField = () => this.props.input.onChange(null);

    private toggleFocus = () => this.setState(prevState => ({
        focused: !prevState.focused,
    }));

    render() {
        const { input, label, showClearButton, showFileName, t } = this.props;
        const { error, focused, showCrop, src, fileName } = this.state;
        const { value } = input;
        const title = (value && value.title) || '';

        const buttonClassNames = classNames(
            'upload__button',
            { 'upload__button--focused': focused },
        );

        const uploadClassNames = classNames(
            'upload',
            { 'upload--full': showFileName },
            { 'upload--padding': showClearButton },
        );

        return (
            <div className={uploadClassNames}>
                {showFileName && (
                    <ToolboxInput
                        className="input input--disabled"
                        type="text"
                        label={label}
                        value={title}
                        error={error ? t(error) : ''}
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
                        <span>{t('upload')}</span>
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
                <Crop
                    active={showCrop}
                    src={src}
                    fileName={fileName}
                    onSave={this.onSuccessCrop}
                    onCancel={this.hideCrop}
                />
            </div>
        );
    }
}

export const Upload = withTranslation()(UploadView);
