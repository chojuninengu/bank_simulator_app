function Card({ title, children, className = '' }) {
    try {
        return (
            <div data-name="card" className={`card p-6 ${className}`}>
                {title && (
                    <h3 data-name="card-title" className="text-xl font-semibold mb-4">
                        {title}
                    </h3>
                )}
                <div data-name="card-content">
                    {children}
                </div>
            </div>
        );
    } catch (error) {
        console.error('Card component error:', error);
        reportError(error);
        return null;
    }
}
