import {describe, expect, it} from "vitest";
import {Plan, Planner} from "./planner";

describe("Planner", () => {
  const newPlanner = () => new Planner();

  it("should create a plan for the given weeks to train", () => {
    const planner = newPlanner();
    const plan = planner.createPlan({ weeksToTrain: 12 });

    expect(plan).toBeInstanceOf(Plan);
    expect(plan.duration).toBe(12);
  })

  it('should not create a plan when there is less than 12 weeks to train', () => {
    const planner = newPlanner();
    expect(() => planner.createPlan({ weeksToTrain: 11 })).toThrowError('Minimum training duration is 12 weeks');
  })
})