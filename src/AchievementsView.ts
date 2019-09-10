import {AchievementView} from "./AchievementView";
import {Achievement} from "./Achievement";
import {AchievementsData} from "./AchievementsData";

export class AchievementsView {

    display(document: Document, containerId: string) {
        let achievement = new Achievement(new AchievementsData().data[0], []);
        let achievement1 = new Achievement(new AchievementsData().data[1], []);
        let achievement2 = new Achievement(new AchievementsData().data[2], []);
        let achievement3 = new Achievement(new AchievementsData().data[3], []);
        achievement.unlocks.push(achievement1, achievement2, achievement3);


        let view = new AchievementView(document, achievement);
        document.getElementById(containerId).appendChild(view.getView());
    }
}
