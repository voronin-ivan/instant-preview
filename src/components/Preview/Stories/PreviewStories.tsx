import React from 'react';
import { useTranslation } from 'react-i18next';
import { UploadedFileModel } from '../../../models/file';
import { fileToUrl } from '../../../utils/helpers';

interface PreviewStoriesProps {
    stories: UploadedFileModel[];
}

const renderStoriesElements = (stories: UploadedFileModel[]): JSX.Element[] => {
    const { t } = useTranslation();

    return stories.reduce((acc, story, index) => {
        const { content, title } = story;

        if (!content) return acc;

        const storyElement = (
            <div className="preview__stories-item" key={index}>
                <img
                    src={fileToUrl(content)}
                    alt=""
                />
                <span>{title || t('story')}</span>
            </div>
        );

        return [...acc, storyElement];
    }, []);
};

export const PreviewStories = ({ stories = [] }: PreviewStoriesProps) => {
    const storiesElements = renderStoriesElements(stories);

    if (!storiesElements.length) return null;

    return (
        <div className="preview__stories">
            {storiesElements}
        </div>
    );
};
