function Dashboard({ user }) {
    try {
        return (
            <div data-name="dashboard-layout" className="flex min-h-screen bg-gray-50">
                <Sidebar />
                <div className="flex-1">
                    <Header user={user} />
                    <main className="p-6">
                        <div data-name="dashboard-content" className="max-w-7xl mx-auto">
                            <PortfolioOverview />
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <MarketTrends />
                                <InvestmentRecommendations />
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Dashboard page error:', error);
        reportError(error);
        return null;
    }
}
