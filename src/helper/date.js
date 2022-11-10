function addMinutes(date, minutes) {

    date.setMinutes(date.getMinutes() + minutes);

    return date;
}

function addHours(date, hours) {

    date.setHours(date.getHours() + hours);

    return date;
}

function addDays(date, days) {

    date.setDate(date.getDate() + days);

    return date;
}

function addMonths(date, months) {

    date.setMonth(date.getMonth() + months);

    return date;
}

function convertTimeZone(date, GMT) {

    return addHours(date, GMT);
}

function getDateWithoutTime(date) {

    if (typeof(date) === 'object') return date.toISOString().slice(0, 10);

    return date.slice(0, 10);
}

function getTimeWithoutDate(date) {

    if (typeof date === 'object') return date.toISOString().slice(11, 19);

    return date.slice(11,19);
}

function removeMilliseconds(date) {

    if (typeof date === 'object') return date.toISOString().slice(0, -5);

    return date.slice(0, -5);
}

function removeSeconds(date) {

    if (typeof date === 'object') return date.toISOString().slice(0, -8);

    return date.slice(0, -8);
}

function getPrettyDate(date) {

    const GMT = 2;

    const currentDate = convertTimeZone(new Date(), GMT);

    let tomorrow = new Date();
    let yesterday = new Date();

    tomorrow.setDate(currentDate.getDate() + 1);
    yesterday.setDate(currentDate.getDate() - 1);

    if (getDateWithoutTime(currentDate) === getDateWithoutTime(date)) {
        return 'Сегодня';
    }

    else if (getDateWithoutTime(tomorrow) === getDateWithoutTime(date)) {
        return 'Завтра';
    }

    else if (getDateWithoutTime(yesterday) === getDateWithoutTime(date)) {
        return 'Вчера';
    }

    return getDateWithoutTime(date).split('-').reverse().join('.');
}

function isValidDate(date) {

    return date instanceof Date && !isNaN(date);
}

function getPrettyTime(date) {

    const timeWithoutDate = getTimeWithoutDate(date);

    return timeWithoutDate.slice(0, -3);
}

export {
    addMinutes, addHours, addDays, addMonths, 
    getDateWithoutTime, getTimeWithoutDate, 
    removeMilliseconds, removeSeconds,
    convertTimeZone, getPrettyDate, getPrettyTime,
    isValidDate
};