export const bookHoliday = (numOfGuests: number, checkIn: [number, number, number], checkOut: [number, number, number]) => {
    const checkInDate = new Date(...checkIn);
    const checkOutDate = new Date(...checkOut);

    return console.log(`Group size: ${numOfGuests}
    Check in / out: ${checkInDate.toDateString()} - ${checkOutDate.toDateString()}`)
};