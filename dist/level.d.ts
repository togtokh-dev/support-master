export declare const level_data: readonly [{
    readonly rank: 1;
    readonly point: 5000;
    readonly name: "Hitomi";
}, {
    readonly rank: 2;
    readonly point: 15000;
    readonly name: "Genin";
}, {
    readonly rank: 3;
    readonly point: 35000;
    readonly name: "Chūnin";
}, {
    readonly rank: 4;
    readonly point: 75000;
    readonly name: "Tokubetsu Jōnin";
}, {
    readonly rank: 5;
    readonly point: 155000;
    readonly name: "Jōnin";
}, {
    readonly rank: 6;
    readonly point: 315000;
    readonly name: "Anbu";
}, {
    readonly rank: 7;
    readonly point: 635000;
    readonly name: "Sannin";
}, {
    readonly rank: 8;
    readonly point: 1275000;
    readonly name: "Kage";
}];
/**
 * Одоогийн оноогоор (curPoints) түвшинг тодорхойлох
 * nxtLvl = 5000 * (2^index - 1) — level_data дахь point-уудтай таарна.
 */
export declare const levelInfo: (curPoints: number) => Promise<{
    user_exp: number;
    rank: 1;
    point: 5000;
    name: "Hitomi";
} | {
    user_exp: number;
    rank: 2;
    point: 15000;
    name: "Genin";
} | {
    user_exp: number;
    rank: 3;
    point: 35000;
    name: "Chūnin";
} | {
    user_exp: number;
    rank: 4;
    point: 75000;
    name: "Tokubetsu Jōnin";
} | {
    user_exp: number;
    rank: 5;
    point: 155000;
    name: "Jōnin";
} | {
    user_exp: number;
    rank: 6;
    point: 315000;
    name: "Anbu";
} | {
    user_exp: number;
    rank: 7;
    point: 635000;
    name: "Sannin";
} | {
    user_exp: number;
    rank: 8;
    point: 1275000;
    name: "Kage";
}>;
export type PricingInput = {
    amount: number;
    profit: number;
    profit_type: "percentage" | "fixed";
    bonus: number;
};
export type VoucherDiscount = {
    discount_value: number;
    discount_type: "percentage" | "fixed";
};
export type RankInfo = {
    rank: number;
    point: number;
    name: string;
    user_exp: number;
};
export type ConvertArgs = {
    el: PricingInput;
    voucher_discount?: VoucherDiscount;
    currencyAmount: number;
    rank: RankInfo;
};
export type ConvertResult = {
    input: {
        base_amount: number;
        fx_rate: number;
        profit: number;
        profit_type: "percentage" | "fixed";
        bonus_percent: number;
        voucher?: VoucherDiscount;
        rank: RankInfo;
    };
    converted_amount: number;
    profit_amount: number;
    subtotal_after_discounts_on_base: number;
    subtotal_after_profit_before_rank: number;
    discount: {
        default: {
            amount: number;
            percent: number;
        };
        voucher: {
            amount: number;
            type: "percentage" | "fixed" | null;
            value: number;
        };
        rank: {
            amount: number;
            rank: RankInfo;
        };
    };
    final_payable: number;
    margin_over_converted: number;
};
/**
 * Дараалал:
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
export declare const convert: ({ el, voucher_discount, currencyAmount, rank, }: ConvertArgs) => Promise<ConvertResult>;
declare const _default: {
    level_data: readonly [{
        readonly rank: 1;
        readonly point: 5000;
        readonly name: "Hitomi";
    }, {
        readonly rank: 2;
        readonly point: 15000;
        readonly name: "Genin";
    }, {
        readonly rank: 3;
        readonly point: 35000;
        readonly name: "Chūnin";
    }, {
        readonly rank: 4;
        readonly point: 75000;
        readonly name: "Tokubetsu Jōnin";
    }, {
        readonly rank: 5;
        readonly point: 155000;
        readonly name: "Jōnin";
    }, {
        readonly rank: 6;
        readonly point: 315000;
        readonly name: "Anbu";
    }, {
        readonly rank: 7;
        readonly point: 635000;
        readonly name: "Sannin";
    }, {
        readonly rank: 8;
        readonly point: 1275000;
        readonly name: "Kage";
    }];
    levelInfo: (curPoints: number) => Promise<{
        user_exp: number;
        rank: 1;
        point: 5000;
        name: "Hitomi";
    } | {
        user_exp: number;
        rank: 2;
        point: 15000;
        name: "Genin";
    } | {
        user_exp: number;
        rank: 3;
        point: 35000;
        name: "Chūnin";
    } | {
        user_exp: number;
        rank: 4;
        point: 75000;
        name: "Tokubetsu Jōnin";
    } | {
        user_exp: number;
        rank: 5;
        point: 155000;
        name: "Jōnin";
    } | {
        user_exp: number;
        rank: 6;
        point: 315000;
        name: "Anbu";
    } | {
        user_exp: number;
        rank: 7;
        point: 635000;
        name: "Sannin";
    } | {
        user_exp: number;
        rank: 8;
        point: 1275000;
        name: "Kage";
    }>;
    convert: ({ el, voucher_discount, currencyAmount, rank, }: ConvertArgs) => Promise<ConvertResult>;
};
export default _default;
