import {AchievementData} from "./AchievementData";
import {Categories} from "./Categories";

export class AchievementsData {
    data: AchievementData[] = [];

    constructor() {
        this.data.push(new AchievementData('IDE_RENAME_VARIABLE', Categories.TOOLS, 'Rename a variable with the IDE'));
        this.data.push(new AchievementData('IDE_EXTRACT_VARIABLE', Categories.TOOLS, 'Extract a variable with the IDE'));
        this.data.push(new AchievementData('IDE_INLINE_VARIABLE', Categories.TOOLS, 'Inline a variable with the IDE'));
        this.data.push(new AchievementData('IDE_RENAME_METHOD', Categories.TOOLS, 'Rename a method/function with the IDE'));
        this.data.push(new AchievementData('IDE_EXTRACT_METHOD', Categories.TOOLS, 'Extract a method with the IDE'));
        this.data.push(new AchievementData('IDE_INLINE_METHOD', Categories.TOOLS, 'Inline a method/function with the IDE'));
        this.data.push(new AchievementData('IDE_CHANGE_METHOD_SIGNATURE', Categories.TOOLS, 'Change a method/function signature with the IDE'));
        this.data.push(new AchievementData('REMOVE_DUPLICATED_CODE', Categories.REMOVE, 'Remove duplicated code'));
        this.data.push(new AchievementData('WRITE_TEST_AND_MAKE_PASS', Categories.TEST, 'Write a test and then write the code to make it pass'));
        this.data.push(new AchievementData('GIT_RESET_HARD', Categories.REMOVE, 'Perform a command "git reset —hard"'));
        this.data.push(new AchievementData('REMOVE_IF', Categories.REMOVE, 'Remove an if'));
        this.data.push(new AchievementData('REMOVE_ELSE', Categories.REMOVE, 'Remove an else'));
        this.data.push(new AchievementData('REPLACE_SWITCH_BY_MAP', Categories.SIMPLIFY, 'Replace a switch by a map'));
        this.data.push(new AchievementData('REPLACE_SWITCH_OR_CONDITIONAL_BY_POLYMORPHISM', Categories.SIMPLIFY, 'Replace a switch, or any other conditional by polymorphism'));
        this.data.push(new AchievementData('REFACTOR_THEN_COMMIT', Categories.REFACTORING, 'Perform a refactoring and then commit'));
        this.data.push(new AchievementData('PREPARATORY_REFACTORING', Categories.REFACTORING, 'Perform a preparatory refactoring'));
        this.data.push(new AchievementData('REMOVE_10_LINES_OF_CODE', Categories.REMOVE, 'Remove 10 lines of code in one commit'));
        this.data.push(new AchievementData('REMOVE_20_LINES_OF_CODE', Categories.REMOVE, 'Remove 20 lines of code in one commit'));
        this.data.push(new AchievementData('REMOVE_50_LINES_OF_CODE', Categories.REMOVE, 'Remove 50 lines of code in one commit'));
        this.data.push(new AchievementData('REMOVE_100_LINES_OF_CODE', Categories.REMOVE, 'Remove 100 lines of code in one commit'));
        this.data.push(new AchievementData('WRAP_PRIMITIVE', Categories.SIMPLIFY, 'Wrap a primitive'));
        this.data.push(new AchievementData('WRAP_COLLECTION', Categories.SIMPLIFY, 'Wrap a collection'));
        this.data.push(new AchievementData('IMPLEMENT_FAST_AND_REFACTOR', Categories.CRAZY, 'Implement a feature the fastest you can, and then refactor the code you produced'));
        this.data.push(new AchievementData('GIT_REBASE_INTERACTIVE', Categories.TOOLS, 'Perform an interactive rebase with git'));
        this.data.push(new AchievementData('GIT_AMEND', Categories.TOOLS, 'Amend a commit with git'));
        this.data.push(new AchievementData('REFACTORING_PARALLEL_CHANGE', Categories.REFACTORING, 'Perform refactoring using parallel change'));
        this.data.push(new AchievementData('REFACTORING_BRANCH_BY_ABSTRACTION', Categories.REFACTORING, 'Perform refactoring using a branch by abstraction'));
        this.data.push(new AchievementData('REFACTORING_LIFT_UP_CONDITIONAL', Categories.REFACTORING, 'Perform refactoring using a lift up conditional refactoring'));
        this.data.push(new AchievementData('REFACTORING_PEEL_AND_SLICE', Categories.REFACTORING, 'Perform refactoring using the peel and slice technique'));
        this.data.push(new AchievementData('NO_IDE_WRITE_TEST_AND_MAKE_PASS', Categories.CRAZY, 'Write a test and make it pass without IDE (no syntax checking allowed in your text editor, and your tests should run outside of the IDE)'));
        this.data.push(new AchievementData('WRITE_METHOD_WITHOUT_E', Categories.CRAZY, 'Write a method without using the letter "e"'));
        this.data.push(new AchievementData('WRITE_METHOD_WITHOUT_A', Categories.CRAZY, 'Write a method without using the letter "a"'));
        this.data.push(new AchievementData('COMMIT_EVERY_2_MINS_FOR_10_MINS', Categories.SMALL_STEPS, 'Commit every 2 mins, with all tests passing, for 10 mins'));
        this.data.push(new AchievementData('SOLUTION_SEEKER', Categories.OUTSIDE_THE_BOX, 'Find at least 3 solutions before implementing one'));
        this.data.push(new AchievementData('ASK_FOR_ADVICE', Categories.OUTSIDE_THE_BOX, 'Ask for advice / feedback to another pair'));
        this.data.push(new AchievementData('STEAL_IDEA', Categories.OUTSIDE_THE_BOX, 'Steal an idea from another pair'));
        this.data.push(new AchievementData('CHAIN_5_AUTOMATIC_REFACTORING', Categories.TOOLS, 'Perform 5 automatic refactorings in a row'));
        this.data.push(new AchievementData('ALWAYS_GREEN_FOR_10_MINS', Categories.SMALL_STEPS, 'During 10 mins, don\'t let the code not compiling and the tests not passing for more than 30 seconds (may require some automation - provide the tool for that?)'));
        this.data.push(new AchievementData('NO_MOUSE_FOR_10_MINS', Categories.TOOLS, 'Don\'t use the mouse for 10 mins'));
        this.data.push(new AchievementData('15_COMMITS_IN_1_HOUR', Categories.SMALL_STEPS, 'Perform more than 15 commits within 1 hour (meaningless commits do not count ;))'));
        this.data.push(new AchievementData('KEEP_CODING_FOR_10_MINS', Categories.CRAZY, 'For 10 minutes, don\'t spend more than 30 seconds in a row without coding'));
        this.data.push(new AchievementData('NO_CODE_FOR_10_MINS', Categories.CRAZY, 'For 10 minutes, don\'t code at all'));
        this.data.push(new AchievementData('NO_SITTING_FOR_10_MINS', Categories.CRAZY, 'For 10 minutes, don\'t sit'));
        this.data.push(new AchievementData('METHOD_THAT_RHYMES', Categories.CRAZY, 'Write a method with code that rhymes'));
        this.data.push(new AchievementData('NO_TESTS_FOR_10_MINS', Categories.CRAZY, 'For 10 minutes, don\'t write tests, and then write all the missing tests'));
        this.data.push(new AchievementData('COMPLETE_KATA', Categories.CRAZY, 'Complete the kata'));
    }

}
