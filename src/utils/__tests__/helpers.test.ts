import { formatCount } from '../helpers';

jest.mock('i18next', () => ({
    default: {
        t: (k: string) => k, // like 'cimode' for lng
    },
}));

describe('formatCount', () => {
    const thousand = 'thousand';
    const million = 'million';

    it('should return 0 in case of empty value', () => {
        expect(formatCount('')).toBe('0');
    });

    it('should return value as is when it is < 1000', () => {
        const oneDigitValue = '1';
        const twoDigitValue = '29';
        const threeDigitValue = '999';

        expect(formatCount(oneDigitValue)).toBe(oneDigitValue);
        expect(formatCount(twoDigitValue)).toBe(twoDigitValue);
        expect(formatCount(threeDigitValue)).toBe(threeDigitValue);
    });

    it('should return value with comma when it is >= 1000 and < 10000', () => {
        expect(formatCount('1000')).toBe('1,000');
        expect(formatCount('9999')).toBe('9,999');
    });

    it('should return value with comma when it is >= 1000 and < 10000', () => {
        expect(formatCount('1000')).toBe('1,000');
        expect(formatCount('9999')).toBe('9,999');
    });

    it('should return formatted value when it is >= 10000 and < 100000', () => {
        expect(formatCount('10000')).toBe(`10${thousand}`);
        expect(formatCount('99999')).toBe(`99,9${thousand}`);
    });

    it('should return formatted value when it is >= 100000 and < 1000000', () => {
        expect(formatCount('100000')).toBe(`100${thousand}`);
        expect(formatCount('999999')).toBe(`999${thousand}`);
    });

    it('should return formatted value when it is >= 1000000 and < 10000000', () => {
        expect(formatCount('1000000')).toBe(`1${million}`);
        expect(formatCount('9999999')).toBe(`9,9${million}`);
    });

    it('should return formatted value when it is >= 10000000 and < 100000000', () => {
        expect(formatCount('10000000')).toBe(`10${million}`);
        expect(formatCount('99999999')).toBe(`99${million}`);
    });

    it('should return formatted value when it is >= 100000000 and < 1000000000', () => {
        expect(formatCount('100000000')).toBe(`100${million}`);
        expect(formatCount('999999999')).toBe(`999${million}`);
    });
});
