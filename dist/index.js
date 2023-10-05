"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const level_1 = require("./level");
const paginate_1 = require("./paginate");
const hash_1 = require("./hash");
const containsOnlyNumbers = (str) => __awaiter(void 0, void 0, void 0, function* () {
    const regex = /^[0-9]+$/;
    return regex.test(str);
});
const containsOnlyString = (str) => __awaiter(void 0, void 0, void 0, function* () {
    const regex = /^[a-zA-Z]+$/;
    return regex.test(str);
});
exports.default = {
    paginate: paginate_1.default,
    containsOnlyNumbers,
    containsOnlyString,
    level: level_1.default,
    hash: hash_1.default,
};
