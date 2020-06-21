import React from 'react';
import TooltipLite, { TooltipProps } from 'react-tooltip-lite';
import cn from 'classnames';

import './Tooltip.scss';

export const Tooltip: React.FC<TooltipProps> = ({
    children,
    className,
    tipContentClassName,
    ...rest
}) => {
    const tooltipClassName = cn(
        'tooltip',
        { [className]: Boolean(className) },
    );

    const contentClassName = cn(
        'tooltip__content',
        { [tipContentClassName]: Boolean(tipContentClassName) },
    );

    return (
        <TooltipLite
            hoverDelay={0}
            className={tooltipClassName}
            tipContentClassName={contentClassName}
            arrowSize={8}
            {...rest}
        >
            {children}
        </TooltipLite>
    );
};
