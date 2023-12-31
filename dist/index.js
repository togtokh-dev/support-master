"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const level_1 = require("./level");
const paginate_1 = require("./paginate");
const hash_1 = require("./hash");
const query_parameters_1 = require("./query-parameters");
const convert_1 = require("./convert");
const containsOnlyNumbers = async (str) => {
    const regex = /^[0-9]+$/;
    return regex.test(str);
};
const containsOnlyString = async (str) => {
    const regex = /^[a-zA-Z]+$/;
    return regex.test(str);
};
const nationalIdChecker = async (register) => {
    let month, year;
    if (["2", "3"].includes(register[4])) {
        year = Number.parseInt("20" + register.slice(2, 4));
        month = Number.parseInt(register.slice(4, 6)) - 20;
    }
    else {
        year = Number.parseInt("19" + register.slice(2, 4));
        month = Number.parseInt(register.slice(4, 6));
    }
    const day = Number.parseInt(register.slice(6, 8));
    const gander = Number.parseInt(register.slice(8, 9)) % 2 == 1 ? "men" : "women";
    return { year, month, day, gander };
};
async function delayLoop(iterations, delay) {
    for (let i = 0; i < iterations; i++) {
        console.log(`Iteration ${i + 1}`);
        await new Promise((resolve) => setTimeout(resolve, delay));
    }
}
exports.default = {
    paginate: paginate_1.default,
    containsOnlyNumbers,
    containsOnlyString,
    nationalIdChecker,
    query_parameters: query_parameters_1.default,
    level: level_1.default,
    hash: hash_1.default,
    delayLoop,
    convert: convert_1.default,
};
