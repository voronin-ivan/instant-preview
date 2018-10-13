import React from 'react';
import { PreviewState } from '../../models/preview';

export const Preview = ({
    login,
    name,
    hasActiveStory,
    description,
}: PreviewState) => (
    <div>
        <div>
            <span>Login:</span>
            <span>{login}</span>
        </div>
        <div>
            <span>Name:</span>
            <span>{name}</span>
        </div>
        <div>
            <span>HasActiveStory:</span>
            <span>{hasActiveStory ? 'yep' : 'nope'}</span>
        </div>
        <div>
            <span>Description:</span>
            <span>{description}</span>
        </div>
    </div>
);
