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
}
