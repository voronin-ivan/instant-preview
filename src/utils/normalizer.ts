export const normalizeTextField = (value: string, prevValue: string) => {
    const maxLength = 40;

    return value.length <= maxLength ? value : prevValue;
};

export const normalizeNumberField = (max: number) => (
    value: string,
    previousValue: string,
) => {
    const reg = /^\d+$/; // only nums

    if (!value || (
        reg.test(value)
        && Number(value) <= max
        && !value.startsWith('0')
    )) return value;

    return previousValue;
};

export const normalizeMultilineField = (value: string, prevValue: string) => {
    const rowsLimit = 10;

    if (value.split('\n').length <= rowsLimit) {
        return value;
    }

    return prevValue;
};
