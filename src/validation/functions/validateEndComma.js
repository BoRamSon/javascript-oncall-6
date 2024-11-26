import ERROR_MESSAGES from "../../constants/errorMessages.js";

const validateEndComma = (value) => {
  const regExPatturn = /,$/;
  const regExpTest = regExPatturn.test(value);
  if (regExpTest) throw new Error(ERROR_MESSAGES.VALIDATE_END_COMMA);
  return true;
};

export default validateEndComma;