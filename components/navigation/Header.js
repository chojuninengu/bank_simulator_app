function Header({ user }) {
    try {
        return (
            <header data-name="header" className="bg-white border-b border-gray-200 px-6 py-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="pl-10 pr-4 py-2 border rounded-lg w-64"
                            />
                            <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="p-2 text-gray-600 hover:text-gray-900">
                            <i className="fas fa-bell"></i>
                        </button>
                        <div className="flex items-center space-x-2">
                            <img
                                src="https://ui-avatars.com/api/?name=John+Doe&background=0D8ABC&color=fff"
                                alt="Profile"
                                className="w-8 h-8 rounded-full"
                            />
                            <span className="font-medium">{user?.name || 'Guest'}</span>
                        </div>
                    </div>
                </div>
            </header>
        );
    } catch (error) {
        console.error('Header component error:', error);
        reportError(error);
        return null;
    }
}
