function Sidebar() {
    try {
        return (
            <div data-name="sidebar" className="sidebar">
                <div className="p-6">
                    <h1 className="text-2xl font-bold text-gradient mb-8">FinvestPro</h1>
                    <nav>
                        {NAVIGATION_ITEMS.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                data-name={`nav-${item.id}`}
                                className="flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-100 mb-2"
                            >
                                <i className={`fas ${item.icon} w-5`}></i>
                                <span className="ml-3">{item.label}</span>
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Sidebar component error:', error);
        reportError(error);
        return null;
    }
}
