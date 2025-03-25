function TransactionHistory() {
    try {
        const transactions = [
            {
                id: 1,
                type: 'buy',
                asset: 'AAPL',
                amount: 5,
                price: 150.25,
                total: 751.25,
                date: '2024-02-01T10:30:00Z',
                status: 'completed'
            },
            {
                id: 2,
                type: 'sell',
                asset: 'BTC',
                amount: 0.1,
                price: 45000.00,
                total: 4500.00,
                date: '2024-01-30T15:45:00Z',
                status: 'completed'
            },
            {
                id: 3,
                type: 'buy',
                asset: 'VOO',
                amount: 10,
                price: 380.50,
                total: 3805.00,
                date: '2024-01-28T09:15:00Z',
                status: 'completed'
            }
        ];

        return (
            <Card data-name="transaction-history" title="Recent Transactions" className="mb-6">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="text-left border-b">
                                <th className="pb-3 font-semibold text-gray-600">Type</th>
                                <th className="pb-3 font-semibold text-gray-600">Asset</th>
                                <th className="pb-3 font-semibold text-gray-600">Amount</th>
                                <th className="pb-3 font-semibold text-gray-600">Price</th>
                                <th className="pb-3 font-semibold text-gray-600">Total</th>
                                <th className="pb-3 font-semibold text-gray-600">Date</th>
                                <th className="pb-3 font-semibold text-gray-600">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((transaction) => (
                                <tr 
                                    key={transaction.id}
                                    data-name={`transaction-${transaction.id}`}
                                    className="border-b last:border-b-0"
                                >
                                    <td className="py-4">
                                        <span className={`inline-block px-2 py-1 rounded text-sm ${
                                            transaction.type === 'buy' 
                                                ? 'bg-green-100 text-green-800'
                                                : 'bg-red-100 text-red-800'
                                        }`}>
                                            {transaction.type.toUpperCase()}
                                        </span>
                                    </td>
                                    <td className="py-4 font-medium">{transaction.asset}</td>
                                    <td className="py-4">{transaction.amount}</td>
                                    <td className="py-4">${transaction.price.toLocaleString()}</td>
                                    <td className="py-4">${transaction.total.toLocaleString()}</td>
                                    <td className="py-4">
                                        {new Date(transaction.date).toLocaleDateString()}
                                    </td>
                                    <td className="py-4">
                                        <span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded text-sm">
                                            {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="mt-4 text-center">
                    <Button variant="outline" className="text-sm">
                        View All Transactions
                    </Button>
                </div>
            </Card>
        );
    } catch (error) {
        console.error('TransactionHistory component error:', error);
        reportError(error);
        return null;
    }
}
