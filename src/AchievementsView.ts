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
        achievement.unlock();

        const graphView = this.createGraphView(document);

        const gridOfAchievements: Map<number, Achievement[]> = achievement.convertToUnlocksGrid();
        gridOfAchievements.forEach((achievements: Achievement[]) => {
            const graphRow = this.createGraphRow(document);
            graphView.appendChild(graphRow);
            achievements.forEach((achievement) => {
                this.addAchievementToGraphRow(document, graphRow, achievement);
            });
        });

        document.getElementById(containerId).appendChild(graphView);
    }


    private createGraphView(document: Document): HTMLElement {
        let graphView = document.createElement('div');
        graphView.classList.add('achievements-graph');
        return graphView;
    }

    private createGraphRow(document: Document): HTMLElement {
        let graphView = document.createElement('div');
        graphView.classList.add('achievements-graph-row');
        return graphView;
    }

    private addAchievementToGraphRow(document: Document, graphRow: HTMLElement, achievement: Achievement) {
        let view = new AchievementView(document, achievement);
        graphRow.appendChild(view.getView());
    }
}
