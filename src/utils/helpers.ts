import html2canvas from 'html2canvas';
import i18n from './i18n';

export const fileToUrl = (file: File) => window.URL.createObjectURL(file);

export const formatCount = (value: string) => {
    if (!value) return '0';

    const valueNum = Number(value);
    const million = i18n('million');
    const thousand = i18n('thousand');

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
    const fileName = `insta-preview-${new Date().getTime()}.png`;
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
    link.click();
};
