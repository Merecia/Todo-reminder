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

    const dateWithoutTime = getDateWithoutTime(date);

    const timeWithoutDate = getTimeWithoutDate(date);

    console.log(date);
}

export {
    addMinutes, addHours, addDays, addMonths, 
    getDateWithoutTime, getTimeWithoutDate, 
    removeMilliseconds, removeSeconds,
    convertTimeZone
};