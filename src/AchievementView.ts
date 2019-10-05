import {Achievement} from "./Achievement";
import {State} from "./State";
import {AchievementObserver} from "./AchievementObserver";
import {AnalyticsTracker} from "./AnalyticsTracker";

export class AchievementView implements AchievementObserver {
    private achievement: Achievement;
    private readonly document: Document;
    private readonly analyticsTracker: AnalyticsTracker;
    private view: HTMLElement;

    constructor(document: Document, analyticsTracker: AnalyticsTracker, achievement: Achievement) {
        this.document = document;
        this.analyticsTracker = analyticsTracker;
        this.achievement = achievement;
        this.achievement.register(this);
        this.initView();
    }

    getView(): HTMLElement {
        return this.view;
    }

    private initView() {
        this.view = this.document.createElement("div");
        this.updateView();
    }

    onAchievementStatusChange(): void {
        this.updateView();
    }

    private updateView() {
        while (this.view.firstChild) {
            this.view.removeChild(this.view.firstChild);
        }
        this.view.className = '';
        this.view.classList.add('achievement-card');

        switch (this.achievement.state) {
            case State.UNLOCKED:
                this.displayAsUnlocked();
                break;
            case State.LOCKED:
                this.displayAsLocked();
                break;
            case State.COMPLETED:
                this.displayAsCompleted();
                break;
        }
    }

    private displayAsUnlocked() {
        this.view.classList.add('achievement-card-unlocked');
        this.view.appendChild(this.createAchievementDescriptionDiv());
        this.view.appendChild(this.createAchievementCompletedActionButton());
    }

    private displayAsLocked() {
        this.view.classList.add('achievement-card-locked');
        this.view.appendChild(this.createAchievementLockedView());
    }

    private displayAsCompleted() {
        this.view.classList.add('achievement-card-completed');
        this.view.appendChild(this.createAchievementDescriptionDiv());
        this.view.appendChild(this.createAchievementCompletedActionButton());
    }

    private createAchievementDescriptionDiv(): HTMLElement {
        let descriptionContainer = this.document.createElement('div');
        descriptionContainer.classList.add('achievement-card-description');

        let descriptionText = this.document.createElement('div');
        descriptionText.innerText = this.achievement.data.description;
        descriptionText.classList.add('achievement-card-description-text');
        descriptionContainer.appendChild(descriptionText);

        return descriptionContainer;
    }

    private createAchievementCompletedActionButton(): HTMLElement {
        let button = this.document.createElement('div');
        button.innerText = 'Next';
        button.classList.add('achievement-completed-action-button');
        button.onclick = () => {
            this.achievementCompleted();
        };
        return button;
    }

    private achievementCompleted() {
        this.achievement.complete();
        this.analyticsTracker.achievementCompleted(this.achievement.data.id);
        this.updateView();
    }

    private createAchievementLockedView(): HTMLElement {
        let lockedView = this.document.createElement('div');
        lockedView.innerText = '?';
        lockedView.classList.add('achievement-locked-view');
        return lockedView;
    }
}
