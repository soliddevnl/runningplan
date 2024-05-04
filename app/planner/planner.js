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
  minimumPreparationWeeks = 12;

  /**
   * @param {PlanParameters} parameters
   */
  createPlan(parameters) {
    const plan = new Plan();

    if (parameters.weeksToTrain < this.minimumPreparationWeeks) {
      throw new Error('The minimum time to prepare is 12 weeks');
    }

    plan.trainings = new Array(parameters.weeksToTrain).fill(0);

    return plan
  }
}