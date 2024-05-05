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
  REST: 'REST',
  CROSS_TRAINING: 'CROSS_TRAINING',
  LONG_RUN: 'LONG_RUN',
  EASY_RUN: 'EASY_RUN',
  TEMPO_RUN: 'TEMPO_RUN',
  INTERVAL_RUN: 'INTERVAL_RUN',
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

      // day 1 is a rest or cross training day
      plan.trainings[i][0] = { type: WORKOUT_TYPES.REST_OR_CROSS_TRAINING };

      // day 2 is an easy run
      plan.trainings[i][1] = { type: WORKOUT_TYPES.EASY_RUN };

      // day 3 is an easy run
      plan.trainings[i][2] = { type: WORKOUT_TYPES.EASY_RUN };

      // day 4 is an easy run
      plan.trainings[i][3] = { type: WORKOUT_TYPES.EASY_RUN };

      // day 5 is a rest or cross training day
      plan.trainings[i][4] = { type: WORKOUT_TYPES.REST_OR_CROSS_TRAINING };

      // day 6 is an easy run
      plan.trainings[i][5] = { type: WORKOUT_TYPES.EASY_RUN };

      // day 7 is a long run
      plan.trainings[i][6] = { type: WORKOUT_TYPES.LONG_RUN };
    }

    return plan
  }
}