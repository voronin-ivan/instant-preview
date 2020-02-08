import React from 'react';
import { ErrorBoundaryContainer } from '../ErrorBoundary/ErrorBoundaryContainer';
import { PreviewContainer } from '../Preview/PreviewContainer';
import { FormContainer } from '../Form/FormContainer';
import { ContactsContainer } from '../Contacts/ContactsContainer';

export const Editor = () => (
    <ErrorBoundaryContainer>
        <section className="editor container container--wrap container--editor">
            <div className="left">
                <PreviewContainer />
            </div>
            <div className="right">
                <FormContainer />
                <ContactsContainer />
            </div>
        </section>
    </ErrorBoundaryContainer>
);
