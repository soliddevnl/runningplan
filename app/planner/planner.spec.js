import {describe, expect, it} from "vitest";
import {Plan, Planner, PlannerConfiguration, PlanParameters, WORKOUT_TYPES} from "./planner";

describe("Planner", () => {
  const newPlanner = () => new Planner(new PlannerConfiguration());

  it("should create a plan for the given weeks to train", () => {
    const planner = newPlanner();
    const plan = planner.createPlan({ weeksToTrain: 12 });

    expect(plan).toBeInstanceOf(Plan);
    expect(plan.duration).toBe(12);
  })

  it('should not create a plan when there is less than 12 weeks to train', () => {
    const planner = newPlanner();
    expect(() => planner.createPlan({ weeksToTrain: 11 })).toThrowError(/12 weeks/);
  })

  it('should create a plan of maximum 16 weeks', () => {
    const planner = newPlanner();
    const plan = planner.createPlan({ weeksToTrain: 17 });

    expect(plan.duration).toBe(16);
  })

  it('should plan a rest day or cross training day at the start of the week', () => {
    const config = new PlannerConfiguration();
    config.minWeeks = 1;
    config.maxWeeks = 1;

    const planner = new Planner(config);
    const plan = planner.createPlan(new PlanParameters({ weeksToTrain: 1 }));

    expect(plan.trainings[0][0].type).toBe(WORKOUT_TYPES.REST_OR_CROSS_TRAINING);
  })

  it('should plan a rest day or cross training day at the start of each week', () => {
    const config = new PlannerConfiguration();
    config.minWeeks = 1;
    config.maxWeeks = 2;

    const planner = new Planner(config);
    const plan = planner.createPlan(new PlanParameters({ weeksToTrain: 10 }));

    expect(plan.trainings[0][0].type).toBe(WORKOUT_TYPES.REST_OR_CROSS_TRAINING);
    expect(plan.trainings[1][0].type).toBe(WORKOUT_TYPES.REST_OR_CROSS_TRAINING);
  })
})