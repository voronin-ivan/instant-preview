import html2canvas from 'html2canvas';
import { Crop } from 'react-image-crop';
import i18n from 'i18next';
import ym from 'react-yandex-metrika';
import { setData } from './idb';

export const fileToUrl = (file: File) => window.URL.createObjectURL(file);

export const formatCount = (value: string) => {
    if (!value) return '0';

    const valueNum = Number(value);
    const million = i18n.t('million');
    const thousand = i18n.t('thousand');

    switch (value.length) {
        case 9:
            return value.slice(0, 3) + million;
        case 8:
            return value.slice(0, 2) + million;
        case 7:
            return +value[1] // if >= 1.1M
                ? valueNum.toLocaleString().slice(0, 3) + million
                : value.slice(0, 1) + million;
        case 6:
            return value.slice(0, 3) + thousand;
        case 5:
            return +value[2] // if >= 10.1K
                ? valueNum.toLocaleString().slice(0, 4) + thousand
                : value.slice(0, 2) + thousand;
        case 4:
            return (valueNum).toLocaleString('ru');
        default:
            return value;
    }
};

export const saveElementToImage = async (elementId: string) => {
    const fileName = `instant-preview-${new Date().getTime()}.png`;
    const link = document.createElement('a');
    const element = document.getElementById(elementId); // fck refs :D
    const canvas = await html2canvas(element, {
        scale: 2,
        logging: false,
        backgroundColor: null,
        onclone: (clonedDoc) => {
            const clonedElement = clonedDoc.getElementById(elementId);
            clonedElement.style.animation = 'none';
        },
    });

    link.download = fileName;
    link.href = canvas.toDataURL('image/png;base64');

    const evt = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true,
    });

    link.dispatchEvent(evt);
};

export const getCanvasWithImage = (image: HTMLImageElement, crop: Crop) => {
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const canvas = document.createElement('canvas');

    canvas.width = crop.width;
    canvas.height = crop.height;

    const ctx = canvas.getContext('2d');

    ctx.drawImage(
        image,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width,
        crop.height,
    );

    return canvas;
};

export const reachOfflineGoal = () => {
    ym('reachGoal', 'offline');
    setData('wasOffline', false);
};
