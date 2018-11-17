import React from 'react';
import classNames from 'classnames';
import { PreviewModel } from '../../../models/preview';

export class PreviewInfo extends React.PureComponent<PreviewModel> {
    render() {
        const {
            name,
            verifiedAcc,
            business,
            bio,
            website,
            address,
        } = this.props;

        const nameClassNames = classNames(
            'preview__info-name',
            { 'preview__info-name--verified': verifiedAcc && name.length },
        );

        return (
            <div className="preview__info">
                <span className={nameClassNames}>{name}</span>
                <div className="preview__info-business">{business}</div>
                <div className="preview__info-bio">{bio}</div>
                <div className="preview__info-website">{website}</div>
                <div className="preview__info-address">{address}</div>
            </div>
        );
    }
}
