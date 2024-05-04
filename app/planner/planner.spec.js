import {describe, it, expect} from "vitest";
import {Plan, Planner} from "./planner";

describe("Planner", () => {
  const newPlanner = () => new Planner();

  it("should create a plan for the given weeks to train", () => {
    const planner = newPlanner();
    const plan = planner.createPlan({ weeksToTrain: 12 });

    expect(plan).toBeInstanceOf(Plan);
    expect(plan.duration).toBe(12);
  })
})