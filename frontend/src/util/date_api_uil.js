export const formatDate = date => {
    const months = {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
        8: 'August',
        9: 'September',
        10: 'October',
        11: 'November',
        12: 'December',
    };
    const daysOfWeek = {
        1: 'Sunday',
        2: 'Monday',
        3: 'Tuesday',
        4: 'Wednesday',
        5: 'Thursday',
        6: 'Friday',
        7: 'Saturday',
    };


    let dateString = ""
    const newDate = date.split("T");
    const ymd = newDate[0].split("-");
    const year = ymd[0];
    const month = parseInt(ymd[1]);
    const day = parseInt(ymd[2]);
    const time = newDate[1].split(':')
    let firstTime = parseInt(time[0])
    let secTime = parseInt(time[1])

    let am_pm = `AM`;
        if (firstTime > 24 && firstTime !== 12) {
            firstTime = firstTime - 12
            am_pm = 'PM'
        }



    return `${months[month]} ${day} ${year}`}