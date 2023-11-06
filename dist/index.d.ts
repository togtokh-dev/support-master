declare function delayLoop(iterations: number, delay: number): Promise<void>;
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
    nationalIdChecker: (register: string) => Promise<{
        year: number;
        month: number;
        day: number;
        gander: string;
    }>;
    query_parameters: (mini_app_id: string, data: any, version: number, short: boolean) => {
        result: string;
    };
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
    hash: {
        Create: (password: string) => Promise<string>;
        Verify: (entered_password: string, password: string) => Promise<boolean>;
        hashCreate: (password: string, salt: string) => string;
        hashVerify: (enteredPassword: string, storedHash: string, salt: string) => boolean;
    };
    delayLoop: typeof delayLoop;
};
export default _default;
