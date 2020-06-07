import React from 'react';
import { useTranslation } from 'react-i18next';

import './Features.scss';

import './assets/feature_information.svg';
import './assets/feature_combination.svg';
import './assets/feature_platforms.svg';

const features = [
    { img: 'feature_information', text: 'featureInformation' },
    { img: 'feature_combination', text: 'featureCombination' },
    { img: 'feature_platforms', text: 'featurePlatforms' },
];

export const Features = () => {
    const { t } = useTranslation();

    return (
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
                            {t(text)}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
