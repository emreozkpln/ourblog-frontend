
export default function formatDate(date) {
    try {
        let dbDate, year, month, day, formatDate
        dbDate = date
        const dateObject = new Date(dbDate);
        year = dateObject.getFullYear();
        month = dateObject.getMonth() + 1; // Aylar 0-11 arası indekslenir
        day = dateObject.getDate();
        formatDate = `${day}.${month}.${year}`;
        return formatDate
    } catch (err) {
        return "err"
    }
}