import OrganizationController from "./controller/OrganizationController.js";

class App {
  constructor() {
    this.organizationController = new OrganizationController();
  }
  async run() {
    await this.organizationController.organizeScheduling();
  }
}

export default App;
