import React from 'react';
import { PreviewCommon } from './Common/PreviewCommon';
import { PreviewInfo } from './Info/PreviewInfo';
import { PreviewButtons } from './Buttons/PreviewButtons';
import { LangModel } from '../../models/lang';
import { PreviewModel } from '../../models/preview';

import { fileToUrl } from '../../utils/helpers';

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
                <PreviewButtons
                    phone={showPhone}
                    email={showEmail}
                    address={Boolean(info.address)}
                />
                <div className="preview__posts">
                    {posts && posts.map((post) => {
                        if (!post.content) return null;

                        return (
                            <img src={fileToUrl(post.content)} alt="" />
                        );
                    })}
                </div>
            </div>
            <div className="preview__phone" />
        </div>
    );
};
