import React from 'react';
import { PreviewModel } from '../../../models/preview';

import '../assets/verified.png';

export class PreviewInfo extends React.PureComponent<Partial<PreviewModel>> {
    render() {
        const {
            name,
            verifiedAcc,
            business,
            bio,
            website,
            address,
        } = this.props;

        return (
            <div className="preview__info">
                <div className="preview__info-name">
                    <span>{name}</span>
                    {verifiedAcc && name && (
                        <img src="./img/verified.png" alt="" />
                    )}
                </div>
                <div className="preview__info-business">{business}</div>
                <div className="preview__info-bio">{bio}</div>
                <div className="preview__info-website">{website}</div>
                <div className="preview__info-address">{address}</div>
            </div>
        );
    }
}
