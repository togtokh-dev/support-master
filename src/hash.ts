import * as crypto from "crypto";

function hashCreate(password: string, salt: string) {
  const hash = crypto
    .pbkdf2Sync(password, salt, 10000, 64, "sha256")
    .toString("hex");
  const hashedPassword = `${salt}$${hash}`;
  return hashedPassword;
}

function hashVerify(
  enteredPassword: string,
  storedHash: string,
  salt: string
): boolean {
  const enteredHash = hashCreate(enteredPassword, salt);
  return enteredHash === storedHash;
}
const Create = async (password: string) => {
  const salt = crypto.randomBytes(16).toString("hex");
  const hashedPassword = hashCreate(password, salt);
  return hashedPassword;
};
const Verify = async (entered_password: string, password: string) => {
  const salt = password.split("$")[0];
  const result = hashVerify(entered_password, password, salt);
  return result;
};
export default { Create, Verify, hashCreate, hashVerify };
