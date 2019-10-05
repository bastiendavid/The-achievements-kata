import {AchievementsData} from "./AchievementsData";
import {Achievement} from "./Achievement";

export class AchievementsTree {

    private readonly firstAchievement: Achievement;

    constructor() {
        this.firstAchievement = this.buildTreeFromData();
    }

    getFirstAchievement() {
        return this.firstAchievement;
    }

    private buildTreeFromData(): Achievement {
        const achievements = this.buildAchievementsMap();
        this.setupUnlockDependencies(achievements);
        return achievements.get('IDE_RENAME_VARIABLE');
    }

    private buildAchievementsMap(): Map<string, Achievement> {
        const data = new AchievementsData();
        const achievements = new Map<string, Achievement>();
        achievements.set('IDE_RENAME_VARIABLE', new Achievement(data.for('IDE_RENAME_VARIABLE'), []));
        achievements.set('IDE_EXTRACT_VARIABLE', new Achievement(data.for('IDE_EXTRACT_VARIABLE'), []));
        achievements.set('IDE_INLINE_VARIABLE', new Achievement(data.for('IDE_INLINE_VARIABLE'), []));
        achievements.set('IDE_RENAME_METHOD', new Achievement(data.for('IDE_RENAME_METHOD'), []));
        achievements.set('IDE_EXTRACT_METHOD', new Achievement(data.for('IDE_EXTRACT_METHOD'), []));
        achievements.set('IDE_INLINE_METHOD', new Achievement(data.for('IDE_INLINE_METHOD'), []));
        achievements.set('IDE_CHANGE_METHOD_SIGNATURE', new Achievement(data.for('IDE_CHANGE_METHOD_SIGNATURE'), []));
        achievements.set('REMOVE_DUPLICATED_CODE', new Achievement(data.for('REMOVE_DUPLICATED_CODE'), []));
        achievements.set('WRITE_TEST_AND_MAKE_PASS', new Achievement(data.for('WRITE_TEST_AND_MAKE_PASS'), []));
        achievements.set('GIT_RESET_HARD', new Achievement(data.for('GIT_RESET_HARD'), []));
        achievements.set('REMOVE_IF', new Achievement(data.for('REMOVE_IF'), []));
        achievements.set('REMOVE_ELSE', new Achievement(data.for('REMOVE_ELSE'), []));
        achievements.set('REPLACE_SWITCH_BY_MAP', new Achievement(data.for('REPLACE_SWITCH_BY_MAP'), []));
        achievements.set('REPLACE_SWITCH_OR_CONDITIONAL_BY_POLYMORPHISM', new Achievement(data.for('REPLACE_SWITCH_OR_CONDITIONAL_BY_POLYMORPHISM'), []));
        achievements.set('REFACTOR_THEN_COMMIT', new Achievement(data.for('REFACTOR_THEN_COMMIT'), []));
        achievements.set('PREPARATORY_REFACTORING', new Achievement(data.for('PREPARATORY_REFACTORING'), []));
        achievements.set('REMOVE_10_LINES_OF_CODE', new Achievement(data.for('REMOVE_10_LINES_OF_CODE'), []));
        achievements.set('REMOVE_20_LINES_OF_CODE', new Achievement(data.for('REMOVE_20_LINES_OF_CODE'), []));
        achievements.set('REMOVE_50_LINES_OF_CODE', new Achievement(data.for('REMOVE_50_LINES_OF_CODE'), []));
        achievements.set('REMOVE_100_LINES_OF_CODE', new Achievement(data.for('REMOVE_100_LINES_OF_CODE'), []));
        achievements.set('WRAP_PRIMITIVE', new Achievement(data.for('WRAP_PRIMITIVE'), []));
        achievements.set('WRAP_COLLECTION', new Achievement(data.for('WRAP_COLLECTION'), []));
        achievements.set('IMPLEMENT_FAST_AND_REFACTOR', new Achievement(data.for('IMPLEMENT_FAST_AND_REFACTOR'), []));
        achievements.set('GIT_REBASE_INTERACTIVE', new Achievement(data.for('GIT_REBASE_INTERACTIVE'), []));
        achievements.set('GIT_AMEND', new Achievement(data.for('GIT_AMEND'), []));
        achievements.set('REFACTORING_PARALLEL_CHANGE', new Achievement(data.for('REFACTORING_PARALLEL_CHANGE'), []));
        achievements.set('REFACTORING_BRANCH_BY_ABSTRACTION', new Achievement(data.for('REFACTORING_BRANCH_BY_ABSTRACTION'), []));
        achievements.set('REFACTORING_LIFT_UP_CONDITIONAL', new Achievement(data.for('REFACTORING_LIFT_UP_CONDITIONAL'), []));
        achievements.set('REFACTORING_PEEL_AND_SLICE', new Achievement(data.for('REFACTORING_PEEL_AND_SLICE'), []));
        achievements.set('NO_IDE_WRITE_TEST_AND_MAKE_PASS', new Achievement(data.for('NO_IDE_WRITE_TEST_AND_MAKE_PASS'), []));
        achievements.set('WRITE_METHOD_WITHOUT_E', new Achievement(data.for('WRITE_METHOD_WITHOUT_E'), []));
        achievements.set('WRITE_METHOD_WITHOUT_A', new Achievement(data.for('WRITE_METHOD_WITHOUT_A'), []));
        achievements.set('COMMIT_EVERY_2_MINS_FOR_10_MINS', new Achievement(data.for('COMMIT_EVERY_2_MINS_FOR_10_MINS'), []));
        achievements.set('SOLUTION_SEEKER', new Achievement(data.for('SOLUTION_SEEKER'), []));
        achievements.set('ASK_FOR_ADVICE', new Achievement(data.for('ASK_FOR_ADVICE'), []));
        achievements.set('STEAL_IDEA', new Achievement(data.for('STEAL_IDEA'), []));
        achievements.set('CHAIN_5_AUTOMATIC_REFACTORING', new Achievement(data.for('CHAIN_5_AUTOMATIC_REFACTORING'), []));
        achievements.set('ALWAYS_GREEN_FOR_10_MINS', new Achievement(data.for('ALWAYS_GREEN_FOR_10_MINS'), []));
        achievements.set('NO_MOUSE_FOR_10_MINS', new Achievement(data.for('NO_MOUSE_FOR_10_MINS'), []));
        achievements.set('15_COMMITS_IN_1_HOUR', new Achievement(data.for('15_COMMITS_IN_1_HOUR'), []));
        achievements.set('KEEP_CODING_FOR_10_MINS', new Achievement(data.for('KEEP_CODING_FOR_10_MINS'), []));
        achievements.set('NO_CODE_FOR_10_MINS', new Achievement(data.for('NO_CODE_FOR_10_MINS'), []));
        achievements.set('NO_SITTING_FOR_10_MINS', new Achievement(data.for('NO_SITTING_FOR_10_MINS'), []));
        achievements.set('METHOD_THAT_RHYMES', new Achievement(data.for('METHOD_THAT_RHYMES'), []));
        achievements.set('NO_TESTS_FOR_10_MINS', new Achievement(data.for('NO_TESTS_FOR_10_MINS'), []));
        achievements.set('COMPLETE_KATA', new Achievement(data.for('COMPLETE_KATA'), []));
        return achievements;
    }

    private setupUnlockDependencies(achievements: Map<string, Achievement>) {
        // Line 1
        achievements.get('IDE_RENAME_VARIABLE').addUnlock(achievements.get('IDE_EXTRACT_VARIABLE'));
        achievements.get('IDE_RENAME_VARIABLE').addUnlock(achievements.get('REMOVE_IF'));
        achievements.get('IDE_RENAME_VARIABLE').addUnlock(achievements.get('REFACTOR_THEN_COMMIT'));

        // Line 2
        achievements.get('IDE_EXTRACT_VARIABLE').addUnlock(achievements.get('REMOVE_10_LINES_OF_CODE'));

        achievements.get('REMOVE_IF').addUnlock(achievements.get('REMOVE_10_LINES_OF_CODE'));
        achievements.get('REMOVE_IF').addUnlock(achievements.get('REMOVE_ELSE'));

        achievements.get('REFACTOR_THEN_COMMIT').addUnlock(achievements.get('IDE_EXTRACT_METHOD'));

        // Line 3
        achievements.get('REMOVE_10_LINES_OF_CODE').addUnlock(achievements.get('IDE_RENAME_METHOD'));

        achievements.get('REMOVE_ELSE').addUnlock(achievements.get('IDE_RENAME_METHOD'));

        achievements.get('IDE_EXTRACT_METHOD').addUnlock(achievements.get('GIT_RESET_HARD'));

        // Line 4
        achievements.get('IDE_RENAME_METHOD').addUnlock(achievements.get('IDE_INLINE_VARIABLE'));
        achievements.get('IDE_RENAME_METHOD').addUnlock(achievements.get('IDE_INLINE_METHOD'));

        achievements.get('GIT_RESET_HARD').addUnlock(achievements.get('IDE_INLINE_METHOD'));
        achievements.get('GIT_RESET_HARD').addUnlock(achievements.get('WRITE_TEST_AND_MAKE_PASS'));

        // Line 5
        achievements.get('IDE_INLINE_VARIABLE').addUnlock(achievements.get('PREPARATORY_REFACTORING'));

        achievements.get('IDE_INLINE_METHOD').addUnlock(achievements.get('PREPARATORY_REFACTORING'));

        achievements.get('WRITE_TEST_AND_MAKE_PASS').addUnlock(achievements.get('NO_MOUSE_FOR_10_MINS'));

        // Line 6
        achievements.get('PREPARATORY_REFACTORING').addUnlock(achievements.get('NO_CODE_FOR_10_MINS'));
        achievements.get('PREPARATORY_REFACTORING').addUnlock(achievements.get('CHAIN_5_AUTOMATIC_REFACTORING'));
        achievements.get('PREPARATORY_REFACTORING').addUnlock(achievements.get('15_COMMITS_IN_1_HOUR'));

        achievements.get('NO_MOUSE_FOR_10_MINS').addUnlock(achievements.get('15_COMMITS_IN_1_HOUR'));

        // Line 7
        achievements.get('NO_CODE_FOR_10_MINS').addUnlock(achievements.get('ASK_FOR_ADVICE'));

        achievements.get('CHAIN_5_AUTOMATIC_REFACTORING').addUnlock(achievements.get('ASK_FOR_ADVICE'));

        achievements.get('15_COMMITS_IN_1_HOUR').addUnlock(achievements.get('ASK_FOR_ADVICE'));

        // Line 8
        achievements.get('ASK_FOR_ADVICE').addUnlock(achievements.get('WRITE_METHOD_WITHOUT_E'));
        achievements.get('ASK_FOR_ADVICE').addUnlock(achievements.get('SOLUTION_SEEKER'));
        achievements.get('ASK_FOR_ADVICE').addUnlock(achievements.get('WRAP_PRIMITIVE'));

        // Line 9
        achievements.get('WRITE_METHOD_WITHOUT_E').addUnlock(achievements.get('IDE_CHANGE_METHOD_SIGNATURE'));
        achievements.get('WRITE_METHOD_WITHOUT_E').addUnlock(achievements.get('NO_IDE_WRITE_TEST_AND_MAKE_PASS'));

        achievements.get('SOLUTION_SEEKER').addUnlock(achievements.get('NO_IDE_WRITE_TEST_AND_MAKE_PASS'));

        achievements.get('WRAP_PRIMITIVE').addUnlock(achievements.get('NO_IDE_WRITE_TEST_AND_MAKE_PASS'));
        achievements.get('WRAP_PRIMITIVE').addUnlock(achievements.get('NO_SITTING_FOR_10_MINS'));

        // Line 10
        achievements.get('IDE_CHANGE_METHOD_SIGNATURE').addUnlock(achievements.get('COMMIT_EVERY_2_MINS_FOR_10_MINS'));

        achievements.get('NO_IDE_WRITE_TEST_AND_MAKE_PASS').addUnlock(achievements.get('COMMIT_EVERY_2_MINS_FOR_10_MINS'));
        achievements.get('NO_IDE_WRITE_TEST_AND_MAKE_PASS').addUnlock(achievements.get('NO_TESTS_FOR_10_MINS'));

        achievements.get('NO_SITTING_FOR_10_MINS').addUnlock(achievements.get('NO_TESTS_FOR_10_MINS'));
        achievements.get('NO_SITTING_FOR_10_MINS').addUnlock(achievements.get('WRITE_METHOD_WITHOUT_A'));

        // Line 11
        achievements.get('COMMIT_EVERY_2_MINS_FOR_10_MINS').addUnlock(achievements.get('REPLACE_SWITCH_BY_MAP'));

        achievements.get('NO_TESTS_FOR_10_MINS').addUnlock(achievements.get('GIT_AMEND'));
        achievements.get('NO_TESTS_FOR_10_MINS').addUnlock(achievements.get('GIT_REBASE_INTERACTIVE'));

        achievements.get('WRITE_METHOD_WITHOUT_A').addUnlock(achievements.get('GIT_REBASE_INTERACTIVE'));

        // Line 12
        achievements.get('REPLACE_SWITCH_BY_MAP').addUnlock(achievements.get('REPLACE_SWITCH_OR_CONDITIONAL_BY_POLYMORPHISM'));

        achievements.get('GIT_AMEND').addUnlock(achievements.get('REPLACE_SWITCH_OR_CONDITIONAL_BY_POLYMORPHISM'));

        achievements.get('GIT_REBASE_INTERACTIVE').addUnlock(achievements.get('REPLACE_SWITCH_OR_CONDITIONAL_BY_POLYMORPHISM'));
        achievements.get('GIT_REBASE_INTERACTIVE').addUnlock(achievements.get('REMOVE_20_LINES_OF_CODE'));

        // // Line 13
        achievements.get('REPLACE_SWITCH_OR_CONDITIONAL_BY_POLYMORPHISM').addUnlock(achievements.get('ALWAYS_GREEN_FOR_10_MINS'));
        achievements.get('REPLACE_SWITCH_OR_CONDITIONAL_BY_POLYMORPHISM').addUnlock(achievements.get('KEEP_CODING_FOR_10_MINS'));

        achievements.get('REMOVE_20_LINES_OF_CODE').addUnlock(achievements.get('REMOVE_50_LINES_OF_CODE'));

        // Line 14
        achievements.get('KEEP_CODING_FOR_10_MINS').addUnlock(achievements.get('REMOVE_DUPLICATED_CODE'));
        achievements.get('KEEP_CODING_FOR_10_MINS').addUnlock(achievements.get('STEAL_IDEA'));

        achievements.get('ALWAYS_GREEN_FOR_10_MINS').addUnlock(achievements.get('REMOVE_100_LINES_OF_CODE'));
        achievements.get('REMOVE_50_LINES_OF_CODE').addUnlock(achievements.get('REMOVE_100_LINES_OF_CODE'));

        // // Line 15
        achievements.get('REMOVE_DUPLICATED_CODE').addUnlock(achievements.get('METHOD_THAT_RHYMES'));

        achievements.get('STEAL_IDEA').addUnlock(achievements.get('METHOD_THAT_RHYMES'));
        achievements.get('STEAL_IDEA').addUnlock(achievements.get('WRAP_COLLECTION'));

        achievements.get('REMOVE_100_LINES_OF_CODE').addUnlock(achievements.get('WRAP_COLLECTION'));
    }
}
