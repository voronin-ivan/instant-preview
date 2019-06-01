import React from 'react';
import { ErrorBoundaryContainer } from '../ErrorBoundary/ErrorBoundaryContainer';
import { Header } from '../Header/Header';
import { PreviewContainer } from '../Preview/PreviewContainer';
import { FormContainer } from '../Form/FormContainer';
import { ContactsContainer } from '../Contacts/ContactsContainer';
import { YaMetrica } from '../YaMetrica/YaMetrica';

import './App.scss';

import './assets/favicon_56.png';
import './assets/favicon_120.png';

export const App = () => (
    <ErrorBoundaryContainer>
        <Header />
        <main className="container container--main">
            <section className="app__left">
                <PreviewContainer />
            </section>
            <section className="app__right">
                <FormContainer />
                <ContactsContainer />
            </section>
        </main>
        <YaMetrica />
    </ErrorBoundaryContainer>
);
