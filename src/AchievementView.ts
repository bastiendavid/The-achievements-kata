import {Achievement} from "./Achievement";

export class AchievementView {
    private achievement: Achievement;
    private document: Document;
    private view: HTMLElement;

    constructor(document: Document, achievement: Achievement) {
        this.document = document;
        this.achievement = achievement;
        this.updateView();
    }

    private updateView() {
        this.view = this.document.createElement("div");
        this.view.classList.add('achievement-card');
        this.view.appendChild(this.createAchievementDescriptionDiv())
        this.view.appendChild(this.createAchievementCompletedActionButton());
    }

    private createAchievementDescriptionDiv(): HTMLElement {
        let description = this.document.createElement('div');
        description.innerText = this.achievement.data.description;
        description.classList.add('achievement-card-description');
        return description;
    }

    private createAchievementCompletedActionButton(): HTMLElement {
        let button = this.document.createElement('div');
        button.innerText = 'Next';
        button.classList.add('achievement-completed-action-button');
        return button;
    }

    getView(): HTMLElement {
        return this.view;
    }
}
