import React from 'react';
import { PreviewCommon } from './Common/PreviewCommon';
import { PreviewInfo } from './Info/PreviewInfo';
import { PreviewStories } from './Stories/PreviewStories';
import { PreviewButtons } from './Buttons/PreviewButtons';
import { PreviewPosts } from './Posts/PreviewPosts';
import { LangModel } from '../../models/lang';
import { PreviewModel } from '../../models/preview';

import './Preview.scss';

import './assets/phone.png';
import './assets/navigation.png';

export interface PreviewProps {
    lang: LangModel;
    preview?: PreviewModel;
}

export const Preview = ({ preview }: PreviewProps) => {
    if (!preview) return null;

    const {
        login,
        photo,
        activeStory,
        postsCount,
        followersCount,
        followingCount,
        showPhone,
        showEmail,
        stories,
        posts,
        ...info
    } = preview;

    return (
        <div className="preview" id="framedWrapper">
            <div className="preview__wrapper" id="wrapper">
                <div className="preview__header">
                    <div className="preview__header-text">{login}</div>
                </div>
                <PreviewCommon
                    photo={photo}
                    activeStory={activeStory}
                    postsCount={postsCount}
                    followersCount={followersCount}
                    followingCount={followingCount}
                />
                <PreviewInfo {...info} />
                <PreviewStories stories={stories} />
                <PreviewButtons
                    phone={showPhone}
                    email={showEmail}
                    address={Boolean(info.address)}
                />
                <PreviewPosts
                    posts={posts}
                    postsCount={Number(postsCount)}
                />
                <img
                    alt=""
                    src="./img/navigation.png"
                    className="preview__navigation"
                />
            </div>
            <img
                alt=""
                src="./img/phone.png"
                className="preview__phone"
            />
        </div>
    );
};
