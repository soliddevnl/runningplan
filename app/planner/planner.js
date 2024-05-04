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
  minWeeks = 12;
  maxWeeks = 16;

  /**
   * @param {PlanParameters} parameters
   */
  createPlan(parameters) {
    const plan = new Plan();

    if (parameters.weeksToTrain < this.minWeeks) {
      throw new Error('The minimum time to prepare is 12 weeks');
    }

    const planDuration = Math.min(parameters.weeksToTrain, this.maxWeeks);
    plan.trainings = new Array(planDuration).fill(0);

    return plan
  }
}