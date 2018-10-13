import React from 'react';
import { PreviewContainer } from '../Preview/PreviewContainer';
import { FormContainer } from '../Form/FormContainer';

import './App.scss';

export default () => (
    <React.Fragment>
        <section className="app__left">
            <PreviewContainer />
        </section>
        <section className="app__right">
            <FormContainer />
        </section>
    </React.Fragment>
);
