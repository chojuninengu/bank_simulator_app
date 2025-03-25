function Button({ children, onClick, variant = 'primary', className = '', disabled = false }) {
    try {
        const baseClasses = 'px-6 py-2 rounded-lg font-medium transition-all duration-300 disabled:opacity-50';
        const variants = {
            primary: 'button-primary text-white',
            secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
            outline: 'border-2 border-gray-300 hover:border-gray-400'
        };

        return (
            <button
                data-name="button"
                onClick={onClick}
                disabled={disabled}
                className={`${baseClasses} ${variants[variant]} ${className}`}
            >
                {children}
            </button>
        );
    } catch (error) {
        console.error('Button component error:', error);
        reportError(error);
        return null;
    }
}
