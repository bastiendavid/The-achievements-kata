const Categories = {
    REFACTORING: 'REFACTORING',
    REMOVE: 'REMOVE',
    TEST: 'TEST',
    SIMPLIFY: 'SIMPLIFY',
    TOOLS: 'TOOLS',
    SMALL_STEPS: 'SMALL_STEPS',
    OUTSIDE_THE_BOX: 'OUTSIDE_THE_BOX',
    CRAZY: 'CRAZY'
};


class Achievement {

    constructor(id, category, description) {
        this.id = id;
        this.category = category;
        this.description = description;
    }
}

class Achievements {

    constructor(document) {
        this.document = document;
        this.achievements = [];
        this.achievements.push(new Achievement('1', Categories.TOOLS, 'Extract a method with the IDE'));
        this.achievements.push(new Achievement('2', Categories.TOOLS, 'Rename a method/function with IDE'));
        this.achievements.push(new Achievement('3', Categories.TOOLS, 'Rename a variable with IDE'));
        this.achievements.push(new Achievement('4', Categories.REMOVE, 'Remove duplicated code'));
        this.achievements.push(new Achievement('5', Categories.TEST, 'Write a test and then write the code to make it pass'));
        this.achievements.push(new Achievement('6', Categories.REMOVE, 'Perform a command "git reset —hard"'));
        this.achievements.push(new Achievement('7', Categories.REMOVE, 'Remove an if'));
        this.achievements.push(new Achievement('8', Categories.REMOVE, 'Remove an else'));
        this.achievements.push(new Achievement('9', Categories.SIMPLIFY, 'Replace a switch by a map'));
        this.achievements.push(new Achievement('10', Categories.SIMPLIFY, 'Replace a switch, or any other conditional by polymorphism'));
        this.achievements.push(new Achievement('11', Categories.REFACTORING, 'Perform a refactoring and then commit'));
        this.achievements.push(new Achievement('12', Categories.REFACTORING, 'Perform a preparatory refactoring'));
        this.achievements.push(new Achievement('13', Categories.REMOVE, 'Remove 10 lines of code in one commit'));
        this.achievements.push(new Achievement('14', Categories.REMOVE, 'Remove 20 lines of code in one commit'));
        this.achievements.push(new Achievement('15', Categories.REMOVE, 'Remove 50 lines of code in one commit'));
        this.achievements.push(new Achievement('16', Categories.REMOVE, 'Remove 100 lines of code in one commit'));
        this.achievements.push(new Achievement('17', Categories.SIMPLIFY, 'Wrap a primitive'));
        this.achievements.push(new Achievement('18', Categories.SIMPLIFY, 'Wrap a collection'));
        this.achievements.push(new Achievement('19', Categories.CRAZY, 'Implement a feature the fastest you can, and then refactor the code you produced'));
        this.achievements.push(new Achievement('20', Categories.TOOLS, 'Perform an interactive rebase with git'));
        this.achievements.push(new Achievement('21', Categories.TOOLS, 'Amend a commit with git'));
        this.achievements.push(new Achievement('22', Categories.REFACTORING, 'Perform refactoring using parallel change'));
        this.achievements.push(new Achievement('23', Categories.REFACTORING, 'Perform refactoring using a branch by abstraction'));
        this.achievements.push(new Achievement('24', Categories.REFACTORING, 'Perform refactoring using a lift up conditional refactoring'));
        this.achievements.push(new Achievement('25', Categories.REFACTORING, 'Perform refactoring using the peel and slice technique'));
        this.achievements.push(new Achievement('26', Categories.CRAZY, 'Write a test and make it pass without IDE (no syntax checking allowed in your text editor, and your tests should run outside of the IDE)'));
        this.achievements.push(new Achievement('27', Categories.CRAZY, 'Write a method without using the letter "e"'));
        this.achievements.push(new Achievement('28', Categories.CRAZY, 'Write a method without using the letter "a"'));
        this.achievements.push(new Achievement('29', Categories.SMALL_STEPS, 'Commit every 2 mins, with all tests passing, for 10 mins'));
        this.achievements.push(new Achievement('30', Categories.OUTSIDE_THE_BOX, 'Find at least 3 solutions before implementing one'));
        this.achievements.push(new Achievement('31', Categories.OUTSIDE_THE_BOX, 'Ask for advice / feedback to another pair'));
        this.achievements.push(new Achievement('32', Categories.TOOLS, 'Perform 5 automatic refactorings in a row'));
        this.achievements.push(new Achievement('33', Categories.SMALL_STEPS, 'During 10 mins, don\'t let the code not compiling and the tests not passing for more than 30 seconds (may require some automation - provide the tool for that?)'));
        this.achievements.push(new Achievement('34', Categories.TOOLS, 'Don\'t use the mouse for 10 mins'));
        this.achievements.push(new Achievement('35', Categories.SMALL_STEPS, 'Perform more than 15 commits within 1 hour (meaningless commits do not count ;))'));
        this.achievements.push(new Achievement('36', Categories.CRAZY, 'For 10 minutes, don\'t spend more than 30 seconds in a row without coding'));
        this.achievements.push(new Achievement('37', Categories.CRAZY, 'For 10 minutes, don\'t code at all'));
        this.achievements.push(new Achievement('38', Categories.CRAZY, 'For 10 minutes, don\'t sit'));
        this.achievements.push(new Achievement('39', Categories.CRAZY, 'Write a method with code that rhymes'));
        this.achievements.push(new Achievement('40', Categories.CRAZY, 'For 10 minutes, don\'t write tests, and then write all the missing tests'));
        this.achievements.push(new Achievement('41', Categories.CRAZY, 'Complete the kata'));
    }

    createAllAchievements() {
        this.achievements.forEach((achievement) => {
            this.writeAchievementToDOM(achievement)
        });
    }

    writeAchievementToDOM(achievement) {
        const container = this.document.getElementById('achievements');
        container.appendChild(this.createAchievementInProgressDiv(achievement));
        container.appendChild(this.createAchievementCompleteDiv(achievement));
    }

    createAchievementInProgressDiv(achievement) {
        let achievementDiv = this.document.createElement('div');
        achievementDiv.id = this.achievementInProgressId(achievement);
        achievementDiv.classList.add('achievement');
        achievementDiv.classList.add('achievement-in-progress');
        achievementDiv.visibility = 'visible';

        achievementDiv.appendChild(this.createAchievementDescriptionDiv(achievement));
        achievementDiv.appendChild(this.createAchievementCompletedButton(achievement));

        return achievementDiv;
    }

    createAchievementDescriptionDiv(achievement) {
        let description = this.document.createElement('div');
        description.innerHTML = achievement.description;
        description.classList.add('achievement-description');
        return description;
    }

    createAchievementCompletedButton(achievement) {
        let button = this.document.createElement('div');
        button.innerText = 'Done!';
        button.classList.add('achievement-in-progress-button');
        button.onclick = () => {
            const achievementInProgress = this.document.getElementById(this.achievementInProgressId(achievement));
            const achievementComplete = this.document.getElementById(this.achievementCompletedId(achievement));
            this.hideElement(achievementInProgress);
            this.showElement(achievementComplete);
            this.updateTitleInARandomWay();
        };
        return button;
    }

    achievementCompletedId(achievement) {
        return 'achievements-completed-' + achievement.id;
    }

    achievementInProgressId(achievement) {
        return 'achievement-in-progress-' + achievement.id;
    }

    createAchievementCompleteDiv(achievement) {
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

    hideElement(div) {
        div.style.display = 'none';
    }

    showElement(div) {
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
}
