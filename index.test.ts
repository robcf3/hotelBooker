import {expect} from "chai";
import {bookHoliday} from "./index"

describe('Test', () => {

    it ('should confirm booking details', () => {
        expect(bookHoliday(6, [2020, 10, 9], [2020, 10, 11])).to.eql(`Group size: 6
Check in / out: Mon Nov 09 2020 - Wed Nov 11 2020`);
    });


});
