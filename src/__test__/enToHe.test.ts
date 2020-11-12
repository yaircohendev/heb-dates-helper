import {
    dateToVerbal,
    dateToNumeric,
    heToDate,
    heToEn,
    heDateToVerbal,
    getDiffBetweenDates,
    hasDatePassed
} from '../index'

test('HelperFunctions', () => {
    expect(dateToNumeric('12/20/2020')).toBe('20/12/2020');
    expect(dateToVerbal('12/20/2020')).toBe('יום ראשון, 20 בדצמבר 2020');
    expect(dateToNumeric(new Date('12/20/2020'))).toBe('20/12/2020');
    expect(dateToVerbal(new Date('12/20/2020'))).toBe('יום ראשון, 20 בדצמבר 2020');
    expect(heToDate('20/12/2020')).toStrictEqual(new Date(2020, 11, 20));
    expect(heToEn('20/12/2020')).toBe('12/20/2020');
    expect(heDateToVerbal('20/12/2020')).toBe('יום ראשון, 20 בדצמבר 2020');
    expect(getDiffBetweenDates(new Date('12/22/2020'), new Date('12/20/2020'))).toBe(2);
    expect(getDiffBetweenDates('12/22/2020', '12/20/2020')).toBe(2);
    expect(hasDatePassed('12/22/2030')).toBe(false);
    expect(hasDatePassed('12/22/2018')).toBe(true);
});
