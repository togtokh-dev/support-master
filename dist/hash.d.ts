declare function hashCreate(password: string, salt: string): string;
declare function hashVerify(enteredPassword: string, storedHash: string, salt: string): boolean;
declare const _default: {
    Create: (password: string) => Promise<string>;
    Verify: (entered_password: string, password: string) => Promise<boolean>;
    hashCreate: typeof hashCreate;
    hashVerify: typeof hashVerify;
};
export default _default;
