function Register({ onSubmit, onSwitchAuth }) {
    try {
        const [formData, setFormData] = React.useState({
            name: '',
            email: '',
            password: ''
        });
        const [errors, setErrors] = React.useState({});

        const handleSubmit = (e) => {
            e.preventDefault();
            const result = handleRegister(formData.email, formData.password, formData.name);
            if (result.success) {
                onSubmit(result.user);
            } else {
                setErrors(result.errors || { general: result.error });
            }
        };

        return (
            <div data-name="register-form" className="max-w-md w-full">
                <h2 className="text-3xl font-bold text-center mb-8">Create Account</h2>
                <form onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        label="Full Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        error={errors.name}
                    />
                    <Input
                        type="email"
                        label="Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        error={errors.email}
                    />
                    <Input
                        type="password"
                        label="Password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        error={errors.password}
                    />
                    {errors.general && (
                        <p className="text-red-500 text-sm mb-4">{errors.general}</p>
                    )}
                    <Button className="w-full mb-4">Register</Button>
                    <p className="text-center">
                        Already have an account?{' '}
                        <button
                            type="button"
                            onClick={() => onSwitchAuth(AUTH_TYPES.LOGIN)}
                            className="text-blue-600 hover:text-blue-800"
                        >
                            Login
                        </button>
                    </p>
                </form>
            </div>
        );
    } catch (error) {
        console.error('Register component error:', error);
        reportError(error);
        return null;
    }
}
