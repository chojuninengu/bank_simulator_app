function PerformanceChart() {
    try {
        const [performanceData, setPerformanceData] = React.useState(null);

        React.useEffect(() => {
            const data = getPortfolioPerformance();
            if (data) {
                setPerformanceData(data.history);
            }
        }, []);

        if (!performanceData) return null;

        // Calculate chart dimensions and scales
        const chartHeight = 300;
        const chartWidth = 800;
        const padding = 40;

        // Calculate min and max values
        const values = performanceData.map(d => d.value);
        const minValue = Math.min(...values);
        const maxValue = Math.max(...values);

        // Create points for the line
        const points = performanceData.map((point, index) => {
            const x = (index / (performanceData.length - 1)) * (chartWidth - padding * 2) + padding;
            const y = chartHeight - (((point.value - minValue) / (maxValue - minValue)) * (chartHeight - padding * 2) + padding);
            return `${x},${y}`;
        }).join(' ');

        return (
            <Card data-name="performance-chart" title="Portfolio Performance" className="mb-6">
                <div className="chart-container">
                    <svg width={chartWidth} height={chartHeight}>
                        {/* Grid lines */}
                        {[...Array(5)].map((_, i) => {
                            const y = padding + (i * (chartHeight - padding * 2) / 4);
                            const value = maxValue - ((maxValue - minValue) * (i / 4));
                            return (
                                <g key={i}>
                                    <line
                                        x1={padding}
                                        y1={y}
                                        x2={chartWidth - padding}
                                        y2={y}
                                        stroke="#e2e8f0"
                                        strokeDasharray="5,5"
                                    />
                                    <text
                                        x={padding - 10}
                                        y={y}
                                        textAnchor="end"
                                        alignmentBaseline="middle"
                                        className="text-xs text-gray-500"
                                    >
                                        ${Math.round(value).toLocaleString()}
                                    </text>
                                </g>
                            );
                        })}

                        {/* Performance line */}
                        <polyline
                            points={points}
                            fill="none"
                            stroke="#667eea"
                            strokeWidth="2"
                        />

                        {/* Data points */}
                        {performanceData.map((point, index) => {
                            const x = (index / (performanceData.length - 1)) * (chartWidth - padding * 2) + padding;
                            const y = chartHeight - (((point.value - minValue) / (maxValue - minValue)) * (chartHeight - padding * 2) + padding);
                            return (
                                <g key={index}>
                                    <circle
                                        cx={x}
                                        cy={y}
                                        r="4"
                                        fill="#667eea"
                                    />
                                    <text
                                        x={x}
                                        y={chartHeight - 10}
                                        textAnchor="middle"
                                        className="text-xs text-gray-500"
                                    >
                                        {new Date(point.date).toLocaleDateString()}
                                    </text>
                                </g>
                            );
                        })}
                    </svg>
                </div>
            </Card>
        );
    } catch (error) {
        console.error('PerformanceChart component error:', error);
        reportError(error);
        return null;
    }
}
