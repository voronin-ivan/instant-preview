import React from 'react';
import { PreviewCommon } from './Common/PreviewCommon';
import { PreviewInfo } from './Info/PreviewInfo';
import { PreviewStories } from './Stories/PreviewStories';
import { PreviewButtons } from './Buttons/PreviewButtons';
import { PreviewPosts } from './Posts/PreviewPosts';
import { PreviewModel } from '../../models/preview';

import './Preview.scss';

import './assets/phone.png';
import './assets/navigation.png';

export interface PreviewProps {
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
        hideFrame,
        hideInfo,
        hasIgtv,
        hasReels,
        ...info
    } = preview;

    return (
        <div className="preview" id="framedWrapper">
            <div className="preview__wrapper" id="wrapper">
                <div className="preview__header">
                    <div className="preview__header-text">{login}</div>
                </div>
                {!hideInfo && (
                    <>
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
                    </>
                )}
                <PreviewPosts
                    posts={posts}
                    postsCount={Number(postsCount)}
                    hideInfo={hideInfo}
                    hasIgtv={hasIgtv}
                    hasReels={hasReels}
                />
                <img
                    alt=""
                    src="./img/navigation.png"
                    className="preview__navigation"
                />
            </div>
            {!hideFrame && (
                <img
                    alt=""
                    src="./img/phone.png"
                    className="preview__phone"
                />
            )}
        </div>
    );
};
