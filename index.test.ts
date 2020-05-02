import {expect} from "chai";
import {bookHoliday} from "./index"


describe('Test', () => {
    let minDate;
    let maxDate;

    beforeEach(() => {
        const randomDate = (start, end) => {
            return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        };
        minDate = new Date();
        maxDate = randomDate(minDate, new Date(2020, 4, 31));
    });

    it ('should confirm booking details', () => {
        const myVacation = bookHoliday(6, minDate, maxDate);
        console.log(myVacation);
        expect(myVacation).to.eql(`Group size: 6
Check in / out: ${minDate.toDateString()} - ${maxDate.toDateString()}`);

    });




});
