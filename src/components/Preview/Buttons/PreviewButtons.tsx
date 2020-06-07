import React from 'react';
import { useTranslation } from 'react-i18next';

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
    const { t } = useTranslation();

    if (!phone && !email && !address) return null;

    return (
        <div className="preview__buttons">
            {phone && (
                <div className="preview__buttons-item">
                    {t('phoneButton')}
                </div>
            )}
            {email && (
                <div className="preview__buttons-item">
                    {t('emailButton')}
                </div>
            )}
            {address && (
                <div className="preview__buttons-item">
                    {t('addressButton')}
                </div>
            )}
        </div>
    );
};
