function MarketTrends() {
    try {
        const [marketData, setMarketData] = React.useState(null);

        React.useEffect(() => {
            const fetchData = () => {
                const data = fetchMarketData();
                setMarketData(data);
            };

            fetchData();
            const interval = setInterval(fetchData, MARKET_DATA_REFRESH_INTERVAL);
            return () => clearInterval(interval);
        }, []);

        if (!marketData) return null;

        return (
            <Card data-name="market-trends" title="Market Trends" className="mb-6">
                <div className="space-y-6">
                    <div data-name="stocks-section">
                        <h4 className="font-semibold mb-2">Stocks</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {marketData.stocks.map((stock) => (
                                <div key={stock.symbol} className="stat-card">
                                    <p className="font-medium">{stock.symbol}</p>
                                    <p className="text-lg">${stock.price}</p>
                                    <p className={`text-sm ${stock.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                                        {stock.change >= 0 ? '+' : ''}{stock.change}%
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div data-name="crypto-section">
                        <h4 className="font-semibold mb-2">Crypto</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {marketData.crypto.map((crypto) => (
                                <div key={crypto.symbol} className="stat-card">
                                    <p className="font-medium">{crypto.symbol}</p>
                                    <p className="text-lg">${crypto.price}</p>
                                    <p className={`text-sm ${crypto.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                                        {crypto.change >= 0 ? '+' : ''}{crypto.change}%
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Card>
        );
    } catch (error) {
        console.error('MarketTrends component error:', error);
        reportError(error);
        return null;
    }
}
