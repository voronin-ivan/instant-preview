import React from 'react';
import i18n from '../../../utils/i18n';

interface PreviewButtonsProps {
    phone: boolean;
    email: boolean;
    address: boolean;
}

export const PreviewButtons = ({
    phone,
    email,
    address,
}: PreviewButtonsProps) => {
    if (!phone && !email && !address) return null;

    return (
        <div className="preview__buttons">
            {phone && (
                <div className="preview__buttons-item">
                    {i18n('phoneButton')}
                </div>
            )}
            {email && (
                <div className="preview__buttons-item">
                    {i18n('emailButton')}
                </div>
            )}
            {address && (
                <div className="preview__buttons-item">
                    {i18n('addressButton')}
                </div>
            )}
        </div>
    );
};
