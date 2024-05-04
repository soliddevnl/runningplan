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

export class PlannerConfiguration {
  minWeeks = 12;
  maxWeeks = 16;
}

export const WORKOUT_TYPES = {
  REST_OR_CROSS_TRAINING: 'REST_OR_CROSS_TRAINING',
  SPEED: 'SPEED',
  TEMPO: 'TEMPO',
  LONG_RUN: 'LONG_RUN',
  REST: 'REST',
  CROSS_TRAINING: 'CROSS_TRAINING'
}

export class Planner {
  config = new PlannerConfiguration();

  /**
   * @param {PlannerConfiguration} config
   */
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {PlanParameters} parameters
   */
  createPlan(parameters) {
    const plan = new Plan();

    if (parameters.weeksToTrain < this.config.minWeeks) {
      throw new Error('The minimum time to prepare is 12 weeks');
    }

    const planDuration = Math.min(parameters.weeksToTrain, this.config.maxWeeks);
    plan.trainings = new Array(planDuration).fill(0);

    for (let i = 0; i < planDuration; i++) {
      plan.trainings[i] = new Array(7).fill(0);
      plan.trainings[i][0] = { type: WORKOUT_TYPES.REST_OR_CROSS_TRAINING };
    }

    return plan
  }
}