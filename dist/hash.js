"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const Create = (password) => __awaiter(void 0, void 0, void 0, function* () {
    const salt = crypto.randomBytes(16).toString("hex");
    const hashedPassword = hashCreate(password, salt);
    return hashedPassword;
});
const Verify = (entered_password, password) => __awaiter(void 0, void 0, void 0, function* () {
    const salt = password.split("$")[0];
    const result = hashVerify(entered_password, password, salt);
    return result;
});
exports.default = { Create, Verify, hashCreate, hashVerify };
