import {AchievementData} from "./AchievementData";
import {State} from "./State";

export class Achievement {
    readonly data: AchievementData;
    readonly unlocks: Achievement[];
    state: State;

    constructor(data: AchievementData, unlocks: Achievement[]) {
        this.data = data;
        this.unlocks = unlocks;
        this.state = State.LOCKED;
    }

    unlock() {
        this.state = State.UNLOCKED;
    }

    complete() {
        this.state = State.COMPLETED;
        this.unlocks.forEach((child: Achievement) => {
            child.state = State.UNLOCKED;
        });
    }

    convertToUnlocksGrid(): Map<number, Achievement[]> {
        let grid: Map<number, Achievement[]> = new Map();
        this.pushAchievementToGrid(this, 0, grid);
        return grid;
    }

    pushAchievementToGrid(achievement: Achievement, deepLevel: number, grid: Map<number, Achievement[]>) {
        // create level
        if (grid.get(deepLevel) === undefined) {
            grid.set(deepLevel, []);
        }
        // avoid duplicates
        if (grid.get(deepLevel).indexOf(achievement) === -1) {
            grid.get(deepLevel).push(achievement);
        }
        // proceed to sub-nodes
        achievement.unlocks.forEach((unlock) => {
            this.pushAchievementToGrid(unlock, deepLevel + 1, grid);
        })
    }
}
