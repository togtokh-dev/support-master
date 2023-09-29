const paginate = async (page: number, limit: number, total: number) => {
  const pageCount = Math.ceil(total / limit);
  const start = (page - 1) * limit + 1;
  const skip = (page - 1) * limit;
  let end = start + limit - 1;
  if (end > total) end = total;
  const Pagination: {
    total: number;
    pageCount: number;
    start: number;
    end: number;
    skip: number;
    nextPage: number;
    prevPage: number;
  } = { total, pageCount, start, end, skip, nextPage: null, prevPage: null };

  if (page < pageCount) Pagination.nextPage = page + 1;
  if (page > 1) Pagination.prevPage = page - 1;
  return Pagination;
};
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
const levelInfo = async (curPoints: number) => {
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
export const convert = async (
  el: {
    amount: number;
    profit: number;
    profit_type: boolean;
    bonus: number;
  },
  currencyAmount: number,
  rank: {
    rank: number;
    point: number;
    name: string;
    user_exp: number;
  }
) => {
  const amount = el.amount;
  const converterdAmount = amount * currencyAmount;
  if (el?.profit_type) {
    el.amount = converterdAmount + (converterdAmount / 100) * el?.profit;
  } else {
    el.amount = converterdAmount + el?.profit;
  }
  const main_amount = Math.round(el.amount);

  const bonus_rank = Math.round(
    (((converterdAmount / 100) * el?.profit) / 100) * rank.rank
  );

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

const containsOnlyNumbers = async (str: string) => {
  const regex = /^[0-9]+$/;
  return regex.test(str);
};
const containsOnlyString = async (str: string) => {
  const regex = /^[a-zA-Z]+$/;
  return regex.test(str);
};
export default {
  paginate,
  containsOnlyNumbers,
  containsOnlyString,
  level: { level_data, levelInfo, convert },
};
