import ERROR_MESSAGES from "../../constants/errorMessages.js";
import makeArrayFromString from "../../utils/makeArrayFromString.js"

const validateLimitNumber = (value) => {
  const inputArray = makeArrayFromString(value);
  const possibleMonth = ['1','2','3','4','5','6','7','8','9','10','11','12'];
  const validatedValue = possibleMonth.some(
    (month) => month === inputArray[0]);
  if(!validatedValue) 
    throw new Error(ERROR_MESSAGES.INPUT_POSSIBLE_MONTH);
  return true;
};

export default validateLimitNumber;