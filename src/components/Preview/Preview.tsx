import React from 'react';
import i18n from '../../utils/i18n';
import { LangState } from '../../models/lang';
import { PreviewState } from '../../models/preview';

export interface PreviewProps {
    lang: LangState;
    preview: PreviewState;
}

export const Preview = (props: PreviewProps) => {
    const {
        login,
        name,
        hasActiveStory,
        description,
    } = props.preview;

    return (
        <div>
            <div>
                <span>{i18n('login')}:</span>
                <span>{login}</span>
            </div>
            <div>
                <span>{i18n('name')}:</span>
                <span>{name}</span>
            </div>
            <div>
                <span>{i18n('hasActiveStory')}:</span>
                <span>{hasActiveStory ? 'yep' : 'nope'}</span>
            </div>
            <div>
                <span>{i18n('description')}:</span>
                <span>{description}</span>
            </div>
        </div>
    );
};
