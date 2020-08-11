import React from 'react';
import classNames from 'classnames';
import { withTranslation, WithTranslation } from 'react-i18next';
import { Tooltip } from '../Tooltip/Tooltip';
import { reachVideoGoal } from '../../utils/metrics';

import './Promo.scss';

export interface PromoProps extends WithTranslation {
    onlineMode: boolean;
}

interface PromoState {
    visibleVideo: boolean;
    visibleSpinner: boolean;
}

class PromoView extends React.Component<PromoProps, PromoState> {
    state = {
        visibleVideo: false,
        visibleSpinner: false,
    }

    private showVideo = () => {
        reachVideoGoal();

        if (this.props.onlineMode) {
            this.setState({
                visibleVideo: true,
                visibleSpinner: true,
            });
        }
    }

    private hideSpinner = () => {
        this.setState({ visibleSpinner: false });
    }

    private renderWrapper = () => {
        const { onlineMode, t } = this.props;

        const wrapperCn = classNames(
            'promo__video-wrapper',
            {
                'promo__video-wrapper--online': onlineMode,
            },
        );

        const wrapper = (
            <button
                className={wrapperCn}
                onClick={this.showVideo}
            >
                <div className="promo__video-text">
                    {this.props.t('promoText')}
                </div>
                {this.state.visibleSpinner ? (
                    <div className="promo__video-spinner" />
                ) : (
                    <svg
                        className="promo__video-button"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                    >
                        <path d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z" />
                        <path fill="#FFF" d="M20 31L20 17 32 24z" />
                    </svg>
                )}
            </button>
        );

        if (onlineMode) {
            return wrapper;
        }

        return (
            <Tooltip
                content={t('offlineVideo')}
                direction="down"
                className="promo__video-tooltip"
            >
                {wrapper}
            </Tooltip>
        );
    }

    private renderIframe = () => {
        const { visibleSpinner } = this.state;
        const className = classNames(
            'promo__video-iframe',
            {
                'promo__video-iframe--hidden': visibleSpinner,
            },
        );

        return (
            <iframe
                className={className}
                onLoad={this.hideSpinner}
                title="video"
                frameBorder="0"
                width="380"
                height="214"
                src="https://www.youtube.com/embed/IxuWPtcrF68?autoplay=1"
                allow="autoplay;"
                allowFullScreen
            />
        );
    }

    render() {
        const { visibleVideo, visibleSpinner } = this.state;
        const { t } = this.props;

        return (
            <section className="promo">
                <div className="container container--wrap">
                    <div className="left">
                        <h1 className="promo__title">{t('promoTitle')}</h1>
                        <div className="promo__description">
                            {t('promoDescription')}
                        </div>
                    </div>
                    <div className="right">
                        <div className="promo__video">
                            {visibleVideo && !visibleSpinner
                                ? null
                                : this.renderWrapper()
                            }
                            {visibleVideo && this.renderIframe()}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export const Promo = withTranslation()(PromoView);
