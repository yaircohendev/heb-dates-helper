import { months } from './utils/arrays';

export function dateToVerbal(enDate: string | Date): string {
    if (typeof enDate === 'string') enDate = new Date(enDate);
    return getHebrewVerbalDate(enDate);
}

export function heDateToVerbal(heDateString: string): string {
    const date = heToDate(heDateString);
    return getHebrewVerbalDate(date)
}

export function dateToNumeric(enDate: string | Date): string {
    if (typeof enDate === 'string') enDate = new Date(enDate);
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

function getHebrewVerbalDate(date: Date) {
    return date.getDate() + ' ב' + `${months[date.getMonth()]} ${date.getFullYear()}`
}
