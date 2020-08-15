import { normalizeTextField, normalizeNumberField, normalizeMultilineField } from '../normalizer';

describe('normalizeTextField', () => {
    const prevValue = 'some text';

    it('should return new value if its length <= 40', () => {
        const shortValue = 'some string';
        const longValue = 'some stupid string for input value, haha'; // 40 symbols

        expect(normalizeTextField(shortValue, prevValue)).toBe(shortValue);
        expect(normalizeTextField(longValue, prevValue)).toBe(longValue);
    });

    it('should return previous value if length of new value >40', () => {
        const newValue = 'some stupid long string for input value, haha';

        expect(normalizeTextField(newValue, prevValue)).toBe(prevValue);
    });
});

describe('normalizeNumberField', () => {
    const limit = 100;
    const normalize = normalizeNumberField(limit);
    const prevValue = '32';

    it('should return new value if it is a valid number', () => {
        const newValue = '100';

        expect(normalize(newValue, prevValue)).toBe(newValue);
    });

    it(`should return previous value if new value is more than ${limit}`, () => {
        expect(normalize('101', prevValue)).toBe(prevValue);
        expect(normalize('10000', prevValue)).toBe(prevValue);
    });

    it('should return previous value if new value isn\'t integer', () => {
        expect(normalize('35,5', prevValue)).toBe(prevValue);
        expect(normalize('35.5', prevValue)).toBe(prevValue);
        expect(normalize('just a simple string', prevValue)).toBe(prevValue);
    });

    it('should return previous value if new value starts from 0', () => {
        expect(normalize('0', prevValue)).toBe(prevValue);
        expect(normalize('02', prevValue)).toBe(prevValue);
    });
});

describe('normalizeMultilineField', () => {
    const prevValue = 'some text';

    it('should return new value if it has <= 10 rows', () => {
        const shortValue = 'short value';
        const longValue = `
            haha
            haha
            haha
            haha
            haha
            haha
            haha
            haha
        `;

        expect(normalizeMultilineField(shortValue, prevValue)).toBe(shortValue);
        expect(normalizeMultilineField(longValue, prevValue)).toBe(longValue);
    });

    it('should return previous value if new value has > 10 rows', () => {
        const newValue = `
            haha
            haha
            haha
            haha
            haha
            haha
            haha
            haha
            haha
        `;

        expect(normalizeMultilineField(newValue, prevValue)).toBe(prevValue);
    });
});
