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



    return `${months[month]} ${day} ${year}`
}


    export const formatDateShort = date => {
        const months = {
            1: '01',
            2: '02',
            3: '03',
            4: '04',
            5: '05',
            6: '06',
            7: '07',
            8: '08',
            9: '09',
            10: '10',
            11: '11',
            12: '12',
        };
    
        const newDate = date.split("T");
        const ymd = newDate[0].split("-");
        const year = ymd[0];
        const month = parseInt(ymd[1]);
        const day = parseInt(ymd[2]);
       
        return (day > 9) ? `${year}-${months[month]}-${day}` : `${year}-${months[month]}-0${day}`;
    }