import React from 'react';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import { PreviewContainer } from '../Preview/PreviewContainer';
import { FormContainer } from '../Form/FormContainer';
import { Contacts } from '../Contacts/Contacts';

export const Editor = () => (
    <ErrorBoundary>
        <section className="editor container container--wrap container--editor">
            <div className="left">
                <PreviewContainer />
            </div>
            <div className="right">
                <FormContainer />
                <Contacts />
            </div>
        </section>
    </ErrorBoundary>
);
