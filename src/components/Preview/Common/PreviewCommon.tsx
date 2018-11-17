import React from 'react';
import classNames from 'classnames';
import { PreviewModel } from '../../../models/preview';
import { fileToUrl, formatCount } from '../../../utils/helpers';
import i18n from '../../../utils/i18n';

import '../photo.png';

export const PreviewCommon = ({
    photo,
    activeStory,
    postsCount,
    followersCount,
    followingCount,
}: PreviewModel) => {
    const photoUrl = photo ? fileToUrl(photo) : './img/photo.png';
    const photoClassNames = classNames(
        'preview__common-photo',
        { 'preview__common-photo--active': activeStory },
    );

    return (
        <div className="preview__common">
            <div className={photoClassNames}>
                <img
                    src={photoUrl}
                    className="preview__photo-img"
                    alt=""
                />
            </div>
            <div className="preview__common-statistics">
                <div className="preview__statistics-wrapper">
                    <div className="preview__statistics-item preview__statistics-item--posts">
                        <div className="preview__item-count">
                            {formatCount(postsCount)}
                        </div>
                        <div className="preview__item-title">
                            {i18n('posts')}
                        </div>
                    </div>
                    <div className="preview__statistics-item preview__statistics-item--followers">
                        <div className="preview__item-count">
                            {formatCount(followersCount)}
                        </div>
                        <div className="preview__item-title">
                            {i18n('followers')}
                        </div>
                    </div>
                    <div className="preview__statistics-item preview__statistics-item--following">
                        <div className="preview__item-count">
                            {formatCount(followingCount)}
                        </div>
                        <div className="preview__item-title">
                            {i18n('following')}
                        </div>
                    </div>
                </div>
                <div className="preview__follow-button">{i18n('follow')}</div>
            </div>
        </div>
    );
};
