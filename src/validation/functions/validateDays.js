import ERROR_MESSAGES from "../../constants/errorMessages.js";
import makeArrayFromString from "../../utils/makeArrayFromString.js";

const validateDays = (value) => {
  const inputArray = makeArrayFromString(value);
  const possibleDays = ["일", "월", "화", "수", "목", "금", "토"];
  const validatedValue = possibleDays.some((day) => day === inputArray[1]);
  if (!validatedValue) throw new Error(ERROR_MESSAGES.INPUT_POSSIBLE_DAYS);
  return true;
};

export default validateDays;