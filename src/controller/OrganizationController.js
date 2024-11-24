import { MissionUtils } from "@woowacourse/mission-utils";
import validateMonthAndDay from "../validation/validateMonthAndDay.js";

class OrganizationController {
  constructor() {}

  async organizeScheduling() {
    await this.inputAndValidation();
  }

  async inputMonthAndDay() {
    const monthAndDay = await MissionUtils.Console.readLineAsync(
      "비상 근무를 배정할 월과 시작 요일을 입력하세요> "
    );
    const stringType = String(monthAndDay);
    const noSpaceValue = stringType.replace(/ /g, "");
    validateMonthAndDay(noSpaceValue);
    return noSpaceValue;
  }

  
  async inputAndValidation() {
    try {
      const validatedInput = await this.inputMonthAndDay();
      return validatedInput;
    } catch (error) {
      MissionUtils.Console.print(error);
      return false;
    }
  }

  async repeatUntilCorrect() {
    for(let i = 0; i < 10; i++){
      const validatedInput = this.inputAndValidation();
      if(validatedInput) return validatedInput;
      
      if(i === 5) 
        throw new Error("5번 이상 잘 못 입력하여 종료되었습니다. 처음부터 다시 시작해 주세요.")
    }
  }


}

export default OrganizationController;
