import React from 'react';
import i18n from '../../utils/i18n';
import { LangModel } from '../../models/lang';

import './Features.scss';

import './assets/feature_information.svg';
import './assets/feature_combination.svg';
import './assets/feature_platforms.svg';

export interface FeaturesProps {
    lang: LangModel;
}

const features = [
    { img: 'feature_information', text: 'featureInformation' },
    { img: 'feature_combination', text: 'featureCombination' },
    { img: 'feature_platforms', text: 'featurePlatforms' },
];

export const Features: React.FC = () => (
    <section className="features">
        <div className="container container--wrap">
            {features.map(({ text, img }) => (
                <div className="features__item" key={text}>
                    <img
                        className="features__item-img"
                        src={`./img/${img}.svg`}
                        alt=""
                    />
                    <div className="features__item-text">
                        {i18n(text)}
                    </div>
                </div>
            ))}
        </div>
    </section>
);
