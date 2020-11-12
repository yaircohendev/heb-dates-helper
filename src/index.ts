export function dateToVerbal(enDate: string | Date): string {
    enDate = convertToDateHelper(enDate);
    return getHebrewVerbalDateHelper(enDate);
}

export function heDateToVerbal(heDateString: string): string {
    const date = heToDate(heDateString);
    return getHebrewVerbalDateHelper(date)
}

export function dateToNumeric(enDate: string | Date): string {
    enDate = convertToDateHelper(enDate);
    return `${enDate.getDate()}/${enDate.getMonth() + 1}/${enDate.getFullYear()}`
}

export function heToDate(heDate: string): Date {
    let date: string[] | number[] = heDate.split('/');
    date = date.map(d => Number(d));
    return new Date(date[2], date[1] - 1, date[0])
}

export function heToEn(heDate: string): string {
    let dateArr: string[] | number[] = heDate.split('/');
    return `${dateArr[1]}/${dateArr[0]}/${dateArr[2]}`
}

export function getDiffBetweenDates(date1: Date | string, date2: Date | string) {
    [date1, date2].forEach(date => date = convertToDateHelper(date))
    const diffTime = Math.abs(Number(date2) - Number(date1));
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

function convertToDateHelper(date: string | Date): Date {
    if (typeof date === 'string') date = new Date(date);
    return date;
}

function getHebrewVerbalDateHelper(date: Date): string {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateTimeFormat = new Intl.DateTimeFormat('he', options);
    return dateTimeFormat.format(date)
}

