import React from 'react';
import { useTranslation } from 'react-i18next';
import { PreviewModel } from '../../../models/preview';
import { fileToUrl, formatCount } from '../../../utils/helpers';

import '../assets/photo-empty.png';
import '../assets/photo-story.png';

export const PreviewCommon = ({
    photo,
    activeStory,
    postsCount,
    followersCount,
    followingCount,
}: Partial<PreviewModel>) => {
    const { t } = useTranslation();
    const photoUrl = photo ? fileToUrl(photo.content) : './img/photo-empty.png';

    return (
        <div className="preview__common">
            <div className="preview__common-photo">
                <img
                    src={photoUrl}
                    className="preview__photo-img"
                    alt=""
                />
                {activeStory && (
                    <img
                        src="./img/photo-story.png"
                        className="preview__photo-story"
                        alt=""
                    />
                )}
            </div>
            <div className="preview__common-statistics">
                <div className="preview__statistics-wrapper">
                    <div className="preview__statistics-item preview__statistics-item--posts">
                        <div className="preview__item-count">
                            {formatCount(postsCount)}
                        </div>
                        <div className="preview__item-title">
                            {t('posts')}
                        </div>
                    </div>
                    <div className="preview__statistics-item preview__statistics-item--followers">
                        <div className="preview__item-count">
                            {formatCount(followersCount)}
                        </div>
                        <div className="preview__item-title">
                            {t('followers')}
                        </div>
                    </div>
                    <div className="preview__statistics-item preview__statistics-item--following">
                        <div className="preview__item-count">
                            {formatCount(followingCount)}
                        </div>
                        <div className="preview__item-title">
                            {t('following')}
                        </div>
                    </div>
                </div>
                <div className="preview__follow-button">{t('follow')}</div>
            </div>
        </div>
    );
};
