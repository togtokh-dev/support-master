"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
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
const levelInfo = async (curPoints) => {
    for (let index = 1; index <= 8; index++) {
        const nxtLvl = 5000 * (Math.pow(2, index) - 1);
        if (curPoints < nxtLvl) {
            const json = level_data[index - 1];
            return {
                ...json,
                user_exp: curPoints,
            };
        }
    }
};
const convert = async (el, currencyAmount, rank) => {
    const amount = el.amount;
    const converterdAmount = amount * currencyAmount;
    if (el?.profit_type) {
        el.amount = converterdAmount + (converterdAmount / 100) * el?.profit;
    }
    else {
        el.amount = converterdAmount + el?.profit;
    }
    const main_amount = Math.round(el.amount);
    const bonus_rank = el?.profit_type
        ? Math.round((((converterdAmount / 100) * el?.profit) / 100) * rank.rank)
        : Math.round((el?.profit / 100) * rank.rank);
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
};
exports.convert = convert;
exports.default = { level_data, levelInfo, convert: exports.convert };
