"use strict";
exports.__esModule = true;
exports.getDiffBetweenDates = exports.heToEn = exports.heToDate = exports.dateToNumeric = exports.heDateToVerbal = exports.dateToVerbal = void 0;
function dateToVerbal(enDate) {
    enDate = convertToDateHelper(enDate);
    return getHebrewVerbalDateHelper(enDate);
}
exports.dateToVerbal = dateToVerbal;
function heDateToVerbal(heDateString) {
    var date = heToDate(heDateString);
    return getHebrewVerbalDateHelper(date);
}
exports.heDateToVerbal = heDateToVerbal;
function dateToNumeric(enDate) {
    enDate = convertToDateHelper(enDate);
    return enDate.getDate() + "/" + (enDate.getMonth() + 1) + "/" + enDate.getFullYear();
}
exports.dateToNumeric = dateToNumeric;
function heToDate(heDate) {
    var date = heDate.split('/');
    date = date.map(function (d) { return Number(d); });
    return new Date(date[2], date[1] - 1, date[0]);
}
exports.heToDate = heToDate;
function heToEn(heDate) {
    var dateArr = heDate.split('/');
    return dateArr[1] + "/" + dateArr[0] + "/" + dateArr[2];
}
exports.heToEn = heToEn;
function getDiffBetweenDates(date1, date2) {
    date1 = convertToDateHelper(date1);
    date2 = convertToDateHelper(date2);
    var diffTime = Math.abs(Number(date2) - Number(date1));
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}
exports.getDiffBetweenDates = getDiffBetweenDates;
function convertToDateHelper(date) {
    if (typeof date === 'string')
        date = new Date(date);
    return date;
}
function getHebrewVerbalDateHelper(date) {
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var dateTimeFormat = new Intl.DateTimeFormat('he', options);
    return dateTimeFormat.format(date);
}
console.log(getDiffBetweenDates('11/01/2020', new Date()));
