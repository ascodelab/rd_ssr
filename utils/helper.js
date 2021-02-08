export const getFormattedDate = (date) => {
    const months = [
        'Jan',
        'Feb',
        'March',
        'April',
        'May',
        'June',
        'July',
        'Aug',
        'Sep',
        'Oct',
        'Nove',
        'Dece'
    ]
    const dateObj = new Date(date)
    return `${
        months[dateObj.getMonth()]
        } ${dateObj.getDate()}, ${dateObj.getFullYear()}`
}
