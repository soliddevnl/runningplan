class PlanConfigurator extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
      <div>
        <label>Plan Name</label>
        <input type="text" id="planName" />
      </div>
      <div>
        <label>Weeks to Train</label>
        <input type="number" id="weeksToTrain" />
      </div>
      <button id="createPlan">Create Plan</button>
    `;
  }
}

customElements.define('plan-configurator', PlanConfigurator);