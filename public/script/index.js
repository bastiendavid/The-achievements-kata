require(['AnalyticsTracker', 'Achievements'], (AnalyticsTracker, Achievements) => {
    let analyticsTracker = new AnalyticsTracker.AnalyticsTracker(gtag);
    new Achievements.Achievements(document, analyticsTracker).createAllAchievements();
});
