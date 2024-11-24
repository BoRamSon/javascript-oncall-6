import { MissionUtils } from "@woowacourse/mission-utils";
import validateMonthAndDay from "../validation/validateMonthAndDay.js";

class OrganizationController {
  constructor() {}

  async organizeScheduling() {
    await this.getMonthAndDay();
  }

  async getMonthAndDay() {
    const inputMonthAndDay = await MissionUtils.Console.readLineAsync(
      "비상 근무를 배정할 월과 시작 요일을 입력하세요> "
    );
    const stringType = String(inputMonthAndDay);
    const noSpace = stringType.replace(/ /g, "");
    return validateMonthAndDay(noSpace);
  }


}

export default OrganizationController;
