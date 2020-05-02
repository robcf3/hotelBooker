export const bookHoliday = (numOfGuests: number, checkIn, checkOut) => {
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const ONE_DAY = 1000 * 60 * 60 * 24;
    const lengthOfStay = (checkOutDate.getTime() - checkInDate.getTime()) / ONE_DAY;

    return `Group size: ${numOfGuests}
Check in / out: ${checkInDate.toDateString()} - ${checkOutDate.toDateString()}`
};