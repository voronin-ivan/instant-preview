import React from 'react';
import ReactCrop, { Crop as ICrop } from 'react-image-crop';
import { Dialog } from 'react-toolbox/lib/dialog';
import { withTranslation, WithTranslation } from 'react-i18next';
import { getCanvasWithImage } from '../../utils/helpers';
import { Button } from '../Button/Button';

import 'react-image-crop/lib/ReactCrop.scss';
import './Crop.scss';

interface CropProps extends WithTranslation {
    active: boolean;
    src: string;
    fileName: string;
    onSave: (file: File) => void;
    onCancel: () => void;
}

interface CropState {
    crop: ICrop;
}

const defaultCrop: ICrop = {
    aspect: 1,
    width: 85,
};

class CropView extends React.PureComponent<CropProps, CropState> {
    state: CropState = {
        crop: defaultCrop,
    };

    imageRef: HTMLImageElement = null;

    private onImageLoaded = (image: HTMLImageElement) => {
        this.imageRef = image;
    }

    private onCropCancel = () => {
        this.setState({ crop: defaultCrop });
        this.props.onCancel();
    }

    private onCropChange = (crop: ICrop) => {
        this.setState({ crop });
    }

    private onCropSave = () => {
        const canvas = getCanvasWithImage(this.imageRef, this.state.crop);

        canvas.toBlob((blob: File) => this.props.onSave(blob));
    }

    render() {
        const { crop } = this.state;
        const { width, height } = crop;
        const { active, src, t } = this.props;

        return (
            <Dialog
                className="crop"
                active={active}
                onEscKeyDown={this.onCropCancel}
                onOverlayClick={this.onCropCancel}
            >
                <ReactCrop
                    className="crop__wrapper"
                    src={src}
                    crop={crop}
                    onChange={this.onCropChange}
                    onImageLoaded={this.onImageLoaded}
                />
                <div className="crop__buttons">
                    <Button
                        className="crop__buttons-item"
                        theme="white"
                        onClick={this.onCropCancel}
                        big
                    >
                        {t('cancel')}
                    </Button>
                    <Button
                        className="crop__buttons-item crop__buttons-item--save"
                        theme="purple"
                        onClick={this.onCropSave}
                        disabled={!width || !height}
                        big
                    >
                        {t('save')}
                    </Button>
                </div>
            </Dialog>
        );
    }
}

export const Crop = withTranslation()(CropView);
