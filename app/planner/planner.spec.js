import {describe, expect, it} from "vitest";
import {Plan, Planner, PlannerConfiguration} from "./planner";

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
})