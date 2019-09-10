import {AchievementView} from "./AchievementView";
import {Achievement} from "./Achievement";
import {AchievementsData} from "./AchievementsData";

export class AchievementsView {

    display(document: Document, inElement: string) {
        let achievement = new Achievement(new AchievementsData().data[0], []);
        let view = new AchievementView(document, achievement);
        document.getElementById(inElement).appendChild(view.getView());
    }
}
