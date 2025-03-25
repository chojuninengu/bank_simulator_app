function PortfolioOverview() {
    try {
        const [portfolioData, setPortfolioData] = React.useState(null);

        React.useEffect(() => {
            const data = getPortfolioPerformance();
            setPortfolioData(data);
        }, []);

        if (!portfolioData) return null;

        return (
            <Card data-name="portfolio-overview" title="Portfolio Overview" className="mb-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div data-name="total-value" className="stat-card">
                        <p className="text-gray-600">Total Value</p>
                        <h4 className="text-2xl font-bold">${portfolioData.totalValue.toLocaleString()}</h4>
                        <p className={`text-sm ${portfolioData.dailyChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                            {portfolioData.dailyChange >= 0 ? '+' : ''}{portfolioData.dailyChange}% today
                        </p>
                    </div>
                    {portfolioData.holdings.map((holding, index) => (
                        <div key={index} data-name={`holding-${holding.type.toLowerCase()}`} className="stat-card">
                            <p className="text-gray-600">{holding.type}</p>
                            <h4 className="text-2xl font-bold">${holding.value.toLocaleString()}</h4>
                            <p className="text-sm text-gray-500">{holding.allocation}% of portfolio</p>
                        </div>
                    ))}
                </div>
            </Card>
        );
    } catch (error) {
        console.error('PortfolioOverview component error:', error);
        reportError(error);
        return null;
    }
}
