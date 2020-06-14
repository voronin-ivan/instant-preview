import React from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';

import './ErrorBoundary.scss';

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundaryView extends React.Component<WithTranslation, ErrorBoundaryState> {
    state = {
        hasError: false,
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: React.ErrorInfo) {
        console.error(error, info);
    }

    render() {
        const { children, t } = this.props;

        if (!this.state.hasError) {
            return children;
        }

        return (
            <div className="container">
                <div className="error">
                    <span>{t('errorMain')}&nbsp;—&nbsp;</span>
                    <a
                        href="mailto:hi@instant-preview.com"
                        className="error__link"
                    >
                        hi@instant-preview.com
                    </a>
                </div>
            </div>
        );
    }
}

export const ErrorBoundary = withTranslation()(ErrorBoundaryView);
