import {AchievementView} from "./AchievementView";
import {Achievement} from "./Achievement";
import {AchievementsTree} from "./AchievementsTree";

export class AchievementsView {

    display(document: Document, containerId: string) {
        const achievement = new AchievementsTree().getFirstAchievement();
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
