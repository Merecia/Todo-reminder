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

function getDateWithoutTime(date) {

    return date.toISOString().slice(0, 10);
}

function getTimeWithoutDate(date) {

    return date.toISOString().slice(11, 19);
}

export {addMinutes, addHours, addDays, addMonths, getDateWithoutTime, getTimeWithoutDate};