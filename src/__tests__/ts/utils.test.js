import {expect, test} from "vitest";
import {
    trimDecimals,
    filterMaxValueInDict
} from "../../ts/utils";

//should try to wrap in 'describe'
test("that TRIM-DECIMALS returns correct value", ()=> {
    const result = trimDecimals(34.54645654, 3);
    expect(result).toBe(34.546);
});

test("that FILTER_MAX_VALUE_IN_DICT returns array of max values", () => {
    const result = filterMaxValueInDict({a: 1, b: 2, c: 2, d: 3});
    expect(result).toBe([8, 8, 8, 8, 8]);
});
