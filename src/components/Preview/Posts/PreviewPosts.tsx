import React from 'react';
import classNames from 'classnames';
import { UploadedFileModel } from '../../../models/file';
import { fileToUrl } from '../../../utils/helpers';
import i18n from '../../../utils/i18n';

import '../assets/posts-icons.png';
import '../assets/posts-empty.png';

interface PreviewPostsProps {
    posts: UploadedFileModel[];
    postsCount: number;
    hideInfo: boolean;
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

export const PreviewPosts = ({ posts, postsCount, hideInfo }: PreviewPostsProps) => {
    const postsElements = posts ? renderPostsElements(posts) : [];

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
                        {i18n('noPosts')}
                    </div>
                ) : (
                    <React.Fragment>
                        {!hideInfo && (
                            <img
                                alt=""
                                src="./img/posts-icons.png"
                                className="preview__posts-icons"
                            />
                        )}
                        {postsElements}
                    </React.Fragment>
                )
            }
        </div>
    );
};
