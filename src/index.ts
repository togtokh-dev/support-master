import level from "./level";
import paginate from "./paginate";
import hash from "./hash";
import query_parameters from "./query-parameters";
import convert from "./convert";
const containsOnlyNumbers = async (str: string) => {
  const regex = /^[0-9]+$/;
  return regex.test(str);
};
const containsOnlyString = async (str: string) => {
  const regex = /^[a-zA-Z]+$/;
  return regex.test(str);
};
const nationalIdChecker = async (register: string) => {
  let month, year;
  if (["2", "3"].includes(register[4])) {
    year = Number.parseInt("20" + register.slice(2, 4));
    month = Number.parseInt(register.slice(4, 6)) - 20;
  } else {
    year = Number.parseInt("19" + register.slice(2, 4));
    month = Number.parseInt(register.slice(4, 6));
  }
  const day = Number.parseInt(register.slice(6, 8));
  const gander =
    Number.parseInt(register.slice(8, 9)) % 2 == 1 ? "men" : "women";
  return { year, month, day, gander };
};
async function delayLoop(iterations: number, delay: number) {
  for (let i = 0; i < iterations; i++) {
    console.log(`Iteration ${i + 1}`);
    await new Promise((resolve) => setTimeout(resolve, delay));
  }
}
export default {
  paginate,
  containsOnlyNumbers,
  containsOnlyString,
  nationalIdChecker,
  query_parameters,
  level,
  hash,
  delayLoop,
  convert,
};
