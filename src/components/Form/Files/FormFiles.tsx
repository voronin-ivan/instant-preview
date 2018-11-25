import React from 'react';
import { Field, WrappedFieldArrayProps } from 'redux-form';
import { Button } from '../../Button/Button';
import { Upload } from '../../Upload/Upload';
import { UploadedFileModel } from '../../../models/file';
import i18n from '../../../utils/i18n';

interface FilesProps extends WrappedFieldArrayProps<UploadedFileModel> {
    placeholder: string;
    maxFiles: number;
}

export const Files = ({ fields, placeholder, maxFiles }: FilesProps) => (
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
                <Field
                    name={`${item}.content`}
                    component={Upload}
                    placeholder={`${placeholder} #${index + 1}`}
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
