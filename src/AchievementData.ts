import {Categories} from "./Categories";

export class AchievementData {
    readonly id: string;
    readonly category: Categories;
    readonly description: string;

    constructor(id: string, category: Categories, description: string) {
        this.id = id;
        this.category = category;
        this.description = description;
    }
}
