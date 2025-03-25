function Input({ 
    type = 'text',
    placeholder,
    value,
    onChange,
    error,
    label,
    className = ''
}) {
    try {
        return (
            <div data-name="input-container" className="mb-4">
                {label && (
                    <label data-name="input-label" className="block text-sm font-medium text-gray-700 mb-1">
                        {label}
                    </label>
                )}
                <input
                    data-name="input-field"
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={`input-field w-full px-4 py-2 rounded-lg ${error ? 'border-red-500' : ''} ${className}`}
                />
                {error && (
                    <p data-name="input-error" className="mt-1 text-sm text-red-500">
                        {error}
                    </p>
                )}
            </div>
        );
    } catch (error) {
        console.error('Input component error:', error);
        reportError(error);
        return null;
    }
}
