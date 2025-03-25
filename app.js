function App() {
    try {
        const [user, setUser] = React.useState(null);

        const handleAuthSuccess = (userData) => {
            setUser(userData);
        };

        return (
            <div data-name="app-container">
                {user ? (
                    <Dashboard user={user} />
                ) : (
                    <div className="auth-container flex items-center justify-center p-6">
                        <Auth onAuthSuccess={handleAuthSuccess} />
                    </div>
                )}
            </div>
        );
    } catch (error) {
        console.error('App error:', error);
        reportError(error);
        return null;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
