import React from 'react';
import classNames from 'classnames';
import ReactSVG from 'react-svg';

import './Button.scss';

import './assets/clear.svg';
import './assets/remove.svg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: 'clear' | 'remove';
    theme?: 'purple' | 'white';
}

export class Button extends React.PureComponent<ButtonProps> {
    render() {
        const {
            children,
            className,
            theme,
            icon,
            disabled,
            ...props
        } = this.props;

        const buttonClassNames = classNames(
            className,
            'button',
            { 'button--disabled': disabled },
            theme ? `button--theme-${theme}` : '',
            icon ? `button--icon button--icon-${icon}` : '',
        );

        const content = icon
            ? <ReactSVG src={`./img/${icon}.svg`} svgClassName="button__svg" />
            : children;

        return (
            <button
                className={buttonClassNames}
                type="button"
                disabled={disabled}
                {...props}
            >
                {content}
            </button>
        );
    }
}
