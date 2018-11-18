import React from 'react';
import { Field, WrappedFieldArrayProps } from 'redux-form';
import { Upload } from '../../Upload/Upload';
import { UploadedFileModel } from '../../../models/file';
import i18n from '../../../utils/i18n';

interface FilesProps extends WrappedFieldArrayProps<UploadedFileModel> {
    placeholder: string;
}

export const Files = ({ fields, placeholder }: FilesProps) => (
    <div className="form__files">
        <div className="form__files-row">
            <h2>{i18n(fields.name)}</h2>
            <button type="button" onClick={() => fields.push({})}>
                {i18n('add')}
            </button>
        </div>
        {fields.map((item: string, index: number) => (
            <div className="form__files-item" key={item}>
                <Field
                    name={`${item}.content`}
                    component={Upload}
                    placeholder={`${placeholder} #${index + 1}`}
                />
                <button
                    type="button"
                    onClick={() => fields.remove(index)}
                >
                    remove
                </button>
            </div>
        ))}
    </div>
);
