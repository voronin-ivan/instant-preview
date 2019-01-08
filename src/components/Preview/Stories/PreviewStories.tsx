import React from 'react';
import { UploadedFileModel } from '../../../models/file';
import { fileToUrl } from '../../../utils/helpers';
import i18n from '../../../utils/i18n';

interface PreviewStoriesProps {
    stories: UploadedFileModel[];
}

const renderStoriesElements = (stories: UploadedFileModel[]): JSX.Element[] => (
    stories.reduce((acc, story, index) => {
        const { content, title } = story;

        if (!content) return acc;

        const storyElement = (
            <div className="preview__stories-item" key={index}>
                <img
                    src={fileToUrl(content)}
                    alt=""
                />
                <span>{title || i18n('story')}</span>
            </div>
        );

        return [...acc, storyElement];
    }, [])
);

export const PreviewStories = ({ stories }: PreviewStoriesProps) => {
    const storiesElements = stories
        ? renderStoriesElements(stories)
        : [];

    if (!storiesElements.length) return null;

    return (
        <div className="preview__stories">
            {storiesElements}
        </div>
    );
};
