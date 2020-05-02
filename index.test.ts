import {expect} from "chai";

describe('Test', () => {


    it ('should confirm booking details', () => {
        expect(bookHoliday(6, [2020, 11, 9], [2020, 11, 11]).to.eql(console.log(`Group size: 6
        Check in / out: 9 Nov 2020 - 11 Nov 2020`)));
    });


});
