import validateEmpty from "./functions/validateEmpty.js";
import validateDays from "./functions/validateDays.js"
import validateLimitNumber from "./functions/validateLimitNumber.js"
import validateRegEx from "./functions/validateRegExp.js";

const validateMonthAndDay = (value) => {
  validateEmpty(value)
  const regExpPattern = /^\d{1,2},\s?[가-힣]$/;
  validateRegEx(value, regExpPattern);
  validateLimitNumber(value);
  validateDays(value);
  return true;
};

export default validateMonthAndDay;