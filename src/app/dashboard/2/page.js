function DashboardTwo() {
    return (
        <>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div className="p-4 bg-gray-200">Column 1</div>
                    <div className="p-4 bg-gray-200">Column 2</div>
                    <div className="p-4 bg-gray-200">Column 3</div>
                    <div className="p-4 bg-gray-200">Column 4</div>
                </div>
            </div>
        </>
    );
}

export default DashboardTwo;
