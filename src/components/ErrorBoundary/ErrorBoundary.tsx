import React from 'react';
import i18n from '../../utils/i18n';
import { LangModel } from '../../models/lang';

import './ErrorBoundary.scss';

export interface ErrorBoundaryProps {
    lang: LangModel;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
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
        if (this.state.hasError) {
            return (
                <div className="error">
                    <span>
                        <span>{i18n('errorMain')}&nbsp;—&nbsp;</span>
                        <a
                            href="mailto:hi@instant-preview.com"
                            className="error__link"
                        >
                            hi@instant-preview.com
                        </a>
                    </span>
                </div>
            );
        }

        return this.props.children;
    }
}
