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
exports.convert = void 0;
const paginate = (page, limit, total) => __awaiter(void 0, void 0, void 0, function* () {
    const pageCount = Math.ceil(total / limit);
    const start = (page - 1) * limit + 1;
    const skip = (page - 1) * limit;
    let end = start + limit - 1;
    if (end > total)
        end = total;
    const Pagination = { total, pageCount, start, end, skip, nextPage: null, prevPage: null };
    if (page < pageCount)
        Pagination.nextPage = page + 1;
    if (page > 1)
        Pagination.prevPage = page - 1;
    return Pagination;
});
const level_data = [
    {
        rank: 1,
        point: 5000,
        name: "Hitomi",
    },
    {
        rank: 2,
        point: 15000,
        name: "Genin",
    },
    {
        rank: 3,
        point: 35000,
        name: "Chūnin",
    },
    {
        rank: 4,
        point: 75000,
        name: "Tokubetsu Jōnin",
    },
    {
        rank: 5,
        point: 155000,
        name: "Jōnin",
    },
    {
        rank: 6,
        point: 315000,
        name: "Anbu",
    },
    {
        rank: 7,
        point: 635000,
        name: "Sannin",
    },
    {
        rank: 8,
        point: 1275000,
        name: "Kage",
    },
];
const levelInfo = (curPoints) => __awaiter(void 0, void 0, void 0, function* () {
    for (let index = 1; index <= 8; index++) {
        const nxtLvl = 5000 * (Math.pow(2, index) - 1);
        if (curPoints < nxtLvl) {
            const json = level_data[index - 1];
            return Object.assign(Object.assign({}, json), { user_exp: curPoints });
        }
    }
});
const convert = (el, currencyAmount, rank) => __awaiter(void 0, void 0, void 0, function* () {
    const amount = el.amount;
    const converterdAmount = amount * currencyAmount;
    if (el === null || el === void 0 ? void 0 : el.profit_type) {
        el.amount = converterdAmount + (converterdAmount / 100) * (el === null || el === void 0 ? void 0 : el.profit);
    }
    else {
        el.amount = converterdAmount + (el === null || el === void 0 ? void 0 : el.profit);
    }
    const main_amount = Math.round(el.amount);
    const bonus_rank = Math.round((((converterdAmount / 100) * (el === null || el === void 0 ? void 0 : el.profit)) / 100) * rank.rank);
    const bonus = (main_amount / 100) * el.bonus;
    const after_bonus = main_amount - bonus;
    const after_rank_bonus = after_bonus - bonus_rank;
    el.amount = Math.round(after_rank_bonus);
    const data = {
        main_amount,
        real_amount: converterdAmount,
        bonus: {
            amount: Math.round(bonus),
            profit: el.bonus,
        },
        bonus_rank: {
            amount: Math.round(bonus_rank),
            profit: rank.rank,
            rank,
        },
        amount: el.amount,
        profit: el.amount - converterdAmount,
    };
    return data;
});
exports.convert = convert;
const containsOnlyNumbers = (str) => __awaiter(void 0, void 0, void 0, function* () {
    const regex = /^[0-9]+$/;
    return regex.test(str);
});
const containsOnlyString = (str) => __awaiter(void 0, void 0, void 0, function* () {
    const regex = /^[a-zA-Z]+$/;
    return regex.test(str);
});
exports.default = {
    paginate,
    containsOnlyNumbers,
    containsOnlyString,
    level: { level_data, levelInfo, convert: exports.convert },
};
