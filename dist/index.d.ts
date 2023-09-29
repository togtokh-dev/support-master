export declare const convert: (el: {
    amount: number;
    profit: number;
    profit_type: boolean;
    bonus: number;
}, currencyAmount: number, rank: {
    rank: number;
    point: number;
    name: string;
    user_exp: number;
}) => Promise<{
    main_amount: number;
    real_amount: number;
    bonus: {
        amount: number;
        profit: number;
    };
    bonus_rank: {
        amount: number;
        profit: number;
        rank: {
            rank: number;
            point: number;
            name: string;
            user_exp: number;
        };
    };
    amount: number;
    profit: number;
}>;
declare const _default: {
    paginate: (page: number, limit: number, total: number) => Promise<{
        total: number;
        pageCount: number;
        start: number;
        end: number;
        skip: number;
        nextPage: number;
        prevPage: number;
    }>;
    containsOnlyNumbers: (str: string) => Promise<boolean>;
    containsOnlyString: (str: string) => Promise<boolean>;
    level: {
        level_data: {
            rank: number;
            point: number;
            name: string;
        }[];
        levelInfo: (curPoints: number) => Promise<{
            user_exp: number;
            rank: number;
            point: number;
            name: string;
        }>;
        convert: (el: {
            amount: number;
            profit: number;
            profit_type: boolean;
            bonus: number;
        }, currencyAmount: number, rank: {
            rank: number;
            point: number;
            name: string;
            user_exp: number;
        }) => Promise<{
            main_amount: number;
            real_amount: number;
            bonus: {
                amount: number;
                profit: number;
            };
            bonus_rank: {
                amount: number;
                profit: number;
                rank: {
                    rank: number;
                    point: number;
                    name: string;
                    user_exp: number;
                };
            };
            amount: number;
            profit: number;
        }>;
    };
};
export default _default;
