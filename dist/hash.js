"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto = require("crypto");
function hashCreate(password, salt) {
    const hash = crypto
        .pbkdf2Sync(password, salt, 10000, 64, "sha256")
        .toString("hex");
    const hashedPassword = `${salt}$${hash}`;
    return hashedPassword;
}
function hashVerify(enteredPassword, storedHash, salt) {
    const enteredHash = hashCreate(enteredPassword, salt);
    return enteredHash === storedHash;
}
const Create = async (password) => {
    const salt = crypto.randomBytes(16).toString("hex");
    const hashedPassword = hashCreate(password, salt);
    return hashedPassword;
};
const Verify = async (entered_password, password) => {
    const salt = password.split("$")[0];
    const result = hashVerify(entered_password, password, salt);
    return result;
};
exports.default = { Create, Verify, hashCreate, hashVerify };
