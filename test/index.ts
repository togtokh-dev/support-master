// test/index.ts
import supportMaster from "../src";

const run = async () => {
  // -------- 1. Түвшин шалгах --------
  const levelInfoResult = await supportMaster.level.levelInfo(
    1_800_867.4999999998,
  );
  console.log("levelInfo:", levelInfoResult);

  // -------- 2. Level data харах --------
  console.log("level_data:", supportMaster.level.level_data);

  // -------- 3. Convert жишээ --------

  // Жишээ rank (3-р түвшин)
  const rank = {
    rank: 3,
    point: 35_000,
    name: "Chūnin",
    user_exp: 20_000,
  };
  const result4 = await supportMaster.level.convert({
    el: { amount: 50000, profit: 5, profit_type: "percentage", bonus: 10 }, // 10 USD, 10% бонус
    voucher_discount: { discount_value: 1000, discount_type: "fixed" },
    currencyAmount: 1,
    rank,
  });
  console.log("Convert Example 4 (no profit, only discounts):", result4);
};

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
