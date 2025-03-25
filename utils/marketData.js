function fetchMarketData() {
    try {
        // Simulated market data
        return {
            stocks: [
                { symbol: 'AAPL', price: 150.25, change: 2.5 },
                { symbol: 'GOOGL', price: 2750.80, change: -1.2 },
                { symbol: 'MSFT', price: 305.15, change: 1.8 }
            ],
            crypto: [
                { symbol: 'BTC', price: 45000.00, change: 3.2 },
                { symbol: 'ETH', price: 3200.50, change: 2.1 }
            ],
            indices: [
                { symbol: 'S&P 500', value: 4580.25, change: 0.8 },
                { symbol: 'NASDAQ', value: 14250.75, change: 1.1 }
            ]
        };
    } catch (error) {
        console.error('Error fetching market data:', error);
        reportError(error);
        return null;
    }
}

function getPortfolioPerformance() {
    try {
        return {
            totalValue: 125000,
            dailyChange: 2.5,
            holdings: [
                { type: 'Stocks', value: 75000, allocation: 60 },
                { type: 'Crypto', value: 25000, allocation: 20 },
                { type: 'Cash', value: 25000, allocation: 20 }
            ],
            history: [
                { date: '2024-01-01', value: 100000 },
                { date: '2024-01-15', value: 110000 },
                { date: '2024-02-01', value: 125000 }
            ]
        };
    } catch (error) {
        console.error('Error getting portfolio performance:', error);
        reportError(error);
        return null;
    }
}
