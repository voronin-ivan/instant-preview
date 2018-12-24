import React from 'react';
import { Header } from '../Header/Header';
import { PreviewContainer } from '../Preview/PreviewContainer';
import { FormContainer } from '../Form/FormContainer';
import { ContactsContainer } from '../Contacts/ContactsContainer';

import './App.scss';

import './assets/favicon_56.png';
import './assets/favicon_120.png';

export const App = () => (
    <React.Fragment>
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
    </React.Fragment>
);
