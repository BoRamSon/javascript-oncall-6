import validateEmpty from "./functions/validateEmpty";
import validateDays from "./functions/validateDays"
import validateLimitNumber from "./functions/validateLimitNumber"
import validateRegEx from "./functions/validateRegExp";

const validateMonthAndDay = (value) => {
  validateEmpty(value)
  const regExpPattern = /^\d{1,2},\s?[가-힣]$/;
  validateRegEx(value, regExpPattern);
  validateLimitNumber(value);
  validateDays(value);
  return true;
};

export default validateMonthAndDay;