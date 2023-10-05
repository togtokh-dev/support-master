import level from "./level";
import paginate from "./paginate";
import hash from "./hash";
const containsOnlyNumbers = async (str: string) => {
  const regex = /^[0-9]+$/;
  return regex.test(str);
};
const containsOnlyString = async (str: string) => {
  const regex = /^[a-zA-Z]+$/;
  return regex.test(str);
};

export default {
  paginate,
  containsOnlyNumbers,
  containsOnlyString,
  level,
  hash,
};
