require(['AnalyticsTracker', 'Achievements', 'AchievementsView'], (AnalyticsTracker, Achievements, AchievementsView) => {
    let analyticsTracker = new AnalyticsTracker.AnalyticsTracker(gtag);
    new Achievements.Achievements(document, analyticsTracker).createAllAchievements();
    new AchievementsView.AchievementsView(analyticsTracker).display(document, "graph");
});
