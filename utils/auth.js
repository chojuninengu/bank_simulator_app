function validateCredentials(email, password) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return {
        isValid: emailRegex.test(email) && password.length >= 8,
        errors: {
            email: !emailRegex.test(email) ? 'Invalid email format' : '',
            password: password.length < 8 ? 'Password must be at least 8 characters' : ''
        }
    };
}

function handleLogin(email, password) {
    try {
        const validation = validateCredentials(email, password);
        if (!validation.isValid) {
            return { success: false, errors: validation.errors };
        }
        // Simulated login success
        return {
            success: true,
            user: {
                id: '12345',
                email,
                name: 'John Doe',
                role: 'user'
            }
        };
    } catch (error) {
        console.error('Login error:', error);
        return { success: false, error: 'Login failed. Please try again.' };
    }
}

function handleRegister(email, password, name) {
    try {
        const validation = validateCredentials(email, password);
        if (!validation.isValid) {
            return { success: false, errors: validation.errors };
        }
        // Simulated registration success
        return {
            success: true,
            user: {
                id: '12345',
                email,
                name,
                role: 'user'
            }
        };
    } catch (error) {
        console.error('Registration error:', error);
        return { success: false, error: 'Registration failed. Please try again.' };
    }
}
