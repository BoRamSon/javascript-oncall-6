import { MissionUtils } from "@woowacourse/mission-utils";

class OrganizationController {
  constructor() {}

  organizeScheduling() {
    this.getMonthAndDay();
  }

  getMonthAndDay() {
    const inputMonthAndDay = MissionUtils.Console.readLineAsync(
      "비상 근무를 배정할 월과 시작 요일을 입력하세요> "
    );
    
  }


}

export default OrganizationController;
