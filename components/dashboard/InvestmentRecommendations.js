function InvestmentRecommendations() {
    try {
        const recommendations = [
            {
                type: 'ETF',
                name: 'Vanguard S&P 500',
                symbol: 'VOO',
                riskLevel: 'Medium',
                potential: '8-10% annually'
            },
            {
                type: 'Stock',
                name: 'Technology Growth',
                symbol: 'TECH',
                riskLevel: 'High',
                potential: '15-20% annually'
            },
            {
                type: 'Bond',
                name: 'Government Bonds',
                symbol: 'GOVT',
                riskLevel: 'Low',
                potential: '3-4% annually'
            }
        ];

        return (
            <Card data-name="investment-recommendations" title="AI Recommendations" className="mb-6">
                <div className="space-y-4">
                    {recommendations.map((rec, index) => (
                        <div
                            key={index}
                            data-name={`recommendation-${rec.type.toLowerCase()}`}
                            className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="font-semibold">{rec.name}</h4>
                                    <p className="text-sm text-gray-600">{rec.symbol} • {rec.type}</p>
                                </div>
                                <div className="text-right">
                                    <p className={`text-sm ${
                                        rec.riskLevel === 'High' ? 'text-red-500' :
                                        rec.riskLevel === 'Medium' ? 'text-yellow-500' :
                                        'text-green-500'
                                    }`}>
                                        {rec.riskLevel} Risk
                                    </p>
                                    <p className="text-sm text-gray-600">{rec.potential}</p>
                                </div>
                            </div>
                            <Button
                                variant="outline"
                                className="mt-2 text-sm w-full"
                                onClick={() => {}}
                            >
                                Learn More
                            </Button>
                        </div>
                    ))}
                </div>
            </Card>
        );
    } catch (error) {
        console.error('InvestmentRecommendations component error:', error);
        reportError(error);
        return null;
    }
}
