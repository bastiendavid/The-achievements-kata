import {AnalyticsTracker} from "./AnalyticsTracker";
import {Achievement} from "./Achievement";
import {Categories} from "./Categories";

export class Achievements {

    private readonly document: Document;
    private readonly analyticsTracker: AnalyticsTracker;
    private achievementsCompleted: Achievement[] = [];
    private achievements: Achievement[] = [];

    constructor(document: Document, analyticsTracker: AnalyticsTracker) {
        this.document = document;
        this.analyticsTracker = analyticsTracker;
        this.achievements.push(new Achievement('IDE_RENAME_VARIABLE', Categories.TOOLS, 'Rename a variable with the IDE'));
        this.achievements.push(new Achievement('IDE_EXTRACT_VARIABLE', Categories.TOOLS, 'Extract a variable with the IDE'));
        this.achievements.push(new Achievement('IDE_INLINE_VARIABLE', Categories.TOOLS, 'Inline a variable with the IDE'));
        this.achievements.push(new Achievement('IDE_RENAME_METHOD', Categories.TOOLS, 'Rename a method/function with the IDE'));
        this.achievements.push(new Achievement('IDE_EXTRACT_METHOD', Categories.TOOLS, 'Extract a method with the IDE'));
        this.achievements.push(new Achievement('IDE_INLINE_METHOD', Categories.TOOLS, 'Inline a method/function with the IDE'));
        this.achievements.push(new Achievement('IDE_CHANGE_METHOD_SIGNATURE', Categories.TOOLS, 'Change a method/function signature with the IDE'));
        this.achievements.push(new Achievement('REMOVE_DUPLICATED_CODE', Categories.REMOVE, 'Remove duplicated code'));
        this.achievements.push(new Achievement('WRITE_TEST_AND_MAKE_PASS', Categories.TEST, 'Write a test and then write the code to make it pass'));
        this.achievements.push(new Achievement('GIT_RESET_HARD', Categories.REMOVE, 'Perform a command "git reset —hard"'));
        this.achievements.push(new Achievement('REMOVE_IF', Categories.REMOVE, 'Remove an if'));
        this.achievements.push(new Achievement('REMOVE_ELSE', Categories.REMOVE, 'Remove an else'));
        this.achievements.push(new Achievement('REPLACE_SWITCH_BY_MAP', Categories.SIMPLIFY, 'Replace a switch by a map'));
        this.achievements.push(new Achievement('REPLACE_SWITCH_OR_CONDITIONAL_BY_POLYMORPHISM', Categories.SIMPLIFY, 'Replace a switch, or any other conditional by polymorphism'));
        this.achievements.push(new Achievement('REFACTOR_THEN_COMMIT', Categories.REFACTORING, 'Perform a refactoring and then commit'));
        this.achievements.push(new Achievement('PREPARATORY_REFACTORING', Categories.REFACTORING, 'Perform a preparatory refactoring'));
        this.achievements.push(new Achievement('REMOVE_10_LINES_OF_CODE', Categories.REMOVE, 'Remove 10 lines of code in one commit'));
        this.achievements.push(new Achievement('REMOVE_20_LINES_OF_CODE', Categories.REMOVE, 'Remove 20 lines of code in one commit'));
        this.achievements.push(new Achievement('REMOVE_50_LINES_OF_CODE', Categories.REMOVE, 'Remove 50 lines of code in one commit'));
        this.achievements.push(new Achievement('REMOVE_100_LINES_OF_CODE', Categories.REMOVE, 'Remove 100 lines of code in one commit'));
        this.achievements.push(new Achievement('WRAP_PRIMITIVE', Categories.SIMPLIFY, 'Wrap a primitive'));
        this.achievements.push(new Achievement('WRAP_COLLECTION', Categories.SIMPLIFY, 'Wrap a collection'));
        this.achievements.push(new Achievement('IMPLEMENT_FAST_AND_REFACTOR', Categories.CRAZY, 'Implement a feature the fastest you can, and then refactor the code you produced'));
        this.achievements.push(new Achievement('GIT_REBASE_INTERACTIVE', Categories.TOOLS, 'Perform an interactive rebase with git'));
        this.achievements.push(new Achievement('GIT_AMEND', Categories.TOOLS, 'Amend a commit with git'));
        this.achievements.push(new Achievement('REFACTORING_PARALLEL_CHANGE', Categories.REFACTORING, 'Perform refactoring using parallel change'));
        this.achievements.push(new Achievement('REFACTORING_BRANCH_BY_ABSTRACTION', Categories.REFACTORING, 'Perform refactoring using a branch by abstraction'));
        this.achievements.push(new Achievement('REFACTORING_LIFT_UP_CONDITIONAL', Categories.REFACTORING, 'Perform refactoring using a lift up conditional refactoring'));
        this.achievements.push(new Achievement('REFACTORING_PEEL_AND_SLICE', Categories.REFACTORING, 'Perform refactoring using the peel and slice technique'));
        this.achievements.push(new Achievement('NO_IDE_WRITE_TEST_AND_MAKE_PASS', Categories.CRAZY, 'Write a test and make it pass without IDE (no syntax checking allowed in your text editor, and your tests should run outside of the IDE)'));
        this.achievements.push(new Achievement('WRITE_METHOD_WITHOUT_E', Categories.CRAZY, 'Write a method without using the letter "e"'));
        this.achievements.push(new Achievement('WRITE_METHOD_WITHOUT_A', Categories.CRAZY, 'Write a method without using the letter "a"'));
        this.achievements.push(new Achievement('COMMIT_EVERY_2_MINS_FOR_10_MINS', Categories.SMALL_STEPS, 'Commit every 2 mins, with all tests passing, for 10 mins'));
        this.achievements.push(new Achievement('SOLUTION_SEEKER', Categories.OUTSIDE_THE_BOX, 'Find at least 3 solutions before implementing one'));
        this.achievements.push(new Achievement('ASK_FOR_ADVICE', Categories.OUTSIDE_THE_BOX, 'Ask for advice / feedback to another pair'));
        this.achievements.push(new Achievement('STEAL_IDEA', Categories.OUTSIDE_THE_BOX, 'Steal an idea from another pair'));
        this.achievements.push(new Achievement('CHAIN_5_AUTOMATIC_REFACTORING', Categories.TOOLS, 'Perform 5 automatic refactorings in a row'));
        this.achievements.push(new Achievement('ALWAYS_GREEN_FOR_10_MINS', Categories.SMALL_STEPS, 'During 10 mins, don\'t let the code not compiling and the tests not passing for more than 30 seconds (may require some automation - provide the tool for that?)'));
        this.achievements.push(new Achievement('NO_MOUSE_FOR_10_MINS', Categories.TOOLS, 'Don\'t use the mouse for 10 mins'));
        this.achievements.push(new Achievement('15_COMMITS_IN_1_HOUR', Categories.SMALL_STEPS, 'Perform more than 15 commits within 1 hour (meaningless commits do not count ;))'));
        this.achievements.push(new Achievement('KEEP_CODING_FOR_10_MINS', Categories.CRAZY, 'For 10 minutes, don\'t spend more than 30 seconds in a row without coding'));
        this.achievements.push(new Achievement('NO_CODE_FOR_10_MINS', Categories.CRAZY, 'For 10 minutes, don\'t code at all'));
        this.achievements.push(new Achievement('NO_SITTING_FOR_10_MINS', Categories.CRAZY, 'For 10 minutes, don\'t sit'));
        this.achievements.push(new Achievement('METHOD_THAT_RHYMES', Categories.CRAZY, 'Write a method with code that rhymes'));
        this.achievements.push(new Achievement('NO_TESTS_FOR_10_MINS', Categories.CRAZY, 'For 10 minutes, don\'t write tests, and then write all the missing tests'));
        this.achievements.push(new Achievement('COMPLETE_KATA', Categories.CRAZY, 'Complete the kata'));
    }

    createAllAchievements() {
        this.achievements.forEach((achievement) => {
            this.writeAchievementToDOM(achievement)
        });
    }

    writeAchievementToDOM(achievement: Achievement) {
        const container = this.document.getElementById('achievements');
        container.appendChild(this.createAchievementInProgressDiv(achievement));
        container.appendChild(this.createAchievementCompleteDiv(achievement));
    }

    createAchievementInProgressDiv(achievement: Achievement) {
        let achievementDiv = this.document.createElement('div');
        achievementDiv.id = this.achievementInProgressId(achievement);
        achievementDiv.classList.add('achievement');
        achievementDiv.classList.add('achievement-in-progress');

        achievementDiv.appendChild(this.createAchievementDescriptionDiv(achievement));
        achievementDiv.appendChild(this.createAchievementCompletedButton(achievement));

        return achievementDiv;
    }

    createAchievementDescriptionDiv(achievement: Achievement) {
        let description = this.document.createElement('div');
        description.innerHTML = achievement.description;
        description.classList.add('achievement-description');
        return description;
    }

    createAchievementCompletedButton(achievement: Achievement) {
        let button = this.document.createElement('div');
        button.innerText = 'Done!';
        button.classList.add('achievement-in-progress-button');
        button.onclick = () => {
            const achievementInProgress = this.document.getElementById(this.achievementInProgressId(achievement));
            const achievementComplete = this.document.getElementById(this.achievementCompletedId(achievement));
            this.hideElement(achievementInProgress);
            this.showElement(achievementComplete);
            this.achievementsCompleted.push(achievement);
            this.analyticsTracker.achievementCompleted(achievement.id);
            this.updateTitle();
        };
        return button;
    }

    achievementCompletedId(achievement: Achievement) {
        return 'achievements-completed-' + achievement.id;
    }

    achievementInProgressId(achievement: Achievement) {
        return 'achievement-in-progress-' + achievement.id;
    }

    createAchievementCompleteDiv(achievement: Achievement) {
        let achievementDiv = this.document.createElement('div');
        achievementDiv.id = this.achievementCompletedId(achievement);
        achievementDiv.classList.add('achievement');
        achievementDiv.classList.add('achievement-completed');
        this.hideElement(achievementDiv);

        achievementDiv.appendChild(this.createAchievementCompletedImage());
        achievementDiv.appendChild(this.createAchievementDescriptionDiv(achievement));
        return achievementDiv;
    }

    createAchievementCompletedImage() {
        let image = this.document.createElement('img');
        image.setAttribute('src', 'img/cup.svg');
        image.classList.add('achievement-completed-image');
        return image;
    }

    hideElement(div: HTMLElement) {
        div.style.display = 'none';
    }

    showElement(div: HTMLElement) {
        div.style.display = 'flex';
    }

    updateTitleInARandomWay() {
        // For now, update title in a total random way.
        // A computation depending on categories of achievement completed would be really cool.
        const titles = [
            'Of The Null',
            'The Void',
            'The Clean Coder',
            'The Endless Refactorer',
            'The Tester',
            'The Baby',
            'The Champion',
            'The Cleaner'
        ];

        const title = titles[Math.floor(Math.random() * titles.length)];
        this.document.getElementById('player-title').textContent = 'Your title: ' + title;
    }

    updateTitle() {
        let title = this.computeTitle();
        this.document.getElementById('player-title').textContent = 'Your title: ' + title;
    }

    computeTitle() {
        let beginnersTitles = [
            'The Journeyman / The Journeywoman',
            'The 10x engineer',
            'The Explorer',
            'The Garbage Collector',
            'Master of the IDE',
            'The Refactorer',
            'The Great Constuctor',
            'The Tester',
            'The Champion',
            'The Great Destructor',
            'The Cleaner',
            'Morpheus',
            'Lord of the Shortcut',
            'Of the QWERTY Community',
            'Master of the 0 and of the 1',
            'Knight of the Keyboard',
            'The Bold',
            'The Undefined',
            '{pick your title}',
            'The Compiler',
            'Trinity',
            'The Coder',
            'The Crafter',
            'The Compiler',
            'The Debugger',
            'Master of the Braces',
            'Great Destroyer of Bugs',
            'Neo'
        ];
        return beginnersTitles[Math.min(this.achievementsCompleted.length - 1, beginnersTitles.length - 1)];
    }
}
