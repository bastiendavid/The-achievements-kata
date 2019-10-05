import {Achievement} from "./Achievement";
import {AchievementData} from "./AchievementData";
import {Categories} from "./Categories";
import {State} from "./State";
import {expect} from "chai";
import {AchievementObserver} from "./AchievementObserver";

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
    });

    describe("Convert an achievement to a grid of achievements, each line being the next unlocks.", () => {

        function generateGenericAchievementData(id: string): AchievementData {
            let randomId = Math.random().toString(36).substring(2, 15);
            let randomDescription = Math.random().toString(36).substring(2, 15);
            return new AchievementData(id, Categories.SIMPLIFY, randomDescription);
        }

        it("Converts achievements: a->b->c into [[a][b][c]]", () => {
            // Given
            let c = new Achievement(generateGenericAchievementData("c"), []);
            let b = new Achievement(generateGenericAchievementData("b"), [c]);
            let a = new Achievement(generateGenericAchievementData("a"), [b]);

            // When
            let grid = a.convertToUnlocksGrid();

            // Then
            const expectedGrid = new Map();
            expectedGrid.set(0, [a]);
            expectedGrid.set(1, [b]);
            expectedGrid.set(2, [c]);
            expect(grid).to.deep.equal(expectedGrid);
        });

        it("Converts achievements: a->(b, c), b->(d,e), c->f into [[a][b, c][d, e, f]]", () => {
            // Given
            let f = new Achievement(generateGenericAchievementData("f"), []);
            let e = new Achievement(generateGenericAchievementData("e"), []);
            let d = new Achievement(generateGenericAchievementData("d"), []);
            let c = new Achievement(generateGenericAchievementData("c"), [f]);
            let b = new Achievement(generateGenericAchievementData("b"), [d, e]);
            let a = new Achievement(generateGenericAchievementData("a"), [b, c]);

            // When
            let grid = a.convertToUnlocksGrid();

            // Then
            const expectedGrid = new Map();
            expectedGrid.set(0, [a]);
            expectedGrid.set(1, [b, c]);
            expectedGrid.set(2, [d, e, f]);
            expect(grid).to.deep.equal(expectedGrid);
        });

        it("Converts achievements: a->(b, c), b->(d,e), c->e into [[a][b, c][d, e]]", () => {
            // Given
            let e = new Achievement(generateGenericAchievementData("e"), []);
            let d = new Achievement(generateGenericAchievementData("d"), []);
            let c = new Achievement(generateGenericAchievementData("c"), [e]);
            let b = new Achievement(generateGenericAchievementData("b"), [d, e]);
            let a = new Achievement(generateGenericAchievementData("a"), [b, c]);

            // When
            let grid = a.convertToUnlocksGrid();

            // Then
            const expectedGrid = new Map();
            expectedGrid.set(0, [a]);
            expectedGrid.set(1, [b, c]);
            expectedGrid.set(2, [d, e]);
            expect(grid).to.deep.equal(expectedGrid);
        });
    });

    describe("notifies its observer if has one", () => {

        class FakeAchievementObserver implements AchievementObserver {
            public statusChanged: boolean = false;

            onAchievementStatusChange(): void {
                this.statusChanged = true;
            }
        }

        it("when is unlocked", () => {
            // Given
            let achievement = new Achievement(new AchievementData("ACH_1", Categories.SIMPLIFY, "description"), []);
            let observer = new FakeAchievementObserver();
            achievement.register(observer);

            // When
            achievement.unlock();

            // Then
            expect(observer.statusChanged).to.eq(true);
        });

        it("when is completed", () => {
            // Given
            let achievement = new Achievement(new AchievementData("ACH_1", Categories.SIMPLIFY, "description"), []);
            let observer = new FakeAchievementObserver();
            achievement.register(observer);

            // When
            achievement.complete();

            // Then
            expect(observer.statusChanged).to.eq(true);
        });
    });
});
