export class PlanParameters {
  constructor({ weeksToTrain }) {
    this.weeksToTrain = weeksToTrain;
  }
}

export class Plan {
  trainings = [];

  get duration() {
    return this.trainings.length;
  }
}

export class Planner {
  /**
   * @param {PlanParameters} parameters
   */
  createPlan(parameters) {
    const plan = new Plan( );
    plan.trainings = new Array(parameters.weeksToTrain).fill(0);

    return plan
  }
}