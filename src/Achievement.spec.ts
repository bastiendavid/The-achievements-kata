import {Achievement} from "./Achievement";
import {AchievementData} from "./AchievementData";
import {Categories} from "./Categories";
import {State} from "./State";
import {expect} from "chai";

describe("Achievement", () => {
    it("Default state is LOCKED", () => {
        // Given
        let achievement = new Achievement(new AchievementData("ACH_1", Categories.SIMPLIFY, "description"), []);
        // Then
        expect(achievement.state).to.equal(State.LOCKED);
    });

    it("State change to UNLOCKED when the achievement is unlocked", () => {
        // Given
        let achievement = new Achievement(new AchievementData("ACH_1", Categories.SIMPLIFY, "description"), []);
        // When
        achievement.unlock();
        // Then
        expect(achievement.state).to.equal(State.UNLOCKED);
    });

    it("Achievement state is set to COMPLETED and all unlocks achievements are set to state UNLOCKED when the achievement is completed", () => {
        // Given
        let childAchievement1 = new Achievement(new AchievementData("ACH_CHILD_1", Categories.SIMPLIFY, "ach child 1"), []);
        let childAchievement2 = new Achievement(new AchievementData("ACH_CHILD_2", Categories.SIMPLIFY, "ach child 2"), []);
        let achievement = new Achievement(new AchievementData("ACH_1", Categories.SIMPLIFY, "description"), [childAchievement1, childAchievement2]);

        // When
        achievement.complete();

        // Then
        expect(achievement.state).to.equal(State.COMPLETED);
        expect(childAchievement1.state).to.equal(State.UNLOCKED);
        expect(childAchievement2.state).to.equal(State.UNLOCKED);
    })
});
