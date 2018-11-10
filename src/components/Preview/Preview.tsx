import React from 'react';
import { LangModel } from '../../models/lang';
import { PreviewModel } from '../../models/preview';
import { fileToUrl, formatCount } from '../../utils/helpers';
import i18n from '../../utils/i18n';

import './photo.jpg';

import './Preview.scss';

export interface PreviewProps {
    lang: LangModel;
    preview: PreviewModel;
}

export const Preview = (props: PreviewProps) => {
    const {
        login,
        photo,
        postsCount,
        followersCount,
        followingCount,
    } = props.preview;

    const photoUrl = photo ? fileToUrl(photo) : './img/photo.jpg';

    return (
        <div className="preview">
            <div className="preview__wrapper">
                <div className="preview__header">
                    <div className="preview__header-text">{login}</div>
                </div>
                <div className="preview__content">
                    <div className="preview__row">
                        <img
                            src={photoUrl}
                            className="preview__photo"
                            alt={login}
                        />
                        <div className="preview__statistics">
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
                    </div>
                </div>
            </div>
            <div className="preview__phone" />
        </div>
    );
};
