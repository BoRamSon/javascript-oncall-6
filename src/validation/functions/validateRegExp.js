import ERROR_MESSAGES from "../../constants/errorMessages.js";

const validateRegEx = (value, regExp) => {
  const regExpTest = regExp.test(value);
  if (!regExpTest) throw new Error(ERROR_MESSAGES.VALIDATE_REGEXP);
  return true;
};

export default validateRegEx;
