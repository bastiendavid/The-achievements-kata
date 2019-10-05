import {Achievement} from "./Achievement";
import {State} from "./State";

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
        this.view.className = '';
        this.view.classList.add('achievement-card');
        switch (this.achievement.state) {
            case State.UNLOCKED:
                this.view.classList.add('achievement-card-unlocked');
                this.view.appendChild(this.createAchievementDescriptionDiv());
                this.view.appendChild(this.createAchievementCompletedActionButton());
                break;
            case State.LOCKED:
                this.view.classList.add('achievement-card-locked');
                this.view.appendChild(this.createAchievementLockedView());
                break;
            case State.COMPLETED:
                this.view.classList.add('achievement-card-completed');
                this.view.appendChild(this.createAchievementDescriptionDiv());
                this.view.appendChild(this.createAchievementCompletedActionButton());
                break;
        }
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

    private createAchievementLockedView(): HTMLElement {
        let lockedView = this.document.createElement('div');
        lockedView.innerText = '?';
        lockedView.classList.add('achievement-locked-view');
        return lockedView;
    }
}
