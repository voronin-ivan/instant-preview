import React from 'react';
import { PreviewCommon } from './Common/PreviewCommon';
import { PreviewInfo } from './Info/PreviewInfo';
import { PreviewStories } from './Stories/PreviewStories';
import { PreviewButtons } from './Buttons/PreviewButtons';
import { PreviewPosts } from './Posts/PreviewPosts';
import { LangModel } from '../../models/lang';
import { PreviewModel } from '../../models/preview';

import './Preview.scss';

export interface PreviewProps {
    lang: LangModel;
    preview: PreviewModel;
}

export const Preview = (props: PreviewProps) => {
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
    } = props.preview;

    return (
        <div className="preview">
            <div className="preview__wrapper">
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
                <div className="preview__navigation" />
            </div>
            <div className="preview__phone" />
        </div>
    );
};
