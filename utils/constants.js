const MARKET_DATA_REFRESH_INTERVAL = 30000;

const AUTH_TYPES = {
    LOGIN: 'login',
    REGISTER: 'register'
};

const INVESTMENT_TYPES = {
    STOCKS: 'stocks',
    CRYPTO: 'crypto',
    MUTUAL_FUNDS: 'mutual_funds',
    ETF: 'etf'
};

const RISK_LEVELS = {
    LOW: 'low',
    MEDIUM: 'medium',
    HIGH: 'high'
};

const NAVIGATION_ITEMS = [
    { id: 'dashboard', label: 'Dashboard', icon: 'fa-chart-line' },
    { id: 'portfolio', label: 'Portfolio', icon: 'fa-briefcase' },
    { id: 'market', label: 'Market', icon: 'fa-chart-bar' },
    { id: 'transactions', label: 'Transactions', icon: 'fa-exchange-alt' },
    { id: 'settings', label: 'Settings', icon: 'fa-cog' }
];
