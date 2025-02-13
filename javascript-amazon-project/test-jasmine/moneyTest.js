import {formatCurrency} from "../scripts/utils/money.js";

describe('Test suite: formatCurrency', () => {
    it('Converts cents into dollars', () => {
        expect(formatCurrency(2095)).toEqual('20.95');
    });
    it('works with zero', () => {
        expect(formatCurrency(0)).toEqual('0.00');
    });
    it('Works with rounds up the nearest cent',() => {
        expect(formatCurrency(2000.5)).toEqual('20.01');
    })
});