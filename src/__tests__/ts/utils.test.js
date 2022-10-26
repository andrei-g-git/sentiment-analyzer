import {expect, test} from "vitest";
import {trimDecimals} from "../../ts/utils";

test("that it returns correct value", ()=> {
    const result = trimDecimals(34.54645654, 3);
    expect(result).toBe(34.546);
});
