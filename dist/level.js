"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = exports.levelInfo = exports.level_data = void 0;
// ---------- ДҮРЭМ / ТҮВШНИЙ МЭДЭЭЛЭЛ ----------
exports.level_data = [
    { rank: 1, point: 5_000, name: "Hitomi" },
    { rank: 2, point: 15_000, name: "Genin" },
    { rank: 3, point: 35_000, name: "Chūnin" },
    { rank: 4, point: 75_000, name: "Tokubetsu Jōnin" },
    { rank: 5, point: 155_000, name: "Jōnin" },
    { rank: 6, point: 315_000, name: "Anbu" },
    { rank: 7, point: 635_000, name: "Sannin" },
    { rank: 8, point: 1_275_000, name: "Kage" },
];
/** Одоогийн оноогоор түвшин тодорхойлох */
const levelInfo = async (curPoints) => {
    for (let index = 1; index <= 8; index++) {
        const nextLevelThreshold = 5000 * (Math.pow(2, index) - 1);
        if (curPoints < nextLevelThreshold || index === 8) {
            const info = exports.level_data[Math.min(index - 1, 7)];
            return { ...info, user_exp: curPoints };
        }
    }
    const last = exports.level_data[7];
    return { ...last, user_exp: curPoints };
};
exports.levelInfo = levelInfo;
// ---------- ТУСЛАМЖ ФУНКЦ ----------
const toNumberSafe = (v, fallback = 0) => Number.isFinite(Number(v)) ? Number(v) : fallback;
const clampMin = (n, min = 0) => (n < min ? min : n);
// ---------- ГОЛ ТООЦОО ----------
/**
 * Дараалал (таны зааснаар):
 * 1) converted_amount = base_amount * fx
 * 2) default (bonus%) = converted_amount * (bonus/100)         ← ҮНДСЭН ДҮН-ээс
 * 3) voucher:
 *    - percentage → converted_amount * (value/100)             ← ҮНДСЭН ДҮН дээр
 *    - fixed      → value
 *    subtotal_after_discounts_on_base = converted_amount - bonus - voucher
 * 4) profit:
 *    - percentage → converted_amount * (profit/100)            ← ҮНДСЭН ДҮН-ээс
 *    - fixed      → profit
 *    subtotal_after_profit_before_rank = subtotal_after_discounts_on_base + profit_amount
 * 5) rank discount: ЗӨВХӨН АШГИЙН ДҮНГЭЭС
 *    rank_discount = round( (profit_amount * 1%) * rank.rank )
 * 6) final = subtotal_after_profit_before_rank - rank_discount
 */
const convert = async ({ el, voucher_discount, currencyAmount, rank, }) => {
    // 0) Оролтыг цэвэрлэх
    const base_amount = clampMin(toNumberSafe(el?.amount));
    const fx_rate = clampMin(toNumberSafe(currencyAmount));
    const profit = clampMin(toNumberSafe(el?.profit));
    const profit_type = el?.profit_type; // "percentage" | "fixed"
    const bonus_percent = clampMin(toNumberSafe(el?.bonus)); // хүсвэл 0..100 гэж хавчуулаарай
    // 1) ҮНДСЭН ДҮН (валют хөрвүүлэлт)
    const converted_amount = base_amount * fx_rate;
    // 2) Ерөнхий бонус — ҮНДСЭН ДҮН-с
    const default_discount_amount = converted_amount * (bonus_percent / 100);
    // 3) Ваучер — ҮНДСЭН ДҮН дээр
    let voucher_amount = 0;
    let voucher_type = null;
    let voucher_value = 0;
    if (voucher_discount && voucher_discount.discount_value > 0) {
        voucher_type = voucher_discount.discount_type;
        voucher_value = voucher_discount.discount_value;
        if (voucher_discount.discount_type === "percentage") {
            voucher_amount =
                converted_amount *
                    (clampMin(toNumberSafe(voucher_discount.discount_value)) / 100);
        }
        else {
            voucher_amount = clampMin(toNumberSafe(voucher_discount.discount_value));
        }
    }
    // ҮНДСЭН ДҮН-д хийсэн 2 төрлийн хөнгөлөлтийн дараа
    const subtotal_after_discounts_on_base = clampMin(converted_amount - default_discount_amount - voucher_amount);
    // 4) Ашиг — ҮНДСЭН ДҮН-ээс тооцоод НЭМНЭ
    const profit_amount = profit_type === "percentage" ? converted_amount * (profit / 100) : profit;
    // ҮНДСЭН ДҮН + ашиг (анхны нийт дүн) — таны хүссэн шинэ утга
    const amount = converted_amount + profit_amount;
    const subtotal_after_profit_before_rank = subtotal_after_discounts_on_base + profit_amount;
    // 5) Rank — ЗӨВХӨН АШГИЙН ДҮНГЭЭС ХАСНА
    const rank_discount_amount = profit_amount > 0 ? Math.round((profit_amount / 100) * rank.rank) : 0;
    // 6) Эцсийн дүн
    const final_payable = Math.round(clampMin(subtotal_after_profit_before_rank - rank_discount_amount));
    const margin_over_converted = final_payable - converted_amount;
    // Нийт хөнгөлөлтийн нийлбэр (default + voucher + rank)
    const total_discount_amount = Math.round(default_discount_amount) +
        Math.round(voucher_amount) +
        Math.round(rank_discount_amount);
    // 7) Буцаах — бүлэглэсэн discount объекттой
    return {
        input: {
            base_amount,
            fx_rate,
            profit,
            profit_type,
            bonus_percent,
            voucher: voucher_discount,
            rank,
        },
        converted_amount,
        profit_amount,
        amount, // ҮНДСЭН ДҮН + ашиг
        subtotal_after_discounts_on_base: Math.round(subtotal_after_discounts_on_base),
        subtotal_after_profit_before_rank: Math.round(subtotal_after_profit_before_rank),
        discount: {
            amount: total_discount_amount,
            default: {
                amount: Math.round(default_discount_amount),
                percent: bonus_percent,
            },
            voucher: {
                amount: Math.round(voucher_amount),
                type: voucher_type,
                value: voucher_value,
            },
            rank: {
                amount: Math.round(rank_discount_amount),
                rank,
            },
        },
        final_payable,
        margin_over_converted,
    };
};
exports.convert = convert;
exports.default = { level_data: exports.level_data, levelInfo: exports.levelInfo, convert: exports.convert };
