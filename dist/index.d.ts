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
        convert: ({ el, voucher_discount, currencyAmount, rank, }: import("./level").ConvertArgs) => Promise<import("./level").ConvertResult>;
    };
    hash: {
        Create: (password: string) => Promise<string>;
        Verify: (entered_password: string, password: string) => Promise<boolean>;
        hashCreate: (password: string, salt: string) => string;
        hashVerify: (enteredPassword: string, storedHash: string, salt: string) => boolean;
    };
    delayLoop: typeof delayLoop;
    convert: {
        convertCyrillicToLatin: (cyrillicText: string) => string;
    };
};
export default _default;
