import React from 'react';
import ReactCrop, { Crop as ICrop } from 'react-image-crop';
import { Dialog } from 'react-toolbox/lib/dialog';
import { getCanvasWithImage } from '../../utils/helpers';
import i18n from '../../utils/i18n';
import { Button } from '../Button/Button';

import 'react-image-crop/lib/ReactCrop.scss';
import './Crop.scss';

interface CropProps {
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

export class Crop extends React.PureComponent<CropProps, CropState> {
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
        const { active, src } = this.props;

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
                        {i18n('cancel')}
                    </Button>
                    <Button
                        className="crop__buttons-item crop__buttons-item--save"
                        theme="purple"
                        onClick={this.onCropSave}
                        disabled={!width || !height}
                        big
                    >
                        {i18n('save')}
                    </Button>
                </div>
            </Dialog>
        );
    }
}
