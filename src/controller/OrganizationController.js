import { MissionUtils } from '@woowacourse/mission-utils';
import InputMonthAndDay from '../modules/InputMonthAndDay.js';
import validateEmpty from '../validation/functions/validateEmpty.js';
import validateRegEx from '../validation/functions/validateRegExp.js';
import validateEndComma from '../validation/functions/validateEndComma.js';

class OrganizationController {
  constructor() {
    this.inputMonthAndDay = new InputMonthAndDay();
  }

  async organizeScheduling() {
    await this.inputMonthAndDay.changeArray();
    await this.inputWeekdayWorker();
  }

  async inputWeekdayWorker() {
    const weekdayWorker = await MissionUtils.Console.readLineAsync(
      '평일 비상 근무 순번대로 사원 닉네임을 입력하세요> '
    );
    const stringType = String(weekdayWorker);
    const noSpaceValue = stringType.replace(/ /g, '');
    this.validationWeekday(noSpaceValue);
    return noSpaceValue;
  }

  validationWeekday(input) {
    validateEmpty(input);
    const regExPatturn = /^[가-힣](,[가-힣])*/;
    validateRegEx(input, regExPatturn);
    validateEndComma(input);

    // const inputArray = makeArrayFromString(input);
  }
}

export default OrganizationController;
