export class PlanParameters {
  /**
   * @type {number}
   */
  weeksToTrain = 0;
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
    const plan = new Plan();

    if (parameters.weeksToTrain < 12) {
      throw new Error('Minimum training duration is 12 weeks');
    }

    plan.trainings = new Array(parameters.weeksToTrain).fill(0);

    return plan
  }
}