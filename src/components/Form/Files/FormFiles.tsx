import React from 'react';
import { Field, WrappedFieldArrayProps } from 'redux-form';
import { Button } from '../../Button/Button';
import { Input } from '../../Input/Input';
import { Upload } from '../../Upload/Upload';
import { UploadedFileModel } from '../../../models/file';
import { normalizeTextField } from '../../../utils/normalizer';
import i18n from '../../../utils/i18n';

interface FilesProps extends WrappedFieldArrayProps<UploadedFileModel> {
    placeholder: string;
    maxFiles: number;
    showFileName: boolean;
}

export const FormFiles = ({
    fields,
    placeholder,
    maxFiles,
    showFileName,
}: FilesProps) => (
    <div className="form__files">
        <div className="form__files-row">
            <h2 className="form__files-title">{i18n(fields.name)}</h2>
            <Button
                className="form__files-add"
                theme="white"
                onClick={() => fields.push({})}
                disabled={fields.length >= maxFiles}
            >
                {i18n('add')}
            </Button>
        </div>
        {fields.map((item: string, index: number) => (
            <div className="form__files-row" key={item}>
                {!showFileName && (
                    <Field
                        name={`${item}.title`}
                        component={Input}
                        placeholder={`${placeholder} #${index + 1}`}
                        normalize={normalizeTextField}
                    />
                )}
                <Field
                    name={`${item}.content`}
                    component={Upload}
                    placeholder={`${placeholder} #${index + 1}`}
                    props={{ showFileName }}
                />
                <Button
                    className="form__files-remove"
                    icon="remove"
                    onClick={() => fields.remove(index)}
                />
            </div>
        ))}
    </div>
);
