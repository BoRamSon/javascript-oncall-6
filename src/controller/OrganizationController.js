import InputMonthAndDay from "../modules/InputMonthAndDay.js";

class OrganizationController {
  constructor() {
    this.inputMonthAndDay = new InputMonthAndDay();
  }

  async organizeScheduling() {
    await this.inputMonthAndDay.changeArray();
  }
}

export default OrganizationController;
