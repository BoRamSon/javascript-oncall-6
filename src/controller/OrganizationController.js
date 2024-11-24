import InputMonthAndDay from "../modules/InputMonthAndDay.js";

class OrganizationController {
  constructor() {
    this.inputMonthAndDay = new InputMonthAndDay();
  }

  async organizeScheduling() {
    await this.inputMonthAndDay.changeArray();
  }

  // 평일 비상 근무 순서를 입력받는다.
  async inputWeekdayWorker() {
    const weekdayWorker = await MissionUtils.Console.readLineAsync(
      "평일 비상 근무 순번대로 사원 닉네임을 입력하세요> "
    );
  }

  validationWeekday() {
    
  }

  // 휴일(토요일, 일요일, 법정공휴일) 비상 근무 순서를 입력받는다.
  async inputWeekendWorker() {

  }

}

export default OrganizationController;
