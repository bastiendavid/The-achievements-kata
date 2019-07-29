export class AnalyticsTracker {
    private readonly gtag: any;

    constructor(gtag: any) {
        this.gtag = gtag;
    }

    achievementCompleted(achievementId: string) {
        this.gtag('event', 'achievement_completed', {'event_label': achievementId});
    }
}
