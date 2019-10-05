require(['AnalyticsTracker', 'AchievementsView'], (AnalyticsTracker, AchievementsView) => {
    let analyticsTracker = new AnalyticsTracker.AnalyticsTracker(gtag);
    new AchievementsView.AchievementsView(analyticsTracker).display(document, "graph");
});
