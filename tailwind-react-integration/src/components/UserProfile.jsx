function UserProfile() {
    return (
        <div
            className="bg-gray-100 p-8 sm:p-4 max-w-sm mx sm:max-w-xs-auto my-20 rounded-lg shadow-lg"
        >
            <img
                src="https://via.placeholder.com/150"
                alt="User"
                className="rounded-full w-36 h-36 sm:w-24 sm:h-24 mx-auto"
            />
            <h1 className="text-xl sm:text-lg text-blue-800 my-4">John Doe</h1>
            <p className="text-gray-600 text-base sm:text-sm">Developer at Example Co. Loves to write code and explore new technologies.</p>
        </div>
    );
}

export default UserProfile;