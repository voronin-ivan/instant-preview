import React from 'react';
import { Header } from '../Header/Header';
import { PreviewContainer } from '../Preview/PreviewContainer';
import { FormContainer } from '../Form/FormContainer';

import './App.scss';

export const App = () => (
    <React.Fragment>
        <Header />
        <main className="container">
            <section className="app__left">
                <PreviewContainer />
            </section>
            <section className="app__right">
                <FormContainer />
            </section>
        </main>
    </React.Fragment>
);
