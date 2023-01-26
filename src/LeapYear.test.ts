import {LeapYear} from './LeapYear';

/**
 *
 * # Rules:
 *
 * - A year is leap if it is divisible by 4
 * - Unless it is divisible by 100, then it’s not a leap year
 * - Unless it is divisible by 400, then it’s a leap year
 *
 * # Tests:
 *
 * - [x] 2022 is not leap
 * - [ ] 2024 is leap
 * - [ ] 1900 is not leap
 * - [ ] 2000 is leap
 */

describe('Determining leap years', () => {
    it('returns false for 2022', () => {
        // arrange
        const sut = new LeapYear();
        const year = 2022;
        // act
        const result = sut.isLeap(year);
        // assert
        expect(result).toStrictEqual(false);
    });

    it('returns true for 2024', () => {
        // arrange
        const sut = new LeapYear();
        const year = 2024;
        // act
        const result = sut.isLeap(year);
        // assert
        expect(result).toStrictEqual(true);
    });
});
