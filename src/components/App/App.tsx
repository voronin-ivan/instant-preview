import React from 'react';
import { PreviewContainer } from '../Preview/PreviewContainer';
import { LangContainer } from '../Lang/LangContainer';
import { FormContainer } from '../Form/FormContainer';

import './App.scss';

export const App = () => (
    <React.Fragment>
        <section className="app__left">
            <PreviewContainer />
        </section>
        <section className="app__right">
            <LangContainer />
            <FormContainer />
        </section>
    </React.Fragment>
);
