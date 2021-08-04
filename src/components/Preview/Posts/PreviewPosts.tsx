import React from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { UploadedFileModel } from '../../../models/file';
import { fileToUrl } from '../../../utils/helpers';

import '../assets/posts-icon-photos.png';
import '../assets/posts-icon-reels.png';
import '../assets/posts-icon-igtv.png';
import '../assets/posts-icon-tagged.png';
import '../assets/posts-empty.png';

interface PreviewPostsProps {
    posts: UploadedFileModel[];
    postsCount: number;
    hideInfo: boolean;
    hasReels?: boolean;
    hasIgtv?: boolean;
}

const renderPostsElements = (posts: UploadedFileModel[]): JSX.Element[] => (
    posts.reduce((acc, post, index) => {
        if (!post.content) return acc;

        const postElement = (
            <img
                className="preview__posts-item"
                src={fileToUrl(post.content)}
                alt=""
                key={index}
            />
        );

        return [...acc, postElement];
    }, [])
);

const renderIcons = (hasReels?: boolean, hasIgtv?: boolean) => (
    <div className="preview__posts-icons">
        <div className="preview__posts-icon preview__posts-icon--active">
            <img
                alt=""
                src="./img/posts-icon-photos.png"
            />
        </div>
        {hasReels && (
            <div className="preview__posts-icon">
                <img
                    alt=""
                    src="./img/posts-icon-reels.png"
                />
            </div>
        )}
        {hasIgtv && (
            <div className="preview__posts-icon">
                <img
                    alt=""
                    src="./img/posts-icon-igtv.png"
                />
            </div>
        )}
        <div className="preview__posts-icon">
            <img
                alt=""
                src="./img/posts-icon-tagged.png"
            />
        </div>
    </div>
);

export const PreviewPosts = ({
    posts = [],
    postsCount,
    hideInfo,
    hasReels,
    hasIgtv,
}: PreviewPostsProps) => {
    const postsElements = renderPostsElements(posts);
    const { t } = useTranslation();

    if (postsElements.length < postsCount) {
        const maxPosts = 18; // on viewport
        const startIndex = postsElements.length;

        for (let i = startIndex; i < postsCount; i++) {
            if (postsElements.length >= maxPosts) break;

            postsElements.push((
                <div
                    className="preview__posts-item preview__posts-item--empty"
                    key={i}
                />
            ));
        }
    }

    const isEmpty = postsElements.length === 0;

    const postsClassNames = classNames(
        'preview__posts',
        { 'preview__posts--empty': isEmpty },
    );

    return (
        <div className={postsClassNames}>
            {isEmpty
                ? (
                    <div className="preview__posts-info">
                        <img src="./img/posts-empty.png" alt="" />
                        {t('noPosts')}
                    </div>
                ) : (
                    <React.Fragment>
                        {!hideInfo && renderIcons(hasReels, hasIgtv)}
                        {postsElements}
                    </React.Fragment>
                )
            }
        </div>
    );
};
