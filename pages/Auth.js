function Auth({ onAuthSuccess }) {
    try {
        const [authType, setAuthType] = React.useState(AUTH_TYPES.LOGIN);

        const handleAuthSwitch = (type) => {
            setAuthType(type);
        };

        return (
            <div data-name="auth-page" className="bg-white rounded-xl shadow-xl p-8">
                {authType === AUTH_TYPES.LOGIN ? (
                    <Login 
                        onSubmit={onAuthSuccess}
                        onSwitchAuth={handleAuthSwitch}
                    />
                ) : (
                    <Register
                        onSubmit={onAuthSuccess}
                        onSwitchAuth={handleAuthSwitch}
                    />
                )}
            </div>
        );
    } catch (error) {
        console.error('Auth page error:', error);
        reportError(error);
        return null;
    }
}
